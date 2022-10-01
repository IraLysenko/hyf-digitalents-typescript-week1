const filters = (questions) => {
    console.log('filters add');
    const categories = questions.map(question => question.category);
    const difficulties = questions.map(question => question.difficulty);
    console.log(categories, difficulties);
    const $filters = document.createElement('section');
    $filters.innerHTML = `
        <div class="app__filters" id="appFilters">
          <span>Select category:</span>
          ${categories.map((cat, index) =>
                `<input class="app__filters-radio" type="radio" name="cat" id="cat-${index}" value="${cat}" hidden>
                 <label for="cat-${index}">${cat}</label><br>`
            ).join("")}
        </div>`

    return $filters;
}

export { filters };