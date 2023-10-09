import { header } from './components/header';
import { main } from './components/main';
import { footer } from './components/footer';
import { browserRouter, render } from './routes';
import './scss/style.scss';

// DOM
const headerContainer = document.querySelector('.header .container');
const mainContainer = document.querySelector('.main .container');
const footerMenu = document.querySelector('.footer-menu ul');

//
function createElementWithText(tagName, text) {
    const element = document.createElement(tagName);
    element.textContent = text;
    return element;
  }

//components in the DOM
headerContainer.innerHTML = header();
mainContainer.innerHTML = main();
footerMenu.innerHTML = footer();

// Fill in the contents of the elements
headerContainer.appendChild(createElementWithText('h1', 'Welcome to Client-Bank'));
mainContainer.appendChild(createElementWithText('p', 'This is the main page of Client-Bank. Here you can learn about our services and products.'));

// Создайте элементы списка и добавьте их в меню подвала
const menuItems = ['About us', 'Services', 'Contacts'];

menuItems.forEach((item) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = '#'; 
  link.textContent = item;
  listItem.appendChild(link);
  footerMenu.appendChild(listItem);
});


browserRouter('#app');

render(header, '.header');
render(main, '.main');
render(footer, '.footer');
