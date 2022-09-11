import { encryptText } from './modules/encrypt.js';

const option = document.getElementById('shift');
const textInput = document.getElementById('plaintext');
const encryptedTextArea = document.getElementById('encryptedText');
let shiftOption = "";

option.addEventListener('change',
    (e) => {
        shiftOption = e.target.value;
        console.log("shift inside" + shiftOption);

        if(shiftOption.length) {
            textInput.addEventListener('keyup',
                (e) => {
                    let text = e.target.value;
                    encryptedTextArea.value = encryptText(text, shiftOption);
                });
        }
});


