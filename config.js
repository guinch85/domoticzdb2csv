//let dbfile = "/home/ouvrardg/WebstormProjects/domoticzdb2csv/domoticz.db";
let dbfile = "/home/pi/domoticz/domoticz.db";
let csvMeterFileName = "domoticzMeterExport.csv";
let csvTempFileName = "domoticzTempExport.csv";
let csvHygroFileName = "domoticzHygroExport.csv";

let listIdxMeter = [125, 126, 127, 128, 1543, 1544, 1545];
//Amperage, HC, HP, Power

let listIdxTemp = [458, 484, 546, 1548, 943, 944, 951, 952, 953, 954, 1546, 1547, 1036, 1037];
// Extérieure, Chambre 1, Chambre 2, Garage,

module.exports = {
    dbfile,
    csvMeterFileName,
    csvTempFileName,
    csvHygroFileName,
    listIdxMeter,
    listIdxTemp
};
