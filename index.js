const body = document.querySelector('body');

const textInput = document.createElement('textarea');
textInput.classList.add('text-input');
body.appendChild(textInput);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.appendChild(keyboard);

const lang = document.createElement('p');
lang.classList.add('lang');
lang.textContent = 'Switch language: Shift + Ctrl';
body.appendChild(lang);

let isRussianLayout = false;

const engKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
];

// const engKeysShift = [
//   '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
//   'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
//   'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
//   'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
// ];
// const engKeysCaps = [
//   '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
//   'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
//   'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
//   'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
// ];
// const engKeysCapsShift = [
//   '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
//   'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
//   'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift',
//   'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
// ];

const ruKeys = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
];
// const ruKeysShift = [
//   'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
//   'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
//   'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
//   'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
// ];
// const ruKeysCaps = [
//   'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
//   'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
//   'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift',
//   'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
// ];
// const ruKeysCapsShift = [
//   'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
//   'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
//   'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift',
//   'Ctrl', 'Alt', '&nbsp;', 'Alt', '←', '↓', '→', 'Ctrl',
// ];

for (let i = 0; i < engKeys.length; i += 1) {
  const key = document.createElement('button');
  switch (i) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      key.classList.add('key', 'key-symbol');
      key.innerHTML = engKeys[i];
      break;
    case 13:
      key.classList.add('backspace', 'key-special');
      key.innerHTML = engKeys[i];
      break;
    case 14:
      key.classList.add('tab');
      key.innerHTML = engKeys[i];
      break;
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
      key.classList.add('key', 'key-symbol');
      key.innerHTML = engKeys[i];
      break;
    case 28:
      key.classList.add('delete');
      key.innerHTML = engKeys[i];
      break;
    case 29:
      key.classList.add('caps', 'key-special');
      key.innerHTML = engKeys[i];
      break;
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
      key.classList.add('key', 'key-symbol');
      key.innerHTML = engKeys[i];
      break;
    case 41:
      key.classList.add('enter', 'key-special');
      key.innerHTML = engKeys[i];
      break;
    case 42:
      key.classList.add('shiftleft', 'key-special');
      key.innerHTML = engKeys[i];
      break;
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
      key.classList.add('key', 'key-symbol');
      key.innerHTML = engKeys[i];
      break;
    case 53:
      key.classList.add('key', 'arrowup');
      key.innerHTML = engKeys[i];
      break;
    case 54:
      key.classList.add('shiftright', 'key-special');
      key.innerHTML = engKeys[i];
      break;
    case 55:
      key.classList.add('controlleft');
      key.innerHTML = engKeys[i];
      break;
    case 56:
      key.classList.add('altleft');
      key.innerHTML = engKeys[i];
      break;
    case 57:
      key.classList.add('space', 'key-special');
      key.innerHTML = engKeys[i];
      break;
    case 58:
      key.classList.add('altright');
      key.innerHTML = engKeys[i];
      break;
    case 59:
      key.classList.add('key', 'arrowleft');
      key.innerHTML = engKeys[i];
      break;
    case 60:
      key.classList.add('key', 'arrowdown');
      key.innerHTML = engKeys[i];
      break;
    case 61:
      key.classList.add('key', 'arrowright');
      key.innerHTML = engKeys[i];
      break;
    case 62:
      key.classList.add('controlright');
      key.innerHTML = engKeys[i];
      break;
    default:
      break;
  }
  keyboard.appendChild(key);
}

function updateKeysLanguage() {
  const virtualKeys = document.querySelectorAll('button');
  const keys = isRussianLayout ? ruKeys : engKeys;
  virtualKeys.forEach((button, index) => {
    const newButton = button;
    newButton.innerHTML = keys[index];
  });
}

function addActiveClassToKey(event) {
  const virtualKeys = document.querySelectorAll('button');
  virtualKeys.forEach((button) => {
    if ((button.classList.contains(event.key.toLowerCase()) && event.key !== 'Shift' && event.key !== 'Alt')
        || button.classList.contains(event.code.toLowerCase())
        || (button.innerHTML === event.key && event.key !== 'Shift' && event.key !== 'Alt')) {
      button.classList.add('active');
    }
    if (event.ctrlKey && event.shiftKey) {
      isRussianLayout = !isRussianLayout;
      updateKeysLanguage();
    }
  });
}

function removeActiveClassToKey(event) {
  const virtualKeys = document.querySelectorAll('button');
  virtualKeys.forEach((button) => {
    if ((button.classList.contains(event.key.toLowerCase()) && event.key !== 'Shift' && event.key !== 'Alt')
        || button.classList.contains(event.code.toLowerCase())
        || (button.innerHTML === event.key && event.key !== 'Shift' && event.key !== 'Alt')) {
      button.classList.remove('active');
    }
  });
}

window.addEventListener('keydown', addActiveClassToKey);
window.addEventListener('keyup', removeActiveClassToKey);

// function handleInput(event) {
//   if (event.type === 'keydown') {
//     if (event.key === 'Enter') {
//       textInput.value += '\n';
//     } else {
//       textInput.value += event.key;
//     }
//   } else if (event.type === 'click') {
//     const key = event.target.getAttribute('data-value');
//     if (key === 'Enter') {
//       textInput.value += '\n';
//     } else {
//       textInput.value += key;
//     }
//   }
// }

// window.addEventListener('keydown', handleInput);

// window.addEventListener('keydown', function(event) {
//   console.log(event);
// });
