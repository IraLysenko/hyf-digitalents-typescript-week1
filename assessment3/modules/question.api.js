export const fetchQuestion = async (amount, category) => {
    const url = `https://the-trivia-api.com/api/questions?limit=${amount}&category=${category}`;
    const response =  await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let questionsData = await response.json();
    console.debug(questionsData);
    return questionsData;
}

export default { fetchQuestion };
