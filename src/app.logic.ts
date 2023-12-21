// Importa el módulo fs (File System) de Node.js
import fs from "fs";

// Importa el objeto yarg desde un archivo llamado 'args.plugin' ubicado en la carpeta 'config/plugins'
import { yarg } from "./config/plugins/args.plugin";

// Desestructura el objeto yarg para obtener las opciones -b, -l y -s y asignarlas a las variables base, limit y showTable respectivamente
const { b: base, l: limit, s: showTable } = yarg;

// Inicializa una cadena de texto vacía que se utilizará para almacenar el mensaje de salida
let outputMessage = "";

// Crea una cadena de texto que sirve como encabezado para la tabla del número base
const headerMessage = `
==================================
       Tabla del ${base}
==================================\n
`;

// Utiliza un bucle for para generar la tabla de multiplicar hasta el límite especificado
for (let i = 1; i <= limit; i++) {
  // Concatena a la cadena outputMessage cada línea de la tabla de multiplicar
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

// Concatena la cadena del encabezado al principio del outputMessage
outputMessage = headerMessage + outputMessage;

// Si la opción showTable es verdadera, imprime la tabla en la consola
if (showTable) {
  console.log(outputMessage);
}

// Define la ruta de salida para los archivos en una carpeta llamada 'outputs'
const outputPath = `outputs`;

// Crea el directorio 'outputs' de forma recursiva si no existe
fs.mkdirSync(outputPath, { recursive: true });

// Escribe el contenido de outputMessage en un archivo llamado 'tabla-{base}.txt' dentro de la carpeta 'outputs'
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

// Muestra un mensaje en la consola indicando que el archivo se ha creado exitosamente
console.log("File created!");

// grabar en el archivo de salida
// path: outputs/tabla-5.txt
