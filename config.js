// let dbfile = "/home/ouvrardg/WebstormProjects/domoticzdb2csv/domoticz.db";
let dbfile = "/home/pi/domoticz/domoticz.db";
let csvMeterFileName = "domoticzMeterExport.csv";
let csvTempFileName = "domoticzTempExport.csv";
let csvHygroFileName = "domoticzHygroExport.csv";
let listIdxMeter = [125, 126, 127];

let listIdxTemp = [458, 460, 484, 546, 547, 553, 556, 924];
// Extérieure, Salle de bain, Chambre 1, Chambre 2, Salon, Cuisine, Garage, Bureau

module.exports = {
    dbfile,
    csvMeterFileName,
    csvTempFileName,
    csvHygroFileName,
    listIdxMeter,
    listIdxTemp
};
