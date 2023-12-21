// Define una interfaz llamada CreateTableUseCase con un método execute que toma opciones y devuelve una cadena de texto
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

// Define otra interfaz llamada CreateTableOptions con propiedades base y limit (opcional)
export interface CreateTableOptions {
  base: number;
  limit?: number;
}

// Define una clase llamada CreateTable que implementa la interfaz CreateTableUseCase
export class CreateTable implements CreateTableUseCase {
  // Constructor de la clase (DI - Dependency Injection), no realiza acciones específicas en este caso
  constructor() {
    /**
     * DI - Dependency Injection
     */
  }

  // Método execute implementado de la interfaz, genera una tabla de multiplicar y devuelve la cadena resultante
  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";
    // Itera desde 1 hasta el límite (predeterminado 10) y concatena las líneas de la tabla de multiplicar
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    // Devuelve la cadena resultante con la tabla de multiplicar
    return outputMessage;
  }
}

/*

En resumen, este código define una interfaz CreateTableUseCase que establece un contrato para las clases 
que generarán tablas de multiplicar, junto con una interfaz CreateTableOptions para las opciones que puede 
recibir el método execute. La clase CreateTable implementa la interfaz CreateTableUseCase y proporciona la 
lógica para generar una tabla de multiplicar según las opciones recibidas.

Un caso de uso es básicamente una descripción detallada de cómo un usuario interactúa con un sistema para 
lograr un objetivo específico. Es una forma de documentar y comprender cómo los usuarios utilizan un software, 
centrándose en lo que quieren lograr y cómo el sistema responde a sus acciones. Este enfoque ayuda en el diseño, 
desarrollo y prueba del software.

*/
