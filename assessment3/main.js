import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';
import { pagination } from "./modules/pagination.js";

let index = 0;
const questionsAmount = 5;
let questions = await fetchQuestion(questionsAmount);
let $question = createQuestion(questions[index], index, questionsAmount);
let $pagination = pagination();

class Component {
    constructor(componentId, component) {
        this.componentId = componentId;
        this.component = component;
    }
    createComponent() {
        const componentInDom = document.getElementById(this.componentId);
        componentInDom.innerHTML="";
        componentInDom.appendChild(this.component);
    }
}

let formComponent = new Component('FormComponent', $question);
let paginationComponent = new Component('PaginationComponent', $pagination);
formComponent.createComponent();
paginationComponent.createComponent();

const renderQuestion = () => {
    $question = createQuestion(questions[index], index, questionsAmount);
    nextButton.disabled = true;
}

const nextButton = document.querySelector('#nextButton');
if( index < questionsAmount ) {
    nextButton.addEventListener('click', () => {
        console.log('click')
        index += 1;
        renderQuestion();
        formComponent = new Component('FormComponent', $question);
        formComponent.createComponent();
    });
}