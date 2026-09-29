// LISTA COMPLETA DE 500 BOLETAS EXACTAS DESDE TU EXCEL
const ticketsData = [
    { id: 1, num1: "726", num2: "000", status: "available", buyerName: "", buyerPhone: "" },
    { id: 2, num1: "725", num2: "001", status: "available", buyerName: "", buyerPhone: "" },
    { id: 3, num1: "724", num2: "002", status: "available", buyerName: "", buyerPhone: "" },
    { id: 4, num1: "723", num2: "003", status: "available", buyerName: "", buyerPhone: "" },
    { id: 5, num1: "722", num2: "004", status: "available", buyerName: "", buyerPhone: "" },
    { id: 6, num1: "721", num2: "005", status: "available", buyerName: "", buyerPhone: "" },
    { id: 7, num1: "720", num2: "006", status: "available", buyerName: "", buyerPhone: "" },
    { id: 8, num1: "719", num2: "007", status: "available", buyerName: "", buyerPhone: "" },
    { id: 9, num1: "718", num2: "008", status: "available", buyerName: "", buyerPhone: "" },
    { id: 10, num1: "717", num2: "009", status: "available", buyerName: "", buyerPhone: "" },
    { id: 11, num1: "716", num2: "010", status: "available", buyerName: "", buyerPhone: "" },
    { id: 12, num1: "715", num2: "011", status: "available", buyerName: "", buyerPhone: "" },
    { id: 13, num1: "714", num2: "012", status: "available", buyerName: "", buyerPhone: "" },
    { id: 14, num1: "713", num2: "013", status: "available", buyerName: "", buyerPhone: "" },
    { id: 15, num1: "712", num2: "014", status: "available", buyerName: "", buyerPhone: "" },
    { id: 16, num1: "711", num2: "015", status: "available", buyerName: "", buyerPhone: "" },
    { id: 17, num1: "710", num2: "016", status: "available", buyerName: "", buyerPhone: "" },
    { id: 18, num1: "709", num2: "017", status: "available", buyerName: "", buyerPhone: "" },
    { id: 19, num1: "708", num2: "018", status: "available", buyerName: "", buyerPhone: "" },
    { id: 20, num1: "707", num2: "019", status: "available", buyerName: "", buyerPhone: "" },
    { id: 21, num1: "706", num2: "020", status: "available", buyerName: "", buyerPhone: "" },
    { id: 22, num1: "705", num2: "021", status: "available", buyerName: "", buyerPhone: "" },
    { id: 23, num1: "704", num2: "022", status: "available", buyerName: "", buyerPhone: "" },
    { id: 24, num1: "703", num2: "023", status: "available", buyerName: "", buyerPhone: "" },
    { id: 25, num1: "702", num2: "024", status: "available", buyerName: "", buyerPhone: "" },
    { id: 26, num1: "701", num2: "025", status: "available", buyerName: "", buyerPhone: "" },
    { id: 27, num1: "700", num2: "026", status: "available", buyerName: "", buyerPhone: "" },
    { id: 28, num1: "814", num2: "027", status: "available", buyerName: "", buyerPhone: "" },
    { id: 29, num1: "813", num2: "028", status: "available", buyerName: "", buyerPhone: "" },
    { id: 30, num1: "812", num2: "029", status: "available", buyerName: "", buyerPhone: "" },
    { id: 31, num1: "811", num2: "030", status: "available", buyerName: "", buyerPhone: "" },
    { id: 32, num1: "810", num2: "031", status: "available", buyerName: "", buyerPhone: "" },
    { id: 33, num1: "809", num2: "032", status: "available", buyerName: "", buyerPhone: "" },
    { id: 34, num1: "808", num2: "033", status: "available", buyerName: "", buyerPhone: "" },
    { id: 35, num1: "807", num2: "034", status: "available", buyerName: "", buyerPhone: "" },
    { id: 36, num1: "806", num2: "035", status: "available", buyerName: "", buyerPhone: "" },
    { id: 37, num1: "805", num2: "036", status: "available", buyerName: "", buyerPhone: "" },
    { id: 38, num1: "804", num2: "037", status: "available", buyerName: "", buyerPhone: "" },
    { id: 39, num1: "803", num2: "038", status: "available", buyerName: "", buyerPhone: "" },
    { id: 40, num1: "802", num2: "039", status: "available", buyerName: "", buyerPhone: "" },
    { id: 41, num1: "801", num2: "040", status: "available", buyerName: "", buyerPhone: "" },
    { id: 42, num1: "800", num2: "041", status: "available", buyerName: "", buyerPhone: "" },
    { id: 43, num1: "511", num2: "042", status: "available", buyerName: "", buyerPhone: "" },
    { id: 44, num1: "510", num2: "043", status: "available", buyerName: "", buyerPhone: "" },
    { id: 45, num1: "509", num2: "044", status: "available", buyerName: "", buyerPhone: "" },
    { id: 46, num1: "508", num2: "045", status: "available", buyerName: "", buyerPhone: "" },
    { id: 47, num1: "507", num2: "046", status: "available", buyerName: "", buyerPhone: "" },
    { id: 48, num1: "506", num2: "047", status: "available", buyerName: "", buyerPhone: "" },
    { id: 49, num1: "505", num2: "048", status: "available", buyerName: "", buyerPhone: "" },
    { id: 50, num1: "504", num2: "049", status: "available", buyerName: "", buyerPhone: "" },
    { id: 51, num1: "503", num2: "050", status: "available", buyerName: "", buyerPhone: "" },
    { id: 52, num1: "502", num2: "051", status: "available", buyerName: "", buyerPhone: "" },
    { id: 53, num1: "501", num2: "052", status: "available", buyerName: "", buyerPhone: "" },
    { id: 54, num1: "500", num2: "053", status: "available", buyerName: "", buyerPhone: "" },
    { id: 55, num1: "903", num2: "054", status: "available", buyerName: "", buyerPhone: "" },
    { id: 56, num1: "902", num2: "055", status: "available", buyerName: "", buyerPhone: "" },
    { id: 57, num1: "901", num2: "056", status: "available", buyerName: "", buyerPhone: "" },
    { id: 58, num1: "900", num2: "057", status: "available", buyerName: "", buyerPhone: "" },
    { id: 59, num1: "614", num2: "058", status: "available", buyerName: "", buyerPhone: "" },
    { id: 60, num1: "613", num2: "059", status: "available", buyerName: "", buyerPhone: "" },
    { id: 61, num1: "612", num2: "060", status: "available", buyerName: "", buyerPhone: "" },
    { id: 62, num1: "611", num2: "061", status: "available", buyerName: "", buyerPhone: "" },
    { id: 63, num1: "610", num2: "062", status: "available", buyerName: "", buyerPhone: "" },
    { id: 64, num1: "609", num2: "063", status: "available", buyerName: "", buyerPhone: "" },
    { id: 65, num1: "608", num2: "064", status: "available", buyerName: "", buyerPhone: "" },
    { id: 66, num1: "607", num2: "065", status: "available", buyerName: "", buyerPhone: "" },
    { id: 67, num1: "606", num2: "066", status: "available", buyerName: "", buyerPhone: "" },
    { id: 68, num1: "605", num2: "067", status: "available", buyerName: "", buyerPhone: "" },
    { id: 69, num1: "604", num2: "068", status: "available", buyerName: "", buyerPhone: "" },
    { id: 70, num1: "603", num2: "069", status: "available", buyerName: "", buyerPhone: "" },
    { id: 71, num1: "602", num2: "070", status: "available", buyerName: "", buyerPhone: "" },
    { id: 72, num1: "601", num2: "071", status: "available", buyerName: "", buyerPhone: "" },
    { id: 73, num1: "600", num2: "072", status: "available", buyerName: "", buyerPhone: "" },
    { id: 74, num1: "536", num2: "073", status: "available", buyerName: "", buyerPhone: "" },
    { id: 75, num1: "535", num2: "074", status: "available", buyerName: "", buyerPhone: "" },
    { id: 76, num1: "534", num2: "075", status: "available", buyerName: "", buyerPhone: "" },
    { id: 77, num1: "533", num2: "076", status: "available", buyerName: "", buyerPhone: "" },
    { id: 78, num1: "532", num2: "077", status: "available", buyerName: "", buyerPhone: "" },
    { id: 79, num1: "531", num2: "078", status: "available", buyerName: "", buyerPhone: "" },
    { id: 80, num1: "530", num2: "079", status: "available", buyerName: "", buyerPhone: "" },
    { id: 81, num1: "529", num2: "080", status: "available", buyerName: "", buyerPhone: "" },
    { id: 82, num1: "528", num2: "081", status: "available", buyerName: "", buyerPhone: "" },
    { id: 83, num1: "527", num2: "082", status: "available", buyerName: "", buyerPhone: "" },
    { id: 84, num1: "526", num2: "083", status: "available", buyerName: "", buyerPhone: "" },
    { id: 85, num1: "525", num2: "084", status: "available", buyerName: "", buyerPhone: "" },
    { id: 86, num1: "524", num2: "085", status: "available", buyerName: "", buyerPhone: "" },
    { id: 87, num1: "523", num2: "086", status: "available", buyerName: "", buyerPhone: "" },
    { id: 88, num1: "522", num2: "087", status: "available", buyerName: "", buyerPhone: "" },
    { id: 89, num1: "521", num2: "088", status: "available", buyerName: "", buyerPhone: "" },
    { id: 90, num1: "520", num2: "089", status: "available", buyerName: "", buyerPhone: "" },
    { id: 91, num1: "519", num2: "090", status: "available", buyerName: "", buyerPhone: "" },
    { id: 92, num1: "518", num2: "091", status: "available", buyerName: "", buyerPhone: "" },
    { id: 93, num1: "517", num2: "092", status: "available", buyerName: "", buyerPhone: "" },
    { id: 94, num1: "516", num2: "093", status: "available", buyerName: "", buyerPhone: "" },
    { id: 95, num1: "515", num2: "094", status: "available", buyerName: "", buyerPhone: "" },
    { id: 96, num1: "514", num2: "095", status: "available", buyerName: "", buyerPhone: "" },
    { id: 97, num1: "513", num2: "096", status: "available", buyerName: "", buyerPhone: "" },
    { id: 98, num1: "512", num2: "097", status: "available", buyerName: "", buyerPhone: "" },
    { id: 99, num1: "633", num2: "098", status: "available", buyerName: "", buyerPhone: "" },
    { id: 100, num1: "632", num2: "099", status: "available", buyerName: "", buyerPhone: "" },
    { id: 101, num1: "631", num2: "100", status: "available", buyerName: "", buyerPhone: "" },
    { id: 102, num1: "630", num2: "101", status: "available", buyerName: "", buyerPhone: "" },
    { id: 103, num1: "629", num2: "102", status: "available", buyerName: "", buyerPhone: "" },
    { id: 104, num1: "628", num2: "103", status: "available", buyerName: "", buyerPhone: "" },
    { id: 105, num1: "627", num2: "104", status: "available", buyerName: "", buyerPhone: "" },
    { id: 106, num1: "626", num2: "105", status: "available", buyerName: "", buyerPhone: "" },
    { id: 107, num1: "625", num2: "106", status: "available", buyerName: "", buyerPhone: "" },
    { id: 108, num1: "624", num2: "107", status: "available", buyerName: "", buyerPhone: "" },
    { id: 109, num1: "623", num2: "108", status: "available", buyerName: "", buyerPhone: "" },
    { id: 110, num1: "622", num2: "109", status: "available", buyerName: "", buyerPhone: "" },
    { id: 111, num1: "621", num2: "110", status: "available", buyerName: "", buyerPhone: "" },
    { id: 112, num1: "620", num2: "111", status: "available", buyerName: "", buyerPhone: "" },
    { id: 113, num1: "619", num2: "112", status: "available", buyerName: "", buyerPhone: "" },
    { id: 114, num1: "618", num2: "113", status: "available", buyerName: "", buyerPhone: "" },
    { id: 115, num1: "617", num2: "114", status: "available", buyerName: "", buyerPhone: "" },
    { id: 116, num1: "616", num2: "115", status: "available", buyerName: "", buyerPhone: "" },
    { id: 117, num1: "615", num2: "116", status: "available", buyerName: "", buyerPhone: "" },
    { id: 118, num1: "752", num2: "117", status: "available", buyerName: "", buyerPhone: "" },
    { id: 119, num1: "751", num2: "118", status: "available", buyerName: "", buyerPhone: "" },
    { id: 120, num1: "750", num2: "119", status: "available", buyerName: "", buyerPhone: "" },
    { id: 121, num1: "749", num2: "120", status: "available", buyerName: "", buyerPhone: "" },
    { id: 122, num1: "748", num2: "121", status: "available", buyerName: "", buyerPhone: "" },
    { id: 123, num1: "747", num2: "122", status: "available", buyerName: "", buyerPhone: "" },
    { id: 124, num1: "746", num2: "123", status: "available", buyerName: "", buyerPhone: "" },
    { id: 125, num1: "745", num2: "124", status: "available", buyerName: "", buyerPhone: "" },
    { id: 126, num1: "744", num2: "125", status: "available", buyerName: "", buyerPhone: "" },
    { id: 127, num1: "743", num2: "126", status: "available", buyerName: "", buyerPhone: "" },
    { id: 128, num1: "742", num2: "127", status: "available", buyerName: "", buyerPhone: "" },
    { id: 129, num1: "741", num2: "128", status: "available", buyerName: "", buyerPhone: "" },
    { id: 130, num1: "740", num2: "129", status: "available", buyerName: "", buyerPhone: "" },
    { id: 131, num1: "739", num2: "130", status: "available", buyerName: "", buyerPhone: "" },
    { id: 132, num1: "738", num2: "131", status: "available", buyerName: "", buyerPhone: "" },
    { id: 133, num1: "737", num2: "132", status: "available", buyerName: "", buyerPhone: "" },
    { id: 134, num1: "736", num2: "133", status: "available", buyerName: "", buyerPhone: "" },
    { id: 135, num1: "735", num2: "134", status: "available", buyerName: "", buyerPhone: "" },
    { id: 136, num1: "734", num2: "135", status: "available", buyerName: "", buyerPhone: "" },
    { id: 137, num1: "733", num2: "136", status: "available", buyerName: "", buyerPhone: "" },
    { id: 138, num1: "732", num2: "137", status: "available", buyerName: "", buyerPhone: "" },
    { id: 139, num1: "731", num2: "138", status: "available", buyerName: "", buyerPhone: "" },
    { id: 140, num1: "730", num2: "139", status: "available", buyerName: "", buyerPhone: "" },
    { id: 141, num1: "729", num2: "140", status: "available", buyerName: "", buyerPhone: "" },
    { id: 142, num1: "728", num2: "141", status: "available", buyerName: "", buyerPhone: "" },
    { id: 143, num1: "727", num2: "142", status: "available", buyerName: "", buyerPhone: "" },
    { id: 144, num1: "906", num2: "143", status: "available", buyerName: "", buyerPhone: "" },
    { id: 145, num1: "905", num2: "144", status: "available", buyerName: "", buyerPhone: "" },
    { id: 146, num1: "904", num2: "145", status: "available", buyerName: "", buyerPhone: "" },
    { id: 147, num1: "823", num2: "146", status: "available", buyerName: "", buyerPhone: "" },
    { id: 148, num1: "821", num2: "147", status: "available", buyerName: "", buyerPhone: "" },
    { id: 149, num1: "822", num2: "148", status: "available", buyerName: "", buyerPhone: "" },
    { id: 150, num1: "820", num2: "149", status: "available", buyerName: "", buyerPhone: "" },
    { id: 151, num1: "819", num2: "150", status: "available", buyerName: "", buyerPhone: "" },
    { id: 152, num1: "818", num2: "151", status: "available", buyerName: "", buyerPhone: "" },
    { id: 153, num1: "817", num2: "152", status: "available", buyerName: "", buyerPhone: "" },
    { id: 154, num1: "816", num2: "153", status: "available", buyerName: "", buyerPhone: "" },
    { id: 155, num1: "815", num2: "154", status: "available", buyerName: "", buyerPhone: "" },
    { id: 156, num1: "927", num2: "155", status: "available", buyerName: "", buyerPhone: "" },
    { id: 157, num1: "926", num2: "156", status: "available", buyerName: "", buyerPhone: "" },
    { id: 158, num1: "925", num2: "157", status: "available", buyerName: "", buyerPhone: "" },
    { id: 159, num1: "924", num2: "158", status: "available", buyerName: "", buyerPhone: "" },
    { id: 160, num1: "923", num2: "159", status: "available", buyerName: "", buyerPhone: "" },
    { id: 161, num1: "922", num2: "160", status: "available", buyerName: "", buyerPhone: "" },
    { id: 162, num1: "921", num2: "161", status: "available", buyerName: "", buyerPhone: "" },
    { id: 163, num1: "920", num2: "162", status: "available", buyerName: "", buyerPhone: "" },
    { id: 164, num1: "919", num2: "163", status: "available", buyerName: "", buyerPhone: "" },
    { id: 165, num1: "918", num2: "164", status: "available", buyerName: "", buyerPhone: "" },
    { id: 166, num1: "917", num2: "165", status: "available", buyerName: "", buyerPhone: "" },
    { id: 167, num1: "916", num2: "166", status: "available", buyerName: "", buyerPhone: "" },
    { id: 168, num1: "915", num2: "167", status: "available", buyerName: "", buyerPhone: "" },
    { id: 169, num1: "914", num2: "168", status: "available", buyerName: "", buyerPhone: "" },
    { id: 170, num1: "913", num2: "169", status: "available", buyerName: "", buyerPhone: "" },
    { id: 171, num1: "912", num2: "170", status: "available", buyerName: "", buyerPhone: "" },
    { id: 172, num1: "911", num2: "171", status: "available", buyerName: "", buyerPhone: "" },
    { id: 173, num1: "910", num2: "172", status: "available", buyerName: "", buyerPhone: "" },
    { id: 174, num1: "909", num2: "173", status: "available", buyerName: "", buyerPhone: "" },
    { id: 175, num1: "908", num2: "174", status: "available", buyerName: "", buyerPhone: "" },
    { id: 176, num1: "907", num2: "175", status: "available", buyerName: "", buyerPhone: "" },
    { id: 177, num1: "853", num2: "176", status: "available", buyerName: "", buyerPhone: "" },
    { id: 178, num1: "852", num2: "177", status: "available", buyerName: "", buyerPhone: "" },
    { id: 179, num1: "851", num2: "178", status: "available", buyerName: "", buyerPhone: "" },
    { id: 180, num1: "850", num2: "179", status: "available", buyerName: "", buyerPhone: "" },
    { id: 181, num1: "849", num2: "180", status: "available", buyerName: "", buyerPhone: "" },
    { id: 182, num1: "848", num2: "181", status: "available", buyerName: "", buyerPhone: "" },
    { id: 183, num1: "847", num2: "182", status: "available", buyerName: "", buyerPhone: "" },
    { id: 184, num1: "846", num2: "183", status: "available", buyerName: "", buyerPhone: "" },
    { id: 185, num1: "845", num2: "184", status: "available", buyerName: "", buyerPhone: "" },
    { id: 186, num1: "844", num2: "185", status: "available", buyerName: "", buyerPhone: "" },
    { id: 187, num1: "843", num2: "186", status: "available", buyerName: "", buyerPhone: "" },
    { id: 188, num1: "842", num2: "187", status: "available", buyerName: "", buyerPhone: "" },
    { id: 189, num1: "841", num2: "188", status: "available", buyerName: "", buyerPhone: "" },
    { id: 190, num1: "840", num2: "189", status: "available", buyerName: "", buyerPhone: "" },
    { id: 191, num1: "839", num2: "190", status: "available", buyerName: "", buyerPhone: "" },
    { id: 192, num1: "838", num2: "191", status: "available", buyerName: "", buyerPhone: "" },
    { id: 193, num1: "837", num2: "192", status: "available", buyerName: "", buyerPhone: "" },
    { id: 194, num1: "836", num2: "193", status: "available", buyerName: "", buyerPhone: "" },
    { id: 195, num1: "835", num2: "194", status: "available", buyerName: "", buyerPhone: "" },
    { id: 196, num1: "834", num2: "195", status: "available", buyerName: "", buyerPhone: "" },
    { id: 197, num1: "833", num2: "196", status: "available", buyerName: "", buyerPhone: "" },
    { id: 198, num1: "832", num2: "197", status: "available", buyerName: "", buyerPhone: "" },
    { id: 199, num1: "831", num2: "198", status: "available", buyerName: "", buyerPhone: "" },
    { id: 200, num1: "830", num2: "199", status: "available", buyerName: "", buyerPhone: "" },
    { id: 201, num1: "829", num2: "200", status: "available", buyerName: "", buyerPhone: "" },
    { id: 202, num1: "828", num2: "201", status: "available", buyerName: "", buyerPhone: "" },
    { id: 203, num1: "827", num2: "202", status: "available", buyerName: "", buyerPhone: "" },
    { id: 204, num1: "826", num2: "203", status: "available", buyerName: "", buyerPhone: "" },
    { id: 205, num1: "825", num2: "204", status: "available", buyerName: "", buyerPhone: "" },
    { id: 206, num1: "824", num2: "205", status: "available", buyerName: "", buyerPhone: "" },
    { id: 207, num1: "757", num2: "206", status: "available", buyerName: "", buyerPhone: "" },
    { id: 208, num1: "756", num2: "207", status: "available", buyerName: "", buyerPhone: "" },
    { id: 209, num1: "755", num2: "208", status: "available", buyerName: "", buyerPhone: "" },
    { id: 210, num1: "754", num2: "209", status: "available", buyerName: "", buyerPhone: "" },
    { id: 211, num1: "753", num2: "210", status: "available", buyerName: "", buyerPhone: "" },
    { id: 212, num1: "948", num2: "211", status: "available", buyerName: "", buyerPhone: "" },
    { id: 213, num1: "947", num2: "212", status: "available", buyerName: "", buyerPhone: "" },
    { id: 214, num1: "946", num2: "213", status: "available", buyerName: "", buyerPhone: "" },
    { id: 215, num1: "945", num2: "214", status: "available", buyerName: "", buyerPhone: "" },
    { id: 216, num1: "944", num2: "215", status: "available", buyerName: "", buyerPhone: "" },
    { id: 217, num1: "943", num2: "216", status: "available", buyerName: "", buyerPhone: "" },
    { id: 218, num1: "942", num2: "217", status: "available", buyerName: "", buyerPhone: "" },
    { id: 219, num1: "941", num2: "218", status: "available", buyerName: "", buyerPhone: "" },
    { id: 220, num1: "940", num2: "219", status: "available", buyerName: "", buyerPhone: "" },
    { id: 221, num1: "939", num2: "220", status: "available", buyerName: "", buyerPhone: "" },
    { id: 222, num1: "938", num2: "221", status: "available", buyerName: "", buyerPhone: "" },
    { id: 223, num1: "937", num2: "222", status: "available", buyerName: "", buyerPhone: "" },
    { id: 224, num1: "936", num2: "223", status: "available", buyerName: "", buyerPhone: "" },
    { id: 225, num1: "935", num2: "224", status: "available", buyerName: "", buyerPhone: "" },
    { id: 226, num1: "934", num2: "225", status: "available", buyerName: "", buyerPhone: "" },
    { id: 227, num1: "933", num2: "226", status: "available", buyerName: "", buyerPhone: "" },
    { id: 228, num1: "932", num2: "227", status: "available", buyerName: "", buyerPhone: "" },
    { id: 229, num1: "931", num2: "228", status: "available", buyerName: "", buyerPhone: "" },
    { id: 230, num1: "930", num2: "229", status: "available", buyerName: "", buyerPhone: "" },
    { id: 231, num1: "929", num2: "230", status: "available", buyerName: "", buyerPhone: "" },
    { id: 232, num1: "928", num2: "231", status: "available", buyerName: "", buyerPhone: "" },
    { id: 233, num1: "553", num2: "232", status: "available", buyerName: "", buyerPhone: "" },
    { id: 234, num1: "552", num2: "233", status: "available", buyerName: "", buyerPhone: "" },
    { id: 235, num1: "551", num2: "234", status: "available", buyerName: "", buyerPhone: "" },
    { id: 236, num1: "550", num2: "235", status: "available", buyerName: "", buyerPhone: "" },
    { id: 237, num1: "549", num2: "236", status: "available", buyerName: "", buyerPhone: "" },
    { id: 238, num1: "548", num2: "237", status: "available", buyerName: "", buyerPhone: "" },
    { id: 239, num1: "547", num2: "238", status: "available", buyerName: "", buyerPhone: "" },
    { id: 240, num1: "546", num2: "239", status: "available", buyerName: "", buyerPhone: "" },
    { id: 241, num1: "545", num2: "240", status: "available", buyerName: "", buyerPhone: "" },
    { id: 242, num1: "544", num2: "241", status: "available", buyerName: "", buyerPhone: "" },
    { id: 243, num1: "543", num2: "242", status: "available", buyerName: "", buyerPhone: "" },
    { id: 244, num1: "542", num2: "243", status: "available", buyerName: "", buyerPhone: "" },
    { id: 245, num1: "541", num2: "244", status: "available", buyerName: "", buyerPhone: "" },
    { id: 246, num1: "540", num2: "245", status: "available", buyerName: "", buyerPhone: "" },
    { id: 247, num1: "539", num2: "246", status: "available", buyerName: "", buyerPhone: "" },
    { id: 248, num1: "538", num2: "247", status: "available", buyerName: "", buyerPhone: "" },
    { id: 249, num1: "537", num2: "248", status: "available", buyerName: "", buyerPhone: "" },
    { id: 250, num1: "661", num2: "249", status: "available", buyerName: "", buyerPhone: "" },
    { id: 251, num1: "660", num2: "250", status: "available", buyerName: "", buyerPhone: "" },
    { id: 252, num1: "659", num2: "251", status: "available", buyerName: "", buyerPhone: "" },
    { id: 253, num1: "658", num2: "252", status: "available", buyerName: "", buyerPhone: "" },
    { id: 254, num1: "657", num2: "253", status: "available", buyerName: "", buyerPhone: "" },
    { id: 255, num1: "656", num2: "254", status: "available", buyerName: "", buyerPhone: "" },
    { id: 256, num1: "655", num2: "255", status: "available", buyerName: "", buyerPhone: "" },
    { id: 257, num1: "654", num2: "256", status: "available", buyerName: "", buyerPhone: "" },
    { id: 258, num1: "653", num2: "257", status: "available", buyerName: "", buyerPhone: "" },
    { id: 259, num1: "652", num2: "258", status: "available", buyerName: "", buyerPhone: "" },
    { id: 260, num1: "651", num2: "259", status: "available", buyerName: "", buyerPhone: "" },
    { id: 261, num1: "650", num2: "260", status: "available", buyerName: "", buyerPhone: "" },
    { id: 262, num1: "649", num2: "261", status: "available", buyerName: "", buyerPhone: "" },
    { id: 263, num1: "648", num2: "262", status: "available", buyerName: "", buyerPhone: "" },
    { id: 264, num1: "647", num2: "263", status: "available", buyerName: "", buyerPhone: "" },
    { id: 265, num1: "646", num2: "264", status: "available", buyerName: "", buyerPhone: "" },
    { id: 266, num1: "645", num2: "265", status: "available", buyerName: "", buyerPhone: "" },
    { id: 267, num1: "644", num2: "266", status: "available", buyerName: "", buyerPhone: "" },
    { id: 268, num1: "643", num2: "267", status: "available", buyerName: "", buyerPhone: "" },
    { id: 269, num1: "642", num2: "268", status: "available", buyerName: "", buyerPhone: "" },
    { id: 270, num1: "641", num2: "269", status: "available", buyerName: "", buyerPhone: "" },
    { id: 271, num1: "640", num2: "270", status: "available", buyerName: "", buyerPhone: "" },
    { id: 272, num1: "639", num2: "271", status: "available", buyerName: "", buyerPhone: "" },
    { id: 273, num1: "638", num2: "272", status: "available", buyerName: "", buyerPhone: "" },
    { id: 274, num1: "637", num2: "273", status: "available", buyerName: "", buyerPhone: "" },
    { id: 275, num1: "636", num2: "274", status: "available", buyerName: "", buyerPhone: "" },
    { id: 276, num1: "635", num2: "275", status: "available", buyerName: "", buyerPhone: "" },
    { id: 277, num1: "634", num2: "276", status: "available", buyerName: "", buyerPhone: "" },
    { id: 278, num1: "680", num2: "277", status: "available", buyerName: "", buyerPhone: "" },
    { id: 279, num1: "679", num2: "278", status: "available", buyerName: "", buyerPhone: "" },
    { id: 280, num1: "678", num2: "279", status: "available", buyerName: "", buyerPhone: "" },
    { id: 281, num1: "677", num2: "280", status: "available", buyerName: "", buyerPhone: "" },
    { id: 282, num1: "676", num2: "281", status: "available", buyerName: "", buyerPhone: "" },
    { id: 283, num1: "675", num2: "282", status: "available", buyerName: "", buyerPhone: "" },
    { id: 284, num1: "674", num2: "283", status: "available", buyerName: "", buyerPhone: "" },
    { id: 285, num1: "673", num2: "284", status: "available", buyerName: "", buyerPhone: "" },
    { id: 286, num1: "672", num2: "285", status: "available", buyerName: "", buyerPhone: "" },
    { id: 287, num1: "671", num2: "286", status: "available", buyerName: "", buyerPhone: "" },
    { id: 288, num1: "670", num2: "287", status: "available", buyerName: "", buyerPhone: "" },
    { id: 289, num1: "669", num2: "288", status: "available", buyerName: "", buyerPhone: "" },
    { id: 290, num1: "668", num2: "289", status: "available", buyerName: "", buyerPhone: "" },
    { id: 291, num1: "667", num2: "290", status: "available", buyerName: "", buyerPhone: "" },
    { id: 292, num1: "666", num2: "291", status: "available", buyerName: "", buyerPhone: "" },
    { id: 293, num1: "665", num2: "292", status: "available", buyerName: "", buyerPhone: "" },
    { id: 294, num1: "664", num2: "293", status: "available", buyerName: "", buyerPhone: "" },
    { id: 295, num1: "663", num2: "294", status: "available", buyerName: "", buyerPhone: "" },
    { id: 296, num1: "662", num2: "295", status: "available", buyerName: "", buyerPhone: "" },
    { id: 297, num1: "772", num2: "296", status: "available", buyerName: "", buyerPhone: "" },
    { id: 298, num1: "771", num2: "297", status: "available", buyerName: "", buyerPhone: "" },
    { id: 299, num1: "770", num2: "298", status: "available", buyerName: "", buyerPhone: "" },
    { id: 300, num1: "769", num2: "299", status: "available", buyerName: "", buyerPhone: "" },
    { id: 301, num1: "768", num2: "300", status: "available", buyerName: "", buyerPhone: "" },
    { id: 302, num1: "767", num2: "301", status: "available", buyerName: "", buyerPhone: "" },
    { id: 303, num1: "766", num2: "302", status: "available", buyerName: "", buyerPhone: "" },
    { id: 304, num1: "765", num2: "303", status: "available", buyerName: "", buyerPhone: "" },
    { id: 305, num1: "764", num2: "304", status: "available", buyerName: "", buyerPhone: "" },
    { id: 306, num1: "763", num2: "305", status: "available", buyerName: "", buyerPhone: "" },
    { id: 307, num1: "762", num2: "306", status: "available", buyerName: "", buyerPhone: "" },
    { id: 308, num1: "761", num2: "307", status: "available", buyerName: "", buyerPhone: "" },
    { id: 309, num1: "760", num2: "308", status: "available", buyerName: "", buyerPhone: "" },
    { id: 310, num1: "759", num2: "309", status: "available", buyerName: "", buyerPhone: "" },
    { id: 311, num1: "758", num2: "310", status: "available", buyerName: "", buyerPhone: "" },
    { id: 312, num1: "570", num2: "311", status: "available", buyerName: "", buyerPhone: "" },
    { id: 313, num1: "569", num2: "312", status: "available", buyerName: "", buyerPhone: "" },
    { id: 314, num1: "568", num2: "313", status: "available", buyerName: "", buyerPhone: "" },
    { id: 315, num1: "567", num2: "314", status: "available", buyerName: "", buyerPhone: "" },
    { id: 316, num1: "566", num2: "315", status: "available", buyerName: "", buyerPhone: "" },
    { id: 317, num1: "565", num2: "316", status: "available", buyerName: "", buyerPhone: "" },
    { id: 318, num1: "564", num2: "317", status: "available", buyerName: "", buyerPhone: "" },
    { id: 319, num1: "563", num2: "318", status: "available", buyerName: "", buyerPhone: "" },
    { id: 320, num1: "562", num2: "319", status: "available", buyerName: "", buyerPhone: "" },
    { id: 321, num1: "561", num2: "320", status: "available", buyerName: "", buyerPhone: "" },
    { id: 322, num1: "560", num2: "321", status: "available", buyerName: "", buyerPhone: "" },
    { id: 323, num1: "559", num2: "322", status: "available", buyerName: "", buyerPhone: "" },
    { id: 324, num1: "558", num2: "323", status: "available", buyerName: "", buyerPhone: "" },
    { id: 325, num1: "557", num2: "324", status: "available", buyerName: "", buyerPhone: "" },
    { id: 326, num1: "556", num2: "325", status: "available", buyerName: "", buyerPhone: "" },
    { id: 327, num1: "555", num2: "326", status: "available", buyerName: "", buyerPhone: "" },
    { id: 328, num1: "554", num2: "327", status: "available", buyerName: "", buyerPhone: "" },
    { id: 329, num1: "864", num2: "328", status: "available", buyerName: "", buyerPhone: "" },
    { id: 330, num1: "863", num2: "329", status: "available", buyerName: "", buyerPhone: "" },
    { id: 331, num1: "862", num2: "330", status: "available", buyerName: "", buyerPhone: "" },
    { id: 332, num1: "861", num2: "331", status: "available", buyerName: "", buyerPhone: "" },
    { id: 333, num1: "860", num2: "332", status: "available", buyerName: "", buyerPhone: "" },
    { id: 334, num1: "859", num2: "333", status: "available", buyerName: "", buyerPhone: "" },
    { id: 335, num1: "858", num2: "334", status: "available", buyerName: "", buyerPhone: "" },
    { id: 336, num1: "857", num2: "335", status: "available", buyerName: "", buyerPhone: "" },
    { id: 337, num1: "856", num2: "336", status: "available", buyerName: "", buyerPhone: "" },
    { id: 338, num1: "855", num2: "337", status: "available", buyerName: "", buyerPhone: "" },
    { id: 339, num1: "854", num2: "338", status: "available", buyerName: "", buyerPhone: "" },
    { id: 340, num1: "960", num2: "339", status: "available", buyerName: "", buyerPhone: "" },
    { id: 341, num1: "959", num2: "340", status: "available", buyerName: "", buyerPhone: "" },
    { id: 342, num1: "958", num2: "341", status: "available", buyerName: "", buyerPhone: "" },
    { id: 343, num1: "957", num2: "342", status: "available", buyerName: "", buyerPhone: "" },
    { id: 344, num1: "956", num2: "343", status: "available", buyerName: "", buyerPhone: "" },
    { id: 345, num1: "955", num2: "344", status: "available", buyerName: "", buyerPhone: "" },
    { id: 346, num1: "954", num2: "345", status: "available", buyerName: "", buyerPhone: "" },
    { id: 347, num1: "953", num2: "346", status: "available", buyerName: "", buyerPhone: "" },
    { id: 348, num1: "952", num2: "347", status: "available", buyerName: "", buyerPhone: "" },
    { id: 349, num1: "951", num2: "348", status: "available", buyerName: "", buyerPhone: "" },
    { id: 350, num1: "950", num2: "349", status: "available", buyerName: "", buyerPhone: "" },
    { id: 351, num1: "949", num2: "350", status: "available", buyerName: "", buyerPhone: "" },
    { id: 352, num1: "688", num2: "351", status: "available", buyerName: "", buyerPhone: "" },
    { id: 353, num1: "687", num2: "352", status: "available", buyerName: "", buyerPhone: "" },
    { id: 354, num1: "686", num2: "353", status: "available", buyerName: "", buyerPhone: "" },
    { id: 355, num1: "685", num2: "354", status: "available", buyerName: "", buyerPhone: "" },
    { id: 356, num1: "684", num2: "355", status: "available", buyerName: "", buyerPhone: "" },
    { id: 357, num1: "683", num2: "356", status: "available", buyerName: "", buyerPhone: "" },
    { id: 358, num1: "682", num2: "357", status: "available", buyerName: "", buyerPhone: "" },
    { id: 359, num1: "681", num2: "358", status: "available", buyerName: "", buyerPhone: "" },
    { id: 360, num1: "875", num2: "359", status: "available", buyerName: "", buyerPhone: "" },
    { id: 361, num1: "874", num2: "360", status: "available", buyerName: "", buyerPhone: "" },
    { id: 362, num1: "873", num2: "361", status: "available", buyerName: "", buyerPhone: "" },
    { id: 363, num1: "872", num2: "362", status: "available", buyerName: "", buyerPhone: "" },
    { id: 364, num1: "871", num2: "363", status: "available", buyerName: "", buyerPhone: "" },
    { id: 365, num1: "870", num2: "364", status: "available", buyerName: "", buyerPhone: "" },
    { id: 366, num1: "869", num2: "365", status: "available", buyerName: "", buyerPhone: "" },
    { id: 367, num1: "868", num2: "366", status: "available", buyerName: "", buyerPhone: "" },
    { id: 368, num1: "867", num2: "367", status: "available", buyerName: "", buyerPhone: "" },
    { id: 369, num1: "866", num2: "368", status: "available", buyerName: "", buyerPhone: "" },
    { id: 370, num1: "865", num2: "369", status: "available", buyerName: "", buyerPhone: "" },
    { id: 371, num1: "976", num2: "370", status: "available", buyerName: "", buyerPhone: "" },
    { id: 372, num1: "975", num2: "371", status: "available", buyerName: "", buyerPhone: "" },
    { id: 373, num1: "974", num2: "372", status: "available", buyerName: "", buyerPhone: "" },
    { id: 374, num1: "973", num2: "373", status: "available", buyerName: "", buyerPhone: "" },
    { id: 375, num1: "972", num2: "374", status: "available", buyerName: "", buyerPhone: "" },
    { id: 376, num1: "971", num2: "375", status: "available", buyerName: "", buyerPhone: "" },
    { id: 377, num1: "970", num2: "376", status: "available", buyerName: "", buyerPhone: "" },
    { id: 378, num1: "969", num2: "377", status: "available", buyerName: "", buyerPhone: "" },
    { id: 379, num1: "968", num2: "378", status: "available", buyerName: "", buyerPhone: "" },
    { id: 380, num1: "967", num2: "379", status: "available", buyerName: "", buyerPhone: "" },
    { id: 381, num1: "966", num2: "380", status: "available", buyerName: "", buyerPhone: "" },
    { id: 382, num1: "965", num2: "381", status: "available", buyerName: "", buyerPhone: "" },
    { id: 383, num1: "964", num2: "382", status: "available", buyerName: "", buyerPhone: "" },
    { id: 384, num1: "963", num2: "383", status: "available", buyerName: "", buyerPhone: "" },
    { id: 385, num1: "962", num2: "384", status: "available", buyerName: "", buyerPhone: "" },
    { id: 386, num1: "961", num2: "385", status: "available", buyerName: "", buyerPhone: "" },
    { id: 387, num1: "582", num2: "386", status: "available", buyerName: "", buyerPhone: "" },
    { id: 388, num1: "581", num2: "387", status: "available", buyerName: "", buyerPhone: "" },
    { id: 389, num1: "580", num2: "388", status: "available", buyerName: "", buyerPhone: "" },
    { id: 390, num1: "579", num2: "389", status: "available", buyerName: "", buyerPhone: "" },
    { id: 391, num1: "578", num2: "390", status: "available", buyerName: "", buyerPhone: "" },
    { id: 392, num1: "577", num2: "391", status: "available", buyerName: "", buyerPhone: "" },
    { id: 393, num1: "576", num2: "392", status: "available", buyerName: "", buyerPhone: "" },
    { id: 394, num1: "575", num2: "393", status: "available", buyerName: "", buyerPhone: "" },
    { id: 395, num1: "574", num2: "394", status: "available", buyerName: "", buyerPhone: "" },
    { id: 396, num1: "573", num2: "395", status: "available", buyerName: "", buyerPhone: "" },
    { id: 397, num1: "572", num2: "396", status: "available", buyerName: "", buyerPhone: "" },
    { id: 398, num1: "571", num2: "397", status: "available", buyerName: "", buyerPhone: "" },
    { id: 399, num1: "785", num2: "398", status: "available", buyerName: "", buyerPhone: "" },
    { id: 400, num1: "784", num2: "399", status: "available", buyerName: "", buyerPhone: "" },
    { id: 401, num1: "783", num2: "400", status: "available", buyerName: "", buyerPhone: "" },
    { id: 402, num1: "782", num2: "401", status: "available", buyerName: "", buyerPhone: "" },
    { id: 403, num1: "781", num2: "402", status: "available", buyerName: "", buyerPhone: "" },
    { id: 404, num1: "780", num2: "403", status: "available", buyerName: "", buyerPhone: "" },
    { id: 405, num1: "779", num2: "404", status: "available", buyerName: "", buyerPhone: "" },
    { id: 406, num1: "778", num2: "405", status: "available", buyerName: "", buyerPhone: "" },
    { id: 407, num1: "777", num2: "406", status: "available", buyerName: "", buyerPhone: "" },
    { id: 408, num1: "776", num2: "407", status: "available", buyerName: "", buyerPhone: "" },
    { id: 409, num1: "775", num2: "408", status: "available", buyerName: "", buyerPhone: "" },
    { id: 410, num1: "774", num2: "409", status: "available", buyerName: "", buyerPhone: "" },
    { id: 411, num1: "773", num2: "410", status: "available", buyerName: "", buyerPhone: "" },
    { id: 412, num1: "899", num2: "411", status: "available", buyerName: "", buyerPhone: "" },
    { id: 413, num1: "898", num2: "412", status: "available", buyerName: "", buyerPhone: "" },
    { id: 414, num1: "897", num2: "413", status: "available", buyerName: "", buyerPhone: "" },
    { id: 415, num1: "896", num2: "414", status: "available", buyerName: "", buyerPhone: "" },
    { id: 416, num1: "895", num2: "415", status: "available", buyerName: "", buyerPhone: "" },
    { id: 417, num1: "894", num2: "416", status: "available", buyerName: "", buyerPhone: "" },
    { id: 418, num1: "893", num2: "417", status: "available", buyerName: "", buyerPhone: "" },
    { id: 419, num1: "892", num2: "418", status: "available", buyerName: "", buyerPhone: "" },
    { id: 420, num1: "891", num2: "419", status: "available", buyerName: "", buyerPhone: "" },
    { id: 421, num1: "890", num2: "420", status: "available", buyerName: "", buyerPhone: "" },
    { id: 422, num1: "889", num2: "421", status: "available", buyerName: "", buyerPhone: "" },
    { id: 423, num1: "888", num2: "422", status: "available", buyerName: "", buyerPhone: "" },
    { id: 424, num1: "887", num2: "423", status: "available", buyerName: "", buyerPhone: "" },
    { id: 425, num1: "886", num2: "424", status: "available", buyerName: "", buyerPhone: "" },
    { id: 426, num1: "885", num2: "425", status: "available", buyerName: "", buyerPhone: "" },
    { id: 427, num1: "884", num2: "426", status: "available", buyerName: "", buyerPhone: "" },
    { id: 428, num1: "883", num2: "427", status: "available", buyerName: "", buyerPhone: "" },
    { id: 429, num1: "882", num2: "428", status: "available", buyerName: "", buyerPhone: "" },
    { id: 430, num1: "881", num2: "429", status: "available", buyerName: "", buyerPhone: "" },
    { id: 431, num1: "880", num2: "430", status: "available", buyerName: "", buyerPhone: "" },
    { id: 432, num1: "879", num2: "431", status: "available", buyerName: "", buyerPhone: "" },
    { id: 433, num1: "878", num2: "432", status: "available", buyerName: "", buyerPhone: "" },
    { id: 434, num1: "877", num2: "433", status: "available", buyerName: "", buyerPhone: "" },
    { id: 435, num1: "876", num2: "434", status: "available", buyerName: "", buyerPhone: "" },
    { id: 436, num1: "999", num2: "435", status: "available", buyerName: "", buyerPhone: "" },
    { id: 437, num1: "998", num2: "436", status: "available", buyerName: "", buyerPhone: "" },
    { id: 438, num1: "997", num2: "437", status: "available", buyerName: "", buyerPhone: "" },
    { id: 439, num1: "996", num2: "438", status: "available", buyerName: "", buyerPhone: "" },
    { id: 440, num1: "995", num2: "439", status: "available", buyerName: "", buyerPhone: "" },
    { id: 441, num1: "994", num2: "440", status: "available", buyerName: "", buyerPhone: "" },
    { id: 442, num1: "993", num2: "441", status: "available", buyerName: "", buyerPhone: "" },
    { id: 443, num1: "992", num2: "442", status: "available", buyerName: "", buyerPhone: "" },
    { id: 444, num1: "991", num2: "443", status: "available", buyerName: "", buyerPhone: "" },
    { id: 445, num1: "990", num2: "444", status: "available", buyerName: "", buyerPhone: "" },
    { id: 446, num1: "989", num2: "445", status: "available", buyerName: "", buyerPhone: "" },
    { id: 447, num1: "988", num2: "446", status: "available", buyerName: "", buyerPhone: "" },
    { id: 448, num1: "987", num2: "447", status: "available", buyerName: "", buyerPhone: "" },
    { id: 449, num1: "986", num2: "448", status: "available", buyerName: "", buyerPhone: "" },
    { id: 450, num1: "985", num2: "449", status: "available", buyerName: "", buyerPhone: "" },
    { id: 451, num1: "984", num2: "450", status: "available", buyerName: "", buyerPhone: "" },
    { id: 452, num1: "983", num2: "451", status: "available", buyerName: "", buyerPhone: "" },
    { id: 453, num1: "982", num2: "452", status: "available", buyerName: "", buyerPhone: "" },
    { id: 454, num1: "981", num2: "453", status: "available", buyerName: "", buyerPhone: "" },
    { id: 455, num1: "980", num2: "454", status: "available", buyerName: "", buyerPhone: "" },
    { id: 456, num1: "979", num2: "455", status: "available", buyerName: "", buyerPhone: "" },
    { id: 457, num1: "978", num2: "456", status: "available", buyerName: "", buyerPhone: "" },
    { id: 458, num1: "977", num2: "457", status: "available", buyerName: "", buyerPhone: "" },
    { id: 459, num1: "599", num2: "458", status: "available", buyerName: "", buyerPhone: "" },
    { id: 460, num1: "598", num2: "459", status: "available", buyerName: "", buyerPhone: "" },
    { id: 461, num1: "597", num2: "460", status: "available", buyerName: "", buyerPhone: "" },
    { id: 462, num1: "596", num2: "461", status: "available", buyerName: "", buyerPhone: "" },
    { id: 463, num1: "595", num2: "462", status: "available", buyerName: "", buyerPhone: "" },
    { id: 464, num1: "594", num2: "463", status: "available", buyerName: "", buyerPhone: "" },
    { id: 465, num1: "593", num2: "464", status: "available", buyerName: "", buyerPhone: "" },
    { id: 466, num1: "592", num2: "465", status: "available", buyerName: "", buyerPhone: "" },
    { id: 467, num1: "591", num2: "466", status: "available", buyerName: "", buyerPhone: "" },
    { id: 468, num1: "590", num2: "467", status: "available", buyerName: "", buyerPhone: "" },
    { id: 469, num1: "589", num2: "468", status: "available", buyerName: "", buyerPhone: "" },
    { id: 470, num1: "588", num2: "469", status: "available", buyerName: "", buyerPhone: "" },
    { id: 471, num1: "587", num2: "470", status: "available", buyerName: "", buyerPhone: "" },
    { id: 472, num1: "586", num2: "471", status: "available", buyerName: "", buyerPhone: "" },
    { id: 473, num1: "585", num2: "472", status: "available", buyerName: "", buyerPhone: "" },
    { id: 474, num1: "584", num2: "473", status: "available", buyerName: "", buyerPhone: "" },
    { id: 475, num1: "583", num2: "474", status: "available", buyerName: "", buyerPhone: "" },
    { id: 476, num1: "699", num2: "475", status: "available", buyerName: "", buyerPhone: "" },
    { id: 477, num1: "698", num2: "476", status: "available", buyerName: "", buyerPhone: "" },
    { id: 478, num1: "697", num2: "477", status: "available", buyerName: "", buyerPhone: "" },
    { id: 479, num1: "696", num2: "478", status: "available", buyerName: "", buyerPhone: "" },
    { id: 480, num1: "695", num2: "479", status: "available", buyerName: "", buyerPhone: "" },
    { id: 481, num1: "694", num2: "480", status: "available", buyerName: "", buyerPhone: "" },
    { id: 482, num1: "693", num2: "481", status: "available", buyerName: "", buyerPhone: "" },
    { id: 483, num1: "692", num2: "482", status: "available", buyerName: "", buyerPhone: "" },
    { id: 484, num1: "691", num2: "483", status: "available", buyerName: "", buyerPhone: "" },
    { id: 485, num1: "690", num2: "484", status: "available", buyerName: "", buyerPhone: "" },
    { id: 486, num1: "689", num2: "485", status: "available", buyerName: "", buyerPhone: "" },
    { id: 487, num1: "799", num2: "486", status: "available", buyerName: "", buyerPhone: "" },
    { id: 488, num1: "798", num2: "487", status: "available", buyerName: "", buyerPhone: "" },
    { id: 489, num1: "797", num2: "488", status: "available", buyerName: "", buyerPhone: "" },
    { id: 490, num1: "796", num2: "489", status: "available", buyerName: "", buyerPhone: "" },
    { id: 491, num1: "795", num2: "490", status: "available", buyerName: "", buyerPhone: "" },
    { id: 492, num1: "794", num2: "491", status: "available", buyerName: "", buyerPhone: "" },
    { id: 493, num1: "793", num2: "492", status: "available", buyerName: "", buyerPhone: "" },
    { id: 494, num1: "792", num2: "493", status: "available", buyerName: "", buyerPhone: "" },
    { id: 495, num1: "791", num2: "494", status: "available", buyerName: "", buyerPhone: "" },
    { id: 496, num1: "790", num2: "495", status: "available", buyerName: "", buyerPhone: "" },
    { id: 497, num1: "789", num2: "496", status: "available", buyerName: "", buyerPhone: "" },
    { id: 498, num1: "788", num2: "497", status: "available", buyerName: "", buyerPhone: "" },
    { id: 499, num1: "787", num2: "498", status: "available", buyerName: "", buyerPhone: "" },
    { id: 500, num1: "786", num2: "499", status: "available", buyerName: "", buyerPhone: "" }
];

