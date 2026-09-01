/**
 * Este código define una función `responderDespues2sec` que devuelve una promesa que se resuelve después de 2 segundos con un mensaje. La función `asyncCall` es una función asíncrona que llama a `responderDespues2sec`, espera su resolución y luego imprime la respuesta en la consola. Si ocurre algún error durante la ejecución, se captura y se imprime en la consola.
 */

function responderDespues2sec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Respuesta después de 2 segundos");
    }, 2000);
  });
}

/**
 * La función `asyncCall` es una función asíncrona que utiliza `await` para esperar la resolución de la promesa devuelta por `responderDespues2sec`. Si la promesa se resuelve correctamente, imprime la respuesta en la consola. Si ocurre algún error durante la ejecución, se captura y se imprime en la consola.
 */

async function asyncCall() {
  try {
    console.log("Llamando a la función...");
    const respuesta = await responderDespues2sec();

    console.log(respuesta);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamada a la función asíncrona

asyncCall();
