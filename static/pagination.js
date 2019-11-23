/*Pagination*/
import { buttonNext, buttonPrevious } from './init.js'
import { baseUrl, publickey, hash, ts, limit} from './init.js';
import displayDetails from './displayDetails.js';

let offsetLet = 100;

buttonNext.addEventListener("click", function (e) {
    e.preventDefault();
    offsetLet = offsetLet + 20;
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card")[i].style.display = 'none';
    }

    const url = baseUrl + '?limit=' + limit + '&offset=' + offsetLet + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(res => {
            displayDetails(res, url);
        })
        .catch(error => console.log(error));


})


buttonPrevious.addEventListener("click", function (e) {
    e.preventDefault();
    offsetLet = offsetLet - 20;
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card")[i].style.display = 'none';
    }
    const url = baseUrl + '?limit=' + limit + '&offset=' + offsetLet + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(res => {
            displayDetails(res, url);
        })
        .catch(error => console.log(error));
})
