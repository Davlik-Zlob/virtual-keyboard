const body = document.querySelector('body');

const textArea = document.createElement('textarea');
textArea.classList.add('text-input');
body.appendChild(textArea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.appendChild(keyboard);

const lang = document.createElement('p');
lang.classList.add('lang');
lang.textContent = 'Switch language: Ctrl + Shift';
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

function keydownInput(event) {
  const { selectionStart, selectionEnd } = textArea;
  const start = textArea.value.slice(0, selectionStart);
  const end = textArea.value.slice(selectionEnd);
  if (event.key === 'Tab') {
    event.preventDefault();
    textArea.value = `${start}\t${end}`;
  } else if (event.key === ' ') {
    event.preventDefault();
    textArea.value = `${start} ${end}`;
  } else if (event.key.length === 1) {
    event.preventDefault();
    textArea.value = start + event.key + end;
  } else if (event.key === 'ArrowUp') {
    textArea.value = `${start}↑${end}`;
  } else if (event.key === 'ArrowLeft') {
    textArea.value = `${start}←${end}`;
  } else if (event.key === 'ArrowDown') {
    textArea.value = `${start}↓${end}`;
  } else if (event.key === 'ArrowRight') {
    textArea.value = `${start}→${end}`;
  } else if (event.key === 'Backspace') {
    event.preventDefault();
    if (selectionStart === selectionEnd) {
      if (selectionStart > 0) {
        textArea.value = textArea.value.slice(0, selectionStart - 1)
                         + textArea.value.slice(selectionEnd);
        textArea.setSelectionRange(selectionStart - 1, selectionStart - 1);
      }
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
      textArea.setSelectionRange(selectionStart, selectionStart);
    }
    textArea.focus();
    return;
  } else if (event.key === 'Delete') {
    event.preventDefault();
    if (selectionStart === selectionEnd) {
      if (selectionStart < textArea.value.length) {
        textArea.value = textArea.value.slice(0, selectionStart)
                         + textArea.value.slice(selectionEnd + 1);
      }
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
    }
    textArea.setSelectionRange(selectionStart, selectionStart);
    textArea.focus();
    return;
  }
  textArea.setSelectionRange(selectionStart + 1, selectionStart + 1);
  textArea.focus();
}

function clickInput() {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    const button = key;
    button.addEventListener('click', () => {
      const char = button.textContent;
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const before = textArea.value.substring(0, start);
      const after = textArea.value.substring(end);
      textArea.value = before + char + after;
      textArea.selectionStart = start + 1;
      textArea.selectionEnd = start + 1;
      textArea.focus();
    });
  });
}
clickInput();

function spaceInput() {
  const space = document.querySelector('.space');
  space.addEventListener('click', () => {
    textArea.value += ' ';
    textArea.focus();
  });
}
spaceInput();

function tabInput() {
  const tab = document.querySelector('.tab');
  tab.addEventListener('click', () => {
    textArea.value += '\t';
    textArea.focus();
  });
}
tabInput();

function enterInput() {
  const enter = document.querySelector('.enter');
  enter.addEventListener('click', () => {
    textArea.value += '\n';
    textArea.focus();
  });
}
enterInput();

function backInput() {
  const back = document.querySelector('.backspace');
  back.addEventListener('click', () => {
    const { selectionStart, selectionEnd } = textArea;
    if (selectionStart === selectionEnd) {
      if (selectionStart > 0) {
        textArea.value = textArea.value.slice(0, selectionStart - 1)
                         + textArea.value.slice(selectionEnd);
        textArea.setSelectionRange(selectionStart - 1, selectionStart - 1);
      }
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
      textArea.setSelectionRange(selectionStart, selectionStart);
    }
    textArea.focus();
  });
}
backInput();

function delInput() {
  const del = document.querySelector('.delete');
  del.addEventListener('click', () => {
    const { selectionStart, selectionEnd } = textArea;
    if (selectionStart === selectionEnd) {
      if (selectionStart < textArea.value.length) {
        textArea.value = textArea.value.slice(0, selectionStart)
                         + textArea.value.slice(selectionEnd + 1);
      }
    } else {
      textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
    }
    textArea.setSelectionRange(selectionStart, selectionStart);
    textArea.focus();
  });
}
delInput();

window.addEventListener('keydown', addActiveClassToKey);
window.addEventListener('keydown', keydownInput);
window.addEventListener('keyup', removeActiveClassToKey);

function saveLanguage() {
  localStorage.setItem('language', isRussianLayout ? 'ru' : 'en');
}
window.addEventListener('beforeunload', saveLanguage);
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  isRussianLayout = savedLanguage === 'ru';
  updateKeysLanguage();
}

// window.addEventListener('keydown', function(event) {
//   console.log(event);
// });
