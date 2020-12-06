import menuTemplate from '../templates/menu-template.hbs';
import menu from '../menu.json';
import refs from './refs.js';
const menuMarkup = menuTemplate(menu);
refs.menuList.insertAdjacentHTML('afterbegin', menuMarkup);