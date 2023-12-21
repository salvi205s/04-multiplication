// Importa el módulo fs (file system) de Node.js para trabajar con archivos y directorios
import fs from "fs";

// Define una interfaz llamada SaveFileUseCase con un método execute que toma opciones y devuelve un booleano
export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

// Define otra interfaz llamada Options con propiedades fileContent, fileDestination (opcional) y fileName (opcional)
export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

// Define una clase llamada SaveFile que implementa la interfaz SaveFileUseCase
export class SaveFile implements SaveFileUseCase {
  // Constructor de la clase (DI - Dependency Injection), no realiza acciones específicas en este caso
  constructor() {
    /** repository: StorageRepository */
  }

  // Método execute implementado de la interfaz, guarda el contenido en un archivo según las opciones proporcionadas
  // mediante un objeto de tipo Options
  
  execute({ fileContent, fileDestination = "outputs", fileName = "table", }: Options): boolean {
    try {
      // Crea el directorio especificado de forma recursiva si no existe
      fs.mkdirSync(fileDestination, { recursive: true });

      // Escribe el contenido en un archivo en el directorio especificado con el nombre especificado
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

      // Devuelve true si la operación fue exitosa
      return true;
    } catch (error) {
      // Imprime el error en caso de falla y devuelve false
      console.error(error);
      return false;
    }
  }
}
