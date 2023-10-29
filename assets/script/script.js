// import results from '../../data/movies.json' assert { type: 'json' };
// console.log(results);

fetch('data/movies.json')
    .then(res => res.json())
    .then(data => {
        const infosContainer = document.querySelector('#infos');

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

            infosContainer.appendChild(card);
        }
    });


