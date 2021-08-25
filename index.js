const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug"; //"production"

logger.debug("Quesadilla con queso porfabor");
logger.info("Se ha iniciado con exito la aplicacion");
logger.warn("Alguna libreria falta en el sistema");
logger.error("No se pudo hacer esa cosa");

function sum(x ,y){
    return x + y;
}

module.exports = sum;