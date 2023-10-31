okElement = document.querySelector('.ok');
let name = '';
let surname = '';
let number = '+79999999999';
let mail = 'expl@expl.com';
let date = '2000-01-01';
function save() {
    name = document.getElementsByName('name')[0],
    surname = document.getElementsByName('last_name')[0],
    number = document.getElementsByName('phone')[0],
    mail = document.getElementsByName('mail')[0],
    date = document.getElementsByName('date')[0]

    const name1 = document.getElementsByClassName('name1')[0]
    name1.innerText = name.value;
    const surname1 = document.getElementsByClassName('last_name1')[0]
    surname1.innerText = surname.value;
    const number1 = document.getElementsByClassName('phone1')[0]
    number1.innerText = number.value;
    const mail1 = document.getElementsByClassName('mail1')[0]
    mail1.innerText = mail.value;
    const date1 = document.getElementsByClassName('date1')[0]
    date1.innerText = date.value;

}
okElement.addEventListener('click',save)