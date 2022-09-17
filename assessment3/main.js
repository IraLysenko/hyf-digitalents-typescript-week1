import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';


const questionsAmount = 5;
const question = await fetchQuestion(questionsAmount);
const $question = createQuestion(question, questionsAmount);

const $app = document.getElementById('app');
$app.innerHTML = '';
$app.appendChild($question);

