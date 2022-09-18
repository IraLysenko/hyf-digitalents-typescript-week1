const createQuestion = (data, questionsAmount) => {

    let index;
    index = 0;
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
        
       <h1> Quiz </h1>
       <div class="question-panel">
            <h2 class="question-panel__title">${question}</h2>
            <span class="question-panel__category">Category: ${category}</span>
            <form class="question-panel__question-options question-options" action="">
                <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}" hidden>
                <label for="answer1">${allAnswers[0]}</label><br>
    
                <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}" hidden>
                <label for="answer2">${allAnswers[1]}</label><br>
    
                <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}" hidden>
                <label for="answer3">${allAnswers[2]}</label><br>
    
                <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}" hidden>
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
            setTimeout(() => {


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
                    <h1>Quiz</h1>
                   <div class="question-panel">
                        <h2 class="question-panel__title">${question}</h2>
                        <span class="question-panel__category">Category: ${category}</span>
                        <form class="question-panel__question-options question-options" action="">
                            <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}" hidden>
                            <label for="answer1">${allAnswers[0]}</label><br>
                
                            <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}" hidden>
                            <label for="answer2">${allAnswers[1]}</label><br>
                
                            <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}" hidden>
                            <label for="answer3">${allAnswers[2]}</label><br>
                
                            <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}" hidden>
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
            }, "1000")
        }

        const answer = $form.querySelector('input[name="answer"]:checked').value;
        let $response = $question.querySelector('.question-response');
        let $options = $question.querySelector('.question-options');
        let $buttons = $form.querySelector('.question-panel__buttons');
        let $nextButton = document.createElement('button');

        $nextButton.data = "button";
        $nextButton.classList.add('question-panel__button', 'button', 'button--next');
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
        $response.innerHTML = 'incorrect';

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
        }

        $options.appendChild($response);
    });

    return $question;
}

export { createQuestion };