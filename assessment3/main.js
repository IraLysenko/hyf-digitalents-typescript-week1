import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';
import { pagination } from "./modules/pagination.js";

let index = 0;
const questionsAmount = 5;
let category;
let questions = await fetchQuestion(questionsAmount, category);
let $question = createQuestion(questions[index], index, questionsAmount);
//let $filters = filters(questions);
let $pagination = pagination();

const $FormComponent = document.getElementById('FormComponent');
// const $FiltersComponent = document.getElementById('FiltersComponent');
// const $PaginationComponent = document.getElementById('PaginationComponent');

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
//let filtersComponent = new Component('FiltersComponent', $filters);
let paginationComponent = new Component('PaginationComponent', $pagination);
formComponent.createComponent();
//filtersComponent.createComponent();
paginationComponent.createComponent();

// const renderComponent = (componentId, component) => {
//     const componentInDom = document.getElementById(componentId);
//     componentInDom.innerHTM = '';
//     componentInDom.appendChild(component);
// }
// renderComponent('app', $question);

// $FormComponent.innerHTML;
// $FormComponent.appendChild($question);
// $FiltersComponent.appendChild($filters);
// $PaginationComponent.innerHTML;
// $PaginationComponent.appendChild($pagination);

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
        // $FormComponent.innerHTML="";
        // $FormComponent.appendChild($question);

        //$question = createQuestion(questions[index], index, questionsAmount);
        // $FormComponent.innerHTML = '';
        // $FormComponent.appendChild($question);
        // nextButton.disabled = true;
    });
}

//const filtersMain = document.querySelector('#appFilters');
// const filterRadio = $filters.querySelectorAll('.app__filters-radio');
// filterRadio.forEach(radio => {
//     radio.addEventListener('change', (e) => {
//         console.log(e.target.value);
//         category = e.target.value;
//
//         questions = fetchQuestion(questionsAmount, category);
//         formComponent.createComponent();
//         //renderQuestion();
//         // $question = createQuestion(questions[index], index, questionsAmount);
//         // $FormComponent.innerHTML = '';
//         // $FormComponent.appendChild($question);
//     });
// });

//console.log(filterRadio);