const pagination = () => {
    const $pagination = document.createElement('div');
    $pagination.innerHTML = `
        <div class="app__container">          
            <button disabled class="question-panel__button question-panel__button--next button button--next"
                    id="nextButton" type="button" value="Next">
              Next question
            </button>         
        </div>`

    return $pagination;
}

export { pagination };