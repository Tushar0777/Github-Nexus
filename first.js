const name='tushar';
const age=23;
const balance=240000000;


function updateBalance(){
    balance+=70000000;
}
console.log(balance)


const ele=document.getElementById('container');
const card=document.createElement('card');
const heading=document.createElement('p').innerHTML='this is a card';
card.appendChild(heading);
ele.appendChild(card);