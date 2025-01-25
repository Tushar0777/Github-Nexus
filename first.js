const name='tushar';
const age=23;
const balance=240000000;


function updateBalance(){
    balance+=70000000;
}
console.log(balance)



function generate(){
    const ele=document.getElementById('container');
    const card=document.createElement('div');
    card.className='card';
    const heading=document.createElement('p')
    heading.textContent='this is a card';
    card.appendChild(heading);
    ele.appendChild(card);
}
function remove(){
    const ele=document.getElementById('container');
    if(ele.lastElementChild){
        ele.removeChild(ele.lastElementChild);
    }
}


const button=document.querySelector('#cardGenrator');
button.addEventListener('click',generate);

const deleteButton=document.querySelector('#cardDelete');
deleteButton.addEventListener('click',remove);
