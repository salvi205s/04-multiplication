// Importa yargs y la función hideBin de yargs/helpers
import yargs, { options } from "yargs";
import { hideBin } from "yargs/helpers";

// Configura yargs con la línea de comandos oculta (hideBin) para manejar los argumentos de manera más sencilla
export const yarg = yargs(hideBin(process.argv))
  // Define la opción 'b' para la base de la tabla de multiplicar
  .option("b", {
    alias: "base",
    type: "number", // Tipo de dato esperado para la opción
    demandOption: true, // Requiere que la opción sea proporcionada
    describe: "Multiplication table base", // Descripción de la opción
  })
  // Define la opción 'l' para el límite de la tabla de multiplicar
  .option("l", {
    alias: "limit",
    type: "number", // Tipo de dato esperado para la opción
    default: 10, // Valor por defecto si la opción no se proporciona
    describe: "Multiplication table limit", // Descripción de la opción
  })
  // Define la opción 's' para mostrar la tabla de multiplicar
  .option("s", {
    alias: "show",
    type: "boolean", // Tipo de dato esperado para la opción
    default: false, // Valor por defecto si la opción no se proporciona
    describe: "Show multiplication table", // Descripción de la opción
  })
  // Define la opción 'n' para el nombre del archivo
  .option("n", {
    alias: "name",
    type: "string", // Tipo de dato esperado para la opción
    default: "multiplication-table", // Valor por defecto si la opción no se proporciona
    describe: "File name", // Descripción de la opción
  })
  // Define la opción 'd' para la carpeta de destino del archivo
  .option("d", {
    alias: "destination",
    type: "string", // Tipo de dato esperado para la opción
    default: "outputs", // Valor por defecto si la opción no se proporciona
    describe: "File destination", // Descripción de la opción
  })
  // Realiza una verificación personalizada para asegurarse de que la base sea mayor que 0
  .check((argv, options) => {
    if (argv.b < 1) throw "Error: base must be greater than 0"; // Lanza un error si la base es menor o igual a 0
    return true; // Retorna true para indicar que la verificación pasó con éxito
  })
  // Parsea y obtiene los argumentos de la línea de comandos de manera sincrónica
  .parseSync();