let isAdmin = false;
let selectedTicketId = null;

// Elementos DOM
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


// Función para calcular saldo automáticamente al digitar abono
if (amountPaidInput) {
    amountPaidInput.addEventListener('input', (e) => {
        const paid = Number(e.target.value) || 0;
        const pending = Math.max(0, 50000 - paid);
        if (pendingBalanceDisplay) {
            pendingBalanceDisplay.textContent = `$${pending.toLocaleString('es-CO')}`;
        }
    });
}

function loadLocalData() {
    const saved = localStorage.getItem('bono_solidario_data');
    if (saved) {
        const parsed = JSON.parse(saved);
        parsed.forEach(savedItem => {
            const item = ticketsData.find(t => t.id === savedItem.id);
            if (item) {
                item.status = savedItem.status;
                item.buyerName = savedItem.buyerName || '';
                item.buyerPhone = savedItem.buyerPhone || '';
            }
        });
    }
}

function saveLocalData() {
    const dataToSave = ticketsData.map(t => ({
        id: t.id,
        status: t.status,
        buyerName: t.buyerName,
        buyerPhone: t.buyerPhone
    }));
    localStorage.setItem('bono_solidario_data', JSON.stringify(dataToSave));
}

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

        // REGLA CLAVE: Para el conteo y la vista pública, 'reserved' equivale a 'sold' (VENDIDA)
        const isOccupied = ticket.status === 'sold' || ticket.status === 'reserved';

        if (isOccupied) soldCount++;
        else availableCount++;

        if (query && !matches) return;

        const card = document.createElement('div');
        // Clave CSS: Si está separada o sold, le asigna la clase 'sold' para que se vea roja/ocupada
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

