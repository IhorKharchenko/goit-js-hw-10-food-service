import refs from './refs.js';
const { body, toggle } = refs;
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

toggle.addEventListener('click', () => {
  if (toggle.checked) {
    body.setAttribute('class', DARK);
    localStorage.setItem('theme', DARK);
  } else {
    body.setAttribute('class', LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
});

if (localStorage.theme === DARK) {
  toggle.checked = true;
  body.setAttribute('class', DARK);
} else {
  toggle.checked = false;
  body.setAttribute('class', LIGHT);
}