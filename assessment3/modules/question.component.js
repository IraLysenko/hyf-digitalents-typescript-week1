const createQuestion = (data, questionsAmount) => {

    let index = 0;
    let questionData = data[index];
    let question = questionData.question;
    let correctAnswer = questionData.correctAnswer;
    let incorrectAnswers = questionData.incorrectAnswers;
    let category = questionData.category;

    console.debug('questionData old');
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

        let nextQuestion = () => {
            if(index <= questionsAmount) {
                index += 1;
                questionData = data[index];
                question = questionData.question;
                correctAnswer = questionData.correctAnswer;
                incorrectAnswers = questionData.incorrectAnswers;
                category = questionData.category;

                allAnswers = [correctAnswer, ...incorrectAnswers]
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);


                    $question.innerHTML = "loading";
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

                console.debug('questionData new');
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

        console.debug('questionData new outside');
        console.debug(questionData);

        console.log($response);

        if (!$response) {
            $response  = document.createElement('p');
        }

        $response.classList.add('question-response');
        $response.innerHTML = 'No answer';

        if (answer === correctAnswer) {
            $response.innerHTML = 'Correct !!';

            if (index <= questionsAmount) {
                $buttons.appendChild($nextButton);
                console.debug('next exist');
            } else {
                console.debug('nothing next');
            }
        } if(answer === null){
            $response.innerHTML = 'no answer';
        } else {
            $response.innerHTML = 'incorrect answer';
        }

        $question.appendChild($response);
    });

    return $question;
}

export { createQuestion };