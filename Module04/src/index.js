import 'Styles/style.css';
import Landscape from 'Images/slika.jpg';
import People from 'Data/people.json';

console.log('Webpack Demo');

let div = document.createElement('div');
div.innerHTML = 'Webpack Demo';
div.classList.add('hello');
document.body.appendChild(div);

let land = new Image();
land.src = Landscape;
document.body.appendChild(land);

console.log(People);

