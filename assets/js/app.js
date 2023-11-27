const baseEndpoint = 'https://api.github.com'; // url de la api a consumir
const usersEndpoint = `${baseEndpoint}/users`; // se le añade a la url /users de modo que cambia la url
const $n = document.querySelector('.name'); // Se agrega el punto para que selecione el primer elemento con la clase name. 
const $b = document.querySelector('.blog'); // seleciona el primer elemento con el id blog, sin embargo no hay ningun elemento con dicho id, solo clase.

const $l = document.querySelector('.location');

async function displayUser(username) {
  try {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); // no se puede consumir una api si la funcion no es asincrona, se le añade async a la izquierda de function
  
  console.log(response); // se cambia el argumento del console log por response ya que no existia ninguna variable llamada data
  const data = await response.json(); // se agrega await para tranformar el objeto json en un objeto que comprenda js
  console.log(data);
  $n.textContent = `${data.name}`; // se cambian las comillas por `` de otra manera no podria hacer la interpolacion
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  }
  catch {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);