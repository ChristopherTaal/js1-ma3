//question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(results);
        const facts = results.results;
        console.log(facts.length);

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);
            console.log(facts[i].tags.length);

            if (i === 8) {
                break;
            }
            console.log(results[i]);
        }

    }
    catch (error) {
        resultsContainer.innerHTML = displayError;
   }
}
makeApiCall();




