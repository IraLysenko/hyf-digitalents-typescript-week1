const createQuestion = (data, questionsAmount) => {

    let index = 0;
    let questionData = data[index];
    let question = questionData.question;
    let correctAnswer = questionData.correctAnswer;
    let incorrectAnswers = questionData.incorrectAnswers;
    let category = questionData.category;

    console.debug(questionData);

    

    // Concat the answers and shuffle them
    let allAnswers = [correctAnswer, ...incorrectAnswers]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    let $question = document.createElement('section');

    // Here you will need to modify the code
    // Add an element with id "questionCategory" to the HTML and set the value to based on the category property

    $question.innerHTML = `
       <div class="question-panel">
            <h1 class="question-panel__title">${question}</h1>
            <p>Category: ${category}</p>
            <form class="question-panel__question-options question-options" action="">
                <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}">
                <label for="answer1">${allAnswers[0]}</label><br>
    
                <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}">
                <label for="answer2">${allAnswers[1]}</label><br>
    
                <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}">
                <label for="answer3">${allAnswers[2]}</label><br>
    
                <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}">
                <label for="answer4">${allAnswers[3]}</label><br>
    
                <div class="question-panel__buttons">
                    <input class="question-panel__button button bitton--submit" id="submitAnswer" type="submit" value="Submit" />
                </div>
            </form>
        </div>        
    `;

    // Handle the submission of the form and validate the answer
    const $form = $question.querySelector('.question-options');

    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.debug('index' + index);

        const nextQuestion = () => {

            if(index <= questionsAmount) {
                index += 1;
                //questionData = data[index];
                question = data[index].question;
                correctAnswer = data[index].correctAnswer;
                incorrectAnswers = data[index].incorrectAnswers;
                category = data[index].category;
                allAnswers = [correctAnswer, ...incorrectAnswers]
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);

                setTimeout(() => {
                    $question.innerHTML = "";
                    $question.innerHTML = `

                   <div class="question-panel">
                        <h1 class="question-panel__title">${question}</h1>
                        <p>Category: ${category}</p>
                        <form class="question-panel__question-options question-options" action="">
                            <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}">
                            <label for="answer1">${allAnswers[0]}</label><br>
                
                            <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}">
                            <label for="answer2">${allAnswers[1]}</label><br>
                
                            <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}">
                            <label for="answer3">${allAnswers[2]}</label><br>
                
                            <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}">
                            <label for="answer4">${allAnswers[3]}</label><br>
                
                            <div class="question-panel__buttons">
                                <input class="question-panel__button button bitton--submit" id="submitAnswer" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>        
                `;
                }, 1000)

                console.debug(questionData);
            }
        }

        const answer = $form.querySelector('input[name="answer"]:checked').value;
        let $response = $question.querySelector('.question-response');
        let $buttons = $form.querySelector('.question-panel__buttons');
        let $nextButton = document.createElement('button');

        $nextButton.data = "hi";
        $nextButton.classList.add('question-panel__button');
        $nextButton.id = 'nextQuestion';
        $nextButton.innerHTML = 'Next';
        $nextButton.addEventListener('click', nextQuestion);

        console.log($response);

        if (!$response) {
            $response  = document.createElement('p');
        }

        $response.classList.add('question-response');
        $response.innerHTML = 'Sorry wrong answer';

        if (answer === correctAnswer) {
            $response.innerHTML = 'Correct !!';
            $buttons.appendChild($nextButton);
        }

        $question.appendChild($response);
    });

    return $question;
}

export { createQuestion };