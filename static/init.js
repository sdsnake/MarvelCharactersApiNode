import {getCookie} from './cookie.js';

/*Initialisation*/

export const publickey = '9b78e584812ee3975ccdd079af4656ec';
export const ts = 1;
export const hash = getCookie('marvelCookie');
export const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
export const limit = 20;
export var offset = 100;
export const app = document.getElementById("app");
export let buttonPrevious = document.createElement("button");
buttonPrevious.className = "btn btn-primary";
buttonPrevious.appendChild(document.createTextNode("Previous"));
app.appendChild(buttonPrevious);
export let buttonNext = document.createElement("button");
buttonNext.className = "btn btn-primary"
buttonNext.appendChild(document.createTextNode("Next"));
app.appendChild(buttonPrevious);
app.appendChild(buttonNext);

