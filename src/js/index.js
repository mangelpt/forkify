//https://www.food2fork.com/api/search
// https://www.food2fork.com/api/get

import axios from 'axios';
async function getResults(query) {
    const key = '6d46ccd05c76d2ca8db0ec8058f2ed39';
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }

}

getResults('pasta');