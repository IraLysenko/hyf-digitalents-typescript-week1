import { encryptText } from './modules/encrypt.js';

const option = document.getElementById('shift');
const textInput = document.getElementById('plaintext');
let encryptedTextArea = document.getElementById('encryptedText');
let shiftOption;
let textValue;

const getShiftedValue = (e) => {
    shiftOption = e.target.value;
}

const getText = (e) => {
    textValue = e.target.value;
}

const disabledStyles = () => {
    textInput.disabled = false;
    encryptedTextArea.disabled = false;
}

option.addEventListener('change', (e) => {
    if (!textValue) {
        disabledStyles();
    }
    getShiftedValue(e);
    encryptedTextArea.value = textValue ? encryptText(textValue, shiftOption) : "";
});

textInput.addEventListener('keyup', (e) => {
    getText(e);
    encryptedTextArea.value = encryptText(textValue, shiftOption);
});