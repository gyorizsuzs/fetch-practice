`use strict`;

const text = `https://restcountries.com/v3.1/all`;

fetchData(text);

async function fetchData(url) {
    const dat = await fetch(url);
    const result = await dat.json();

    console.log(result);
}