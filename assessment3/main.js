import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

let index = 0;
const questionsAmount = 5;
const question = await fetchQuestion();
const nextButton = document.querySelector('.button--next');
const nextQuestion = () => {
    console.debug('wwww');
    if(index <= questionsAmount) {
        index += 1;
    }
};

if(nextButton) {
    nextButton.addEventListener('click', nextQuestion);
    console.debug('index' + index);
}

console.debug(question);
const $question = createQuestion(question[index], index, questionsAmount);
console.debug(index);

const $app = document.getElementById('app');
$app.innerHTML = '';
$app.appendChild($question);

