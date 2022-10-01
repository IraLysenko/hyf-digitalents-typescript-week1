import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

let index = 0;
const questionsAmount = 5;
const question = await fetchQuestion();
let $question = createQuestion(question[index], index, questionsAmount);
const $app = document.getElementById('app');
$app.innerHTML;
$app.appendChild($question);

const nextButton = document.querySelector('#nextButton');
if(index < questionsAmount) {
    nextButton.addEventListener('click', () => {
        index += 1;
        $question = createQuestion(question[index], index, questionsAmount);
        $app.innerHTML = '';
        $app.appendChild($question);
        nextButton.disabled = true;
    });
}