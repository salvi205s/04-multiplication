// Importa las clases necesarias desde los archivos correspondientes
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

// Define una interfaz para las opciones que se pasarán al método estático run de ServerApp
interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}

// Define una clase estática llamada ServerApp
export class ServerApp {
  // Método estático llamado run que toma las opciones especificadas en la interfaz RunOptions
  public static run({
    base,
    limit,
    showTable,
    fileDestination,
    fileName,
  }: RunOptions) {
    // Imprime un mensaje indicando que el servidor está en ejecución
    console.log("Server running...");

    // Crea una nueva instancia de la clase CreateTable y ejecuta su método execute con las opciones base y limit
    const table = new CreateTable().execute({ base, limit });

    // Crea una nueva instancia de la clase SaveFile y ejecuta su método execute con las opciones fileContent, fileDestination y fileName
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination: fileDestination,
      fileName: fileName,
    });

    // Si la opción showTable es true, imprime la tabla en la consola
    if (showTable) console.log(table);

    // Imprime un mensaje indicando si el archivo fue creado o no, dependiendo del valor de wasCreated
    wasCreated
      ? console.log("File created!")
      : console.error("File not created!");
  }
}

/*

En resumen, este código representa una clase ServerApp con un método estático run que 
utiliza las clases CreateTable y SaveFile para generar una tabla de multiplicar, 
guardarla en un archivo y mostrarla en la consola según las opciones proporcionadas.

*/
