/**
 *  main app
 */

const tampilData = require("./logic/tampilkanBiodata");
const siswa = require("./data/siswa");
const {APP_VERSION, APP_PBJ} = require("./config/aplikasi");

tampilData(siswa, { APP_VERSION, APP_PBJ});


