// import results from '../../data/movies.json' assert { type: 'json' };
// console.log(results);


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGEyZTA0MTVmODZkZGQ4MDI2NGViNDM3YzA0NDU5MyIsInN1YiI6IjY1NDBhZDdiNDU1N2EwMDBjNmI0NzYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSe8XF_F4iGTunYZS6mtnr3oyIk5brpibSgT2g2tIWc'
    }
};

let latestBtn = document.querySelector("#latestBtn");
latestBtn.addEventListener("click", function () {
    latestBtn.classList.add("active");
    topRatedBtn.classList.remove("active");
    let sorties = document.querySelector("#latest");
    sorties.innerHTML = ""
    let affichage = document.querySelector("#topRated");
    affichage.innerHTML = ""


    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            for (let i = 0; i < 10 && i < data.results.length; i++) {
                const latest = data.results[i];
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original/${latest.poster_path}" alt="${latest.title}">
                `;
                sorties.appendChild(card);
            }
        });
})













let topRatedBtn = document.querySelector("#topRatedBtn")
topRatedBtn.addEventListener("click", function () {
    topRatedBtn.classList.add("active");
    latestBtn.classList.remove("active");
    let affichage = document.querySelector("#topRated");
    affichage.innerHTML = ""
    let sorties = document.querySelector("#latest");
    sorties.innerHTML = ""

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < 10 && i < data.results.length; i++) {

                const notes = data.results[i];
                const card = document.createElement("div");
                card.classList.add("card")
                card.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/original/${notes.poster_path}" alt="${notes.title}">
                
                        `
                affichage.appendChild(card);
            }
        })
})





























let bouton = document.querySelector("#bouton");
bouton.addEventListener("click", function () {
    let sorties = document.querySelector("#latest");
    sorties.innerHTML = ""
    let affichage = document.querySelector("#topRated");
    affichage.innerHTML = ""
    const infos = document.querySelector("#infos");
    infos.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGEyZTA0MTVmODZkZGQ4MDI2NGViNDM3YzA0NDU5MyIsInN1YiI6IjY1NDBhZDdiNDU1N2EwMDBjNmI0NzYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSe8XF_F4iGTunYZS6mtnr3oyIk5brpibSgT2g2tIWc'
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