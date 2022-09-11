//import { encryptText } from './modules/encrypt.js';


const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const option = document.getElementById('shift');
const textInput = document.getElementById('plaintext');
const encryptedTextArea = document.getElementById('encryptedText');

option.addEventListener('change',
    (e) => {
    //console.log('option = ' + e.target.value);
});

textInput.addEventListener('keyup',
    (e) => {
        //console.log('text = ' + e.target.value);
        let text = e.target.value;
        encryptedTextArea.value = e.target.value;
        //console.debug(encryptedTextArea.value);
    });




