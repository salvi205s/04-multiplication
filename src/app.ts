// Importa el objeto yarg desde un archivo llamado 'args.plugin' ubicado en la carpeta 'config/plugins'
import { yarg } from "./config/plugins/args.plugin";

// Importa la clase ServerApp desde un archivo llamado 'server-app' ubicado en la carpeta 'presentation'
import { ServerApp } from "./presentation/server-app";

// Inicia una función autoinvocada asíncrona (async) que ejecutará la función main
(async () => {
  await main(); // Espera a que la función main se complete antes de continuar
})();

// Define una función asíncrona llamada main que actuará como punto de entrada
async function main() {
  // Desestructura el objeto yarg para obtener las opciones -b, -l, -s, -n y -d
  const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination, } = yarg;

  // Ejecuta el método estático run de la clase ServerApp con los parámetros obtenidos de yarg
  ServerApp.run({ base: base, limit, showTable, fileName, fileDestination });
}

/*
En resumen, este código se encarga de leer las opciones de la línea de comandos utilizando 
el objeto yarg y luego ejecuta la clase ServerApp con esos parámetros específicos. 
La clase ServerApp probablemente tiene la lógica para manejar y procesar los argumentos 
de la línea de comandos y realizar acciones correspondientes, 
como generar tablas de multiplicar y almacenarlas en archivos.
*/