adminToggleBtn.addEventListener('click', () => {
    if (!isAdmin) {
        const pass = prompt("Ingresa la clave de administración:");
        if (pass === "1234") {
            isAdmin = true;
            adminToggleBtn.textContent = "Modo Cliente (Salir)";
            exportBtn.classList.remove('hidden');
            alert("Modo Administrador activado.");
        } else if (pass !== null) {
            alert("Contraseña incorrecta.");
        }
    } else {
        isAdmin = false;
        adminToggleBtn.textContent = "Modo Administrador";
        exportBtn.classList.add('hidden');
    }
});

// Función que maneja los clics en las tarjetas
function handleTicketClick(ticket) {
    // 1. SI ES ADMINISTRADOR: Abre la ventana de gestión interna
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

    // 2. SI ES CLIENTE Y LA BOLETA ESTÁ LIBRE: Abre la opción de escribir por WhatsApp
    if (ticket.status === 'available') {
        const message = encodeURIComponent(
            `¡Hola! Me interesa apartar la boleta con las combinaciones ${ticket.num1} y ${ticket.num2} del Bono Solidario.`
        );

        if (clientModalText) {
            clientModalText.textContent = `Combinaciones seleccionadas: ${ticket.num1} - ${ticket.num2}`;
        }

        // Configura los enlaces directos a WhatsApp con el mensaje listo
        if (wsLuzDaryBtn) {
            wsLuzDaryBtn.href = `https://wa.me/573224484917?text=${message}`;
        }
        if (wsMonicaBtn) {
            wsMonicaBtn.href = `https://wa.me/573128742283?text=${message}`;
        }

        if (clientModal) clientModal.classList.remove('hidden');
    }
}

