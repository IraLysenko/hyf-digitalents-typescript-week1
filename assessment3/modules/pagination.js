const pagination = () => {
    const $pagination = document.createElement('div');
    $pagination.classList.add("app__container")
    $pagination.innerHTML = `                
        <button disabled class="question-panel__button question-panel__button--next button button--next"
                id="nextButton" type="button" value="Next">
          Next question
        </button>`

    return $pagination;
}

export { pagination };