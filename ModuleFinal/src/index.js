import { cube } from './math'
import service from './utility';
import './style.css';
import mentor from 'Images/mentors.jpg';

const  message = 'Hello Webpack, how are you?';

var math = document.createElement('pre');
var element = document.createElement('div');
var btn = document.createElement('button');
var img = document.createElement('image');

img = new Image();
img.src = mentor;
document.body.appendChild(img);

math.innerHTML = [ 'Hello Webpack', '5 cubed = ' + cube(5) ].join('\n\n');
document.body.appendChild(math);

element.innerHTML = message;
document.body.appendChild(element);

component();
document.body.appendChild(btn);

if(module.hot){
    module.hot.accept('./utility.js', function() {
        console.log('Accepting the updated utility service!');
        document.body.removeChild(btn);
        component();
        document.body.appendChild(btn);
    })
}

function component(){
    btn.innerHTML = 'Click me please';
    btn.setAttribute('id', 'btn');
    btn.onclick = service;
}

// let interval = setInterval(() => {
//     console.log(message);
//     if(document.readyState == 'complete') {
//         clearInterval(interval);
//         ready();
//     }    
// }, 100)