statusSelect.addEventListener('change', toggleBuyerFields);

// Activa o desactiva la obligación de llenar los campos según el estado seleccionado
function toggleBuyerFields() {
    if (!statusSelect) return;
    const isFree = statusSelect.value === 'available';
    
    document.querySelectorAll('.buyer-field').forEach(el => {
        el.style.display = isFree ? 'none' : 'block';
    });

    // Remueve o añade la propiedad 'required' dinámicamente
    if (buyerNameInput) buyerNameInput.required = !isFree;
    if (buyerPhoneInput) buyerPhoneInput.required = !isFree;
}

if (statusSelect) statusSelect.addEventListener('change', toggleBuyerFields);

if (ticketForm) {
    ticketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ticket = ticketsData.find(t => t.id === selectedTicketId);
        
        if (ticket) {
            // Validar que si no está libre, los datos no estén vacíos
            if (statusSelect.value !== 'available') {
                if (!buyerNameInput.value.trim() || !buyerPhoneInput.value.trim()) {
                    alert("Por favor ingresa el nombre y teléfono del comprador.");
                    return;
                }
            }

            ticket.status = statusSelect.value;
            if (ticket.status !== 'available') {
                ticket.buyerName = buyerNameInput.value.trim();
                ticket.buyerPhone = buyerPhoneInput.value.trim();
                ticket.amountPaid = Number(amountPaidInput.value) || 0;
            } else {
                ticket.buyerName = '';
                ticket.buyerPhone = '';
                ticket.amountPaid = 0;
            }
            
            saveLocalData();
            renderBoard(searchInput ? searchInput.value : '');
        }
        if (adminModal) adminModal.classList.add('hidden');
    });
}

