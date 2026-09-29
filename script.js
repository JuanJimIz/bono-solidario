// Credenciales de conexión a Supabase
const SUPABASE_URL = 'https://wwfjahwxqyptbcbhiavm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZmphaHd4cXlwdGJjYmhpYXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2OTY0MDAsImV4cCI6MjEwNjI3MjQwMH0.ICLMV9esMvyZgF0wq9T-A6jxjJgA6Hoo8zPdW37kvw0';

// Inicialización segura del cliente Supabase
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Arreglo global dinámico para almacenar la información de Supabase
let ticketsData = [];
let isAdmin = false;
let selectedTicketId = null;

// Elementos del DOM
const board = document.getElementById('board');
const searchInput = document.getElementById('searchInput');
const countAvailable = document.getElementById('countAvailable');
const countSold = document.getElementById('countSold');
const adminToggleBtn = document.getElementById('adminToggleBtn');
const exportBtn = document.getElementById('exportBtn');
const adminModal = document.getElementById('adminModal');
const ticketForm = document.getElementById('ticketForm');
const modalTicketNum = document.getElementById('modalTicketNum');
const modalCombinations = document.getElementById('modalCombinations');
const statusSelect = document.getElementById('statusSelect');
const buyerNameInput = document.getElementById('buyerName');
const buyerPhoneInput = document.getElementById('buyerPhone');
const closeModalBtn = document.getElementById('closeModalBtn');
const amountPaidInput = document.getElementById('amountPaid');
const pendingBalanceDisplay = document.getElementById('pendingBalanceDisplay');

// Elementos para el modal de Cliente
const clientModal = document.getElementById('clientModal');
const clientModalText = document.getElementById('clientModalText');
const wsLuzDaryBtn = document.getElementById('wsLuzDaryBtn');
const wsMonicaBtn = document.getElementById('wsMonicaBtn');
const closeClientModalBtn = document.getElementById('closeClientModalBtn');

if (closeClientModalBtn) {
    closeClientModalBtn.addEventListener('click', () => clientModal.classList.add('hidden'));
}

// Cálculo dinámico de saldo pendiente al digitar un abono
if (amountPaidInput) {
    amountPaidInput.addEventListener('input', (e) => {
        const paid = Number(e.target.value) || 0;
        const pending = Math.max(0, 50000 - paid);
        if (pendingBalanceDisplay) {
            pendingBalanceDisplay.textContent = `$${pending.toLocaleString('es-CO')}`;
        }
    });
}

// 1. OBTENER LAS 500 BOLETAS DESDE SUPABASE (Tabla 'tickets')
async function fetchTickets() {
    if (!supabaseClient) {
        console.error("Librería de Supabase no cargada correctamente.");
        return;
    }

    const { data, error } = await supabaseClient
        .from('tickets')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error("Error al cargar datos desde Supabase:", error);
        return;
    }

    ticketsData = data.map(t => ({
        id: t.id,
        num1: t.num1,
        num2: t.num2,
        status: t.status || 'available',
        buyerName: t.buyer_name || '',
        buyerPhone: t.buyer_phone || '',
        amountPaid: Number(t.amount_paid) || 0
    }));

    renderBoard(searchInput ? searchInput.value : '');
}

// 2. DIBUJAR LAS TARJETAS EN PANTALLA
function renderBoard(filter = '') {
    if (!board) return;
    board.innerHTML = '';
    let availableCount = 0;
    let soldCount = 0;

    const query = filter.trim().toLowerCase();

    ticketsData.forEach(ticket => {
        const matches = ticket.id.toString().includes(query) || 
                        ticket.num1.includes(query) || 
                        ticket.num2.includes(query);

        const isOccupied = ticket.status === 'sold' || ticket.status === 'reserved';

        if (isOccupied) soldCount++;
        else availableCount++;

        if (query && !matches) return;

        const card = document.createElement('div');
        card.className = `ticket-card ${isOccupied ? 'sold' : 'available'}`;
        card.innerHTML = `
            <div class="ticket-num">Boleta #${ticket.id}</div>
            <div class="ticket-combos">
                <span class="combo-badge">${ticket.num1}</span>
                <span class="combo-badge">${ticket.num2}</span>
            </div>
            <span class="ticket-status">${isOccupied ? 'VENDIDA' : 'LIBRE'}</span>
        `;

        card.addEventListener('click', () => handleTicketClick(ticket));
        board.appendChild(card);
    });

    if (countAvailable) countAvailable.textContent = availableCount;
    if (countSold) countSold.textContent = soldCount;
}

// Hash SHA-256 de la contraseña (reemplaza el texto entre comillas por tu código generado)
const ADMIN_PASSWORD_HASH = "5db04e46b0c213b7ed285f173fad372723af2bd3ce4e6fdb477f2d119ece74cf";

