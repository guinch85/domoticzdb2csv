// let dbfile = "/home/ouvrardg/WebstormProjects/domoticzdb2csv/domoticz.db";
let dbfile = "/home/pi/domoticz/domoticz.db";
let csvMeterFileName = "domoticzMeterExport.csv";
let csvTempFileName = "domoticzTempExport.csv";
let csvHygroFileName = "domoticzHygroExport.csv";
let listIdxMeter = [125, 126, 127];
let listIdxTemp = [458, 460, 484, 555, 546, 547, 553, 554];

module.exports = {
    dbfile,
    csvMeterFileName,
    csvTempFileName,
    csvHygroFileName,
    listIdxMeter,
    listIdxTemp
};
