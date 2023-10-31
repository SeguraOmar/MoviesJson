const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGEyZTA0MTVmODZkZGQ4MDI2NGViNDM3YzA0NDU5MyIsInN1YiI6IjY1NDBhZDdiNDU1N2EwMDBjNmI0NzYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSe8XF_F4iGTunYZS6mtnr3oyIk5brpibSgT2g2tIWc'
    }
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=fr-FR`, options)
  .then(res => res.json())
  .then(data => {
    const movieDetails = data;

    const moviePosterURL = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;
    const movieTitle = movieDetails.title;
    const movieDuration = `${movieDetails.runtime} minutes`;
    const movieReleaseDate = movieDetails.release_date;
    const movieSynopsis = movieDetails.overview;
    const movieImage = document.createElement('img');
    movieImage.src = moviePosterURL;
    movieImage.alt = movieDetails.title;
    document.getElementById('movie-image-container').appendChild(movieImage);
   
    document.getElementById('movie-title').textContent = movieTitle;
    document.getElementById('movie-duration').textContent = `Durée : ${movieDuration}`;
    document.getElementById('movie-release-date').textContent = `Date de sortie : ${movieReleaseDate}`;
    document.getElementById('movie-synopsis').textContent = `Synopsis : ${movieSynopsis}`;


  })