closeModalBtn.addEventListener('click', () => adminModal.classList.add('hidden'));

ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ticket = ticketsData.find(t => t.id === selectedTicketId);
    if (ticket) {
        ticket.status = statusSelect.value;
        ticket.buyerName = ticket.status === 'sold' ? buyerNameInput.value : '';
        ticket.buyerPhone = ticket.status === 'sold' ? buyerPhoneInput.value : '';
        saveLocalData();
        renderBoard(searchInput.value);
    }
    adminModal.classList.add('hidden');
});

searchInput.addEventListener('input', (e) => renderBoard(e.target.value));

if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        // Encabezados con las columnas de Abono y Saldo Pendiente
        let csv = "Boleta,Numero1,Numero2,Estado,Comprador,Telefono,Abonado,Saldo_Pendiente\n";
        
        ticketsData.forEach(t => {
            const isOccupied = t.status === 'sold' || t.status === 'reserved';
            const paid = t.amountPaid || (t.status === 'sold' ? 50000 : 0);
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

// CERRAR MODAL CLIENTE CON LA EQUIS O HACIENDO CLIC AFUERA
if (closeClientModalBtn) {
    closeClientModalBtn.addEventListener('click', () => {
        if (clientModal) clientModal.classList.add('hidden');
    });
}

// Clic por fuera de la ventana emergente para cerrar
window.addEventListener('click', (e) => {
    if (e.target === clientModal) {
        clientModal.classList.add('hidden');
    }
    if (e.target === adminModal) {
        adminModal.classList.add('hidden');
    }
}); 

loadLocalData();
renderBoard();