// Función auxiliar para encriptar en tiempo real la clave que digite el usuario
async function hashPassword(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Alternar Modo Administrador protegido por Hash
if (adminToggleBtn) {
    adminToggleBtn.addEventListener('click', async () => {
        if (!isAdmin) {
            const pass = prompt("Ingresa la clave de administración:");
            if (pass !== null && pass.trim() !== "") {
                const inputHash = await hashPassword(pass);
                
                if (inputHash === ADMIN_PASSWORD_HASH) {
                    isAdmin = true;
                    adminToggleBtn.textContent = "Modo Cliente (Salir)";
                    if (exportBtn) exportBtn.classList.remove('hidden');
                    alert("Modo Administrador activado.");
                } else {
                    alert("Contraseña incorrecta.");
                }
            }
        } else {
            isAdmin = false;
            adminToggleBtn.textContent = "Modo Administrador";
            if (exportBtn) exportBtn.classList.add('hidden');
        }
    });
}

// Manejo de clic en boletas
function handleTicketClick(ticket) {
    if (isAdmin) {
        selectedTicketId = ticket.id;
        if (modalTicketNum) modalTicketNum.textContent = ticket.id;
        if (modalCombinations) modalCombinations.textContent = `Números: ${ticket.num1} - ${ticket.num2}`;
        if (statusSelect) statusSelect.value = ticket.status;
        if (buyerNameInput) buyerNameInput.value = ticket.buyerName || '';
        if (buyerPhoneInput) buyerPhoneInput.value = ticket.buyerPhone || '';
        
        const paid = ticket.amountPaid || (ticket.status === 'sold' ? 50000 : 0);
        if (amountPaidInput) amountPaidInput.value = paid;
        if (pendingBalanceDisplay) {
            pendingBalanceDisplay.textContent = `$${(50000 - paid).toLocaleString('es-CO')}`;
        }

        toggleBuyerFields();
        if (adminModal) adminModal.classList.remove('hidden');
        return;
    }

    if (ticket.status === 'available') {
        const message = encodeURIComponent(
            `¡Hola! Me interesa apartar la boleta con las combinaciones ${ticket.num1} y ${ticket.num2} del Bono Solidario.`
        );

        if (clientModalText) {
            clientModalText.textContent = `Combinaciones seleccionadas: ${ticket.num1} - ${ticket.num2}`;
        }

        if (wsLuzDaryBtn) wsLuzDaryBtn.href = `https://wa.me/573224484917?text=${message}`;
        if (wsMonicaBtn) wsMonicaBtn.href = `https://wa.me/573128742283?text=${message}`;

        if (clientModal) clientModal.classList.remove('hidden');
    }
}

// Ocultar o mostrar campos de comprador según el estado
function toggleBuyerFields() {
    if (!statusSelect) return;
    const isFree = statusSelect.value === 'available';
    
    document.querySelectorAll('.buyer-field').forEach(el => {
        el.style.display = isFree ? 'none' : 'block';
    });

    if (buyerNameInput) buyerNameInput.required = !isFree;
    if (buyerPhoneInput) buyerPhoneInput.required = !isFree;
}

if (statusSelect) statusSelect.addEventListener('change', toggleBuyerFields);

// 3. GUARDAR CAMBIOS DIRECTAMENTE EN SUPABASE (Tabla 'tickets')
if (ticketForm) {
    ticketForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const isFree = statusSelect.value === 'available';
        
        if (!isFree) {
            if (!buyerNameInput.value.trim() || !buyerPhoneInput.value.trim()) {
                alert("Por favor ingresa el nombre y teléfono del comprador.");
                return;
            }
        }

        const newStatus = statusSelect.value;
        const newBuyerName = !isFree ? buyerNameInput.value.trim() : '';
        const newBuyerPhone = !isFree ? buyerPhoneInput.value.trim() : '';
        const newAmountPaid = !isFree ? (Number(amountPaidInput.value) || 0) : 0;

        const { error } = await supabaseClient
            .from('tickets')
            .update({
                status: newStatus,
                buyer_name: newBuyerName,
                buyer_phone: newBuyerPhone,
                amount_paid: newAmountPaid
            })
            .eq('id', selectedTicketId);

        if (error) {
            alert("Error al guardar en la base de datos: " + error.message);
            return;
        }

        await fetchTickets();
        if (adminModal) adminModal.classList.add('hidden');
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => adminModal.classList.add('hidden'));
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => renderBoard(e.target.value));
}

// Exportar CSV
if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        let csv = "Boleta,Numero1,Numero2,Estado,Comprador,Telefono,Abonado,Saldo_Pendiente\n";
        
        ticketsData.forEach(t => {
            const isOccupied = t.status === 'sold' || t.status === 'reserved';
            const paid = t.amountPaid || (isOccupied ? 50000 : 0);
            const pending = isOccupied ? Math.max(0, 50000 - paid) : 0;
            const statusText = t.status === 'available' ? 'Libre' : (t.status === 'reserved' ? 'Separada' : 'Pagada');

            csv += `${t.id},${t.num1},${t.num2},${statusText},"${t.buyerName}","${t.buyerPhone}",${paid},${pending}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "ventas_bono_solidario.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Cierre de modales por fuera
window.addEventListener('click', (e) => {
    if (e.target === clientModal) clientModal.classList.add('hidden');
    if (e.target === adminModal) adminModal.classList.add('hidden');
});

// Inicialización
fetchTickets();