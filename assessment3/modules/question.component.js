const createQuestion = (data, index, questionsAmount) => {
    const
        question = data.question,
        correctAnswer = data.correctAnswer,
        incorrectAnswers = data.incorrectAnswers,
        category = data.category;

    // Concat the answers and shuffle them
    const allAnswers = [correctAnswer, ...incorrectAnswers]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const $question = document.createElement('section');

    // Here you will need to modify the code
    // Add an element with id "questionCategory" to the HTML and set the value to based on the category property

    $question.innerHTML = `
        <h1>Quiz</h1>
        <form class="question-panel__question-options question-options" action="">
            <h2 class="question-panel__title">Question: ${question}</h2>
            <span class="question-panel__category">Category: ${category}</span>
            <span class="question-panel__score">Score: ${index} / ${questionsAmount}</span>
            
            <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}" hidden>
            <label for="answer1">${allAnswers[0]}</label><br>

            <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}" hidden>
            <label for="answer2">${allAnswers[1]}</label><br>

            <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}" hidden>
            <label for="answer3">${allAnswers[2]}</label><br>

            <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}" hidden>
            <label for="answer4">${allAnswers[3]}</label><br>

            <div class="question-panel__buttons">
              <input class="question-panel__button button bitton--submit" id="submitAnswer" type="submit" value="Check the answer" />
            </div>
        </form>
    `;

    // Handle the submission of the form and validate the answer
    const $form = $question.querySelector('.question-options');
    $form.addEventListener('submit', (event) => {

        event.preventDefault();
        const answer = $form.querySelector('input[name="answer"]:checked').value;
        let $response = $question.querySelector('.question-response');
        let $buttons = $form.querySelector('.question-panel__buttons');
        let $nextButton = document.createElement('button');
        $nextButton.data = "button";
        $nextButton.classList.add('question-panel__button', 'button', 'button--next');
        $nextButton.id = 'nextQuestion';
        $nextButton.innerHTML = 'Next';
        //$nextButton.addEventListener('click', nextQuestion);

        console.log($response);
        if (!$response) {
            $response  = document.createElement('p');
        }
        $response.classList.add('question-response');

        $response.innerHTML = 'Sorry wrong answer';
        if (answer === correctAnswer) {
            $response.innerHTML = 'Correct !!';

            if (index <= questionsAmount) {
                $buttons.appendChild($nextButton);
                console.debug('next exist');
            } else {
                console.debug('nothing next');
            }
        }

        $question.appendChild($response);

    });

    return $question;
}

export { createQuestion };