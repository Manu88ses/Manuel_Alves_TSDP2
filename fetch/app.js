/**
 * getJSON
 * --------
 * Fa una petició HTTP GET a una URL i retorna les dades en format JSON.
 *
 * DESCRIPCIÓ:
 * - Envia una petició GET amb fetch().
 * - Espera la resposta del servidor.
 * - Comprova si la resposta HTTP és correcta (status 200–299).
 * - Si hi ha error HTTP, llança una excepció.
 * - Si tot va bé, retorna el JSON de la resposta.
 *
 * PARÀMETRES:
 * @param {string} url - L’URL de l’API que es vol consultar.
 *
 * RETORN:
 * @returns {Promise<object>} - Una Promise que retorna les dades en format JSON.
 *
 * ERRORS:
 * - Llança un Error si la resposta HTTP no és correcta (404, 500, etc.).
 *
 * EXEMPLE D’ÚS:
 * const user = await getJSON("https://jsonplaceholder.typicode.com/users/1");
 */
async function getJSON(url) {
  const res = await fetch(url);

  // fetch NO falla automàticament amb errors HTTP (404, 500...)
  // per això comprovem manualment res.ok
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  // Convertim la resposta a JSON i la retornem
  return res.json();
}


/* =====================
   MISSIÓ 1 — GET posts
   ===================== */
/*
  QUÈ HA DE FER AQUESTA FUNCIÓ?

  - Quan l’usuari clica el botó:
    1) Ha de demanar dades a una API (GET /posts?_limit=5)
    2) Ha d’esperar la resposta (await fetch + await json)
    3) Ha de mostrar els posts per pantalla en forma de llista

  RESULTAT ESPERAT:
  - A la pantalla apareixen 5 posts.
  - Cada post es mostra així: "#id - title".
  - Si hi ha un error (API, internet, URL…), es mostra un missatge d’error.
*/
// Api URL Missió 1
const API_POSTS = "https://jsonplaceholder.typicode.com/posts?_limit=5";

// Elements Missió 1
const btnPosts = document.querySelector("#btnPosts");
const postsList = document.querySelector("#postsList");

// Funció Missió 1
btnPosts.addEventListener("click", async () => {
  postsList.innerHTML = "";

  try {
    const posts = await getJSON(API_POSTS);

    for (const p of posts) {
      const li = document.createElement("li");
      li.textContent = `#${p.id} - ${p.title}`;
      postsList.appendChild(li);
    }
  } catch (e) {
    const li = document.createElement("li");
    li.textContent = `Error: ${e.message}`;
    postsList.appendChild(li);
  }
});



/* ==========================
   MISSIÓ 2 — GET User per ID
   ========================== */
/*
  QUÈ HA DE FER AQUESTA FUNCIÓ?

  - Quan l’usuari escriu un ID i clica el botó:
    1) Ha d’agafar l’ID de l’input.
    2) Ha de comprovar que l’ID sigui vàlid (número > 0).
    3) Ha de demanar a l’API l’usuari amb aquest ID (GET /users/{id}).
    4) Ha d’esperar la resposta i convertir-la a JSON.
    5) Ha de mostrar dades bàsiques de l’usuari per pantalla.

  DADES QUE S’HAN DE MOSTRAR:
  - Nom
  - Email
  - Ciutat

  RESULTAT ESPERAT:
  - Si l’ID és correcte → es mostren les dades de l’usuari.
  - Si l’ID no és vàlid → es mostra un missatge d’error.
  - Si l’API falla → es mostra un missatge d’error.
*/
// Api URL Missió 2
const API_USER = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

// Elements Missió 2
const userIdInput = document.querySelector("#userId");
const btnUser = document.querySelector("#btnUser");
const userBox = document.querySelector("#userBox");

// Funció Missió 2
btnUser.addEventListener("click", async () => {

});



/* =========================
   MISSIÓ 3 — GET Pokémon per nom
   ========================= */
