const body = document.querySelector('body');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.appendChild(keyboard);

const engKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\','Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];
const engKeysShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|','Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];
const engKeysCaps = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\','Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];
const engKeysCapsShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|','Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];

const ruKeys = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];
const ruKeysShift = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/','Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];
const ruKeysCaps = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\','Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];
const ruKeysCapsShift = [
  'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/','Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl'
];

for (var i = 0; i < engKeys.length; i++) {
  var key = document.createElement('button');
  key.classList.add('key');
  key.innerHTML = engKeys[i];
  if (engKeys[i] === 'Backspace' ||
      engKeys[i] === 'CapsLock' ||
      engKeys[i] === 'Enter' ||
      engKeys[i] === 'Shift') {
    key.classList.add('special-key');
  }
  if (engKeys[i] === '&nbsp;') {
    key.classList.add('whitespace');
  }
  keyboard.appendChild(key);
}

window.addEventListener('keydown', function(event) {
  const virtualKeys = document.querySelectorAll('.key');
  virtualKeys.forEach(button => {
    if (button.innerHTML === event.key ||
      button.innerHTML === 'Del' && event.key === 'Delete' ||
      button.innerHTML === 'Ctrl' && event.key === 'Control' ||
      button.innerHTML === '&nbsp;' && event.code === 'Space' ||
      button.innerHTML === '↑' && event.key === 'ArrowUp' ||
      button.innerHTML === '←' && event.key === 'ArrowLeft' ||
      button.innerHTML === '↓' && event.key === 'ArrowDown' ||
      button.innerHTML === '→' && event.key === 'ArrowRight') {
        if (button.innerHTML === 'Shift' && (event.location === 1 || event.location === 2)) {
          button.classList.add('active');
        } else if (button.innerHTML !== 'Shift') {
          button.classList.add('active');
        }
      // button.classList.add('active');
    }
  })
});

window.addEventListener('keydown', function(event) {
  setTimeout(function() {
    const virtualKeys = document.querySelectorAll('.key');
    virtualKeys.forEach(button => {
      if (button.innerHTML === event.key ||
      button.innerHTML === 'Del' && event.key === 'Delete' ||
      button.innerHTML === 'Ctrl' && event.key === 'Control' ||
      button.innerHTML === '&nbsp;' && event.code === 'Space' ||
      button.innerHTML === '↑' && event.key === 'ArrowUp' ||
      button.innerHTML === '←' && event.key === 'ArrowLeft' ||
      button.innerHTML === '↓' && event.key === 'ArrowDown' ||
      button.innerHTML === '→' && event.key === 'ArrowRight') {
        button.classList.remove('active');
      }
    })
  }, 300);
});

window.addEventListener('keydown', function(event) {
  console.log(event.code)
});