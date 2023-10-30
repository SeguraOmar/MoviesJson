// import results from '../../data/movies.json' assert { type: 'json' };
// console.log(results);




const sorties = document.querySelector("#latest");
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {

        console.log(data.results)
        for (const latest of data['results']) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `

        <img src="https://image.tmdb.org/t/p/original/${latest.poster_path}" alt="${latest.title}">

        `
        sorties.appendChild(card);
    }
})







const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)








let bouton = document.querySelector("#bouton");
bouton.addEventListener("click", function () {
    const infos = document.querySelector("#infos");
    infos.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
        }
    };
    let movieSearch = document.querySelector("#searchBar").value
    console.log(movieSearch);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=false&language=fr-FR&page=1`, options)
        .then(res => res.json())
        .then(data => {

            for (const movie of data['results']) {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                <img class="imgMovie" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p><i>${movie.release_date}</i></p>
                <p class="note">${movie.vote_average * 10}%</p>
            `;

                card.addEventListener('click', () => {
                    window.location.href = `movies.html?id=${movie.id}`;
                });

                infos.appendChild(card);
            }
        });


});