/*
  QUÈ HA DE FER AQUESTA FUNCIÓ?

  - Quan l’usuari escriu el nom d’un Pokémon i clica el botó:
    1) Ha d’agafar el text de l’input.
    2) Ha de comprovar que el nom no estigui buit.
    3) Ha de demanar a l’API les dades del Pokémon (GET /pokemon/{name}).
    4) Ha d’esperar la resposta i convertir-la a JSON.
    5) Ha de mostrar informació bàsica del Pokémon per pantalla.
    6) Ha de mostrar una imatge del Pokémon.

  DADES QUE S’HAN DE MOSTRAR:
  - ID del Pokémon
  - Nom
  - Imatge frontal

  RESULTAT ESPERAT:
  - Si el nom és correcte → es mostra el Pokémon i la seva imatge.
  - Si l’input està buit → es mostra un missatge d’avís.
  - Si el Pokémon no existeix → es mostra un missatge d’error.
*/
// Api URL Missió 3
const API_POKE = (name) => `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

// Elements Missió 3
const pokeNameInput = document.querySelector("#pokeName");
const btnPoke = document.querySelector("#btnPoke");
const pokeBox = document.querySelector("#pokeBox");
const pokeImg = document.querySelector("#pokeImg");

// Funció missió 3
btnPoke.addEventListener("click", async () => {

});



/* ==========================
   MISSIÓ 4 — GET Meteo Andorra la Vella
   ========================== */
/*
  QUÈ HA DE FER AQUESTA FUNCIÓ?

  - Quan l’usuari clica el botó:
    1) Ha de demanar dades meteorològiques a una API (GET).
    2) Ha d’esperar la resposta del servidor.
    3) Ha de convertir la resposta a JSON.
    4) Ha d’extreure només la informació que ens interessa.
    5) Ha de mostrar aquesta informació per pantalla.

  DADES QUE S’HAN DE MOSTRAR:
  - Temperatura actual (en graus Celsius).

  RESULTAT ESPERAT:
  - Es mostra la temperatura actual d’Andorra la Vella.
  - Mentre carrega, es mostra el text “Carregant…”.
  - Si hi ha un error amb l’API o la connexió, es mostra un missatge d’error.
*/
// API Url Missió 4
const API_METEO = "https://api.open-meteo.com/v1/forecast?latitude=42.5078&longitude=1.5211&current=temperature_2m,is_day&timezone=Europe%2FAndorra";

// Elements Missió 4
const btnMeteo = document.querySelector("#btnMeteo");
const meteoBox = document.querySelector("#meteoBox");

// Funció Missió 4
btnMeteo.addEventListener("click", async () => {

});



/* =============================
   MISSIÓ 5 — GET GitHub user
   ============================= */
/*
  QUÈ HA DE FER AQUESTA FUNCIÓ?

  - Quan l’usuari escriu un nom d’usuari de GitHub i clica el botó:
    1) Ha d’agafar el text de l’input.
    2) Ha de comprovar que el nom d’usuari no estigui buit.
    3) Ha de demanar a l’API de GitHub les dades del perfil (GET /users/{username}).
    4) Ha d’esperar la resposta i convertir-la a JSON.
    5) Ha de mostrar informació bàsica del perfil per pantalla.
    6) Ha de mostrar la imatge (avatar) de l’usuari.

  DADES QUE S’HAN DE MOSTRAR:
  - Login
  - Nombre de repositoris públics
  - Nombre de followers
  - Avatar de l’usuari

  RESULTAT ESPERAT:
  - Si el username és correcte → es mostren les dades i l’avatar.
  - Si l’input està buit → es mostra un missatge d’avís.
  - Si l’usuari no existeix → es mostra un missatge d’error.
*/
// API Url Missió 5
const API_GH = (user) => `https://api.github.com/users/${user}`;

// Elements Missió 5
const ghUserInput = document.querySelector("#ghUser");
const btnGh = document.querySelector("#btnGh");
const ghBox = document.querySelector("#ghBox");
const ghImg = document.querySelector("#ghImg");

// Funció Missió 5
btnGh.addEventListener("click", async () => {

});
