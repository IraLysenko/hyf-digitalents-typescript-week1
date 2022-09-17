export const fetchQuestion = async (questionsAmount) => {
    const url = `https://the-trivia-api.com/api/questions?limit=${questionsAmount}`;
    const response =  await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let questionsData = await response.json();
    return questionsData;
}

export default { fetchQuestion };
