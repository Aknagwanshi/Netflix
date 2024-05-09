document.addEventListener("DOMContentLoaded", function () {
    // Your TMDb API key
    var apiKey = '5f95077623db2b23f7b41f7361c02021';
    var MAIN_URL = 'https://api.themoviedb.org/3/'


    // TMDb API URL
    var popular_movies = MAIN_URL + '/discover/movie?api_key=' + apiKey + '&sort_by=popularity.desc';
    // Fetch movie posters
    fetch(popular_movies)
        .then(response => response.json())
        .then(data => {
            const carousel = document.querySelector('#popular-movies');
            data.results.forEach(movie => {
                const poster = document.createElement('img');
                poster.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                poster.addEventListener('click', () => {
                    document.querySelector('#trailer-video').src = '';
                    document.querySelector('.main').style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
                    document.querySelector('#trailer-video').style.display = 'none';
                    document.querySelector('#edit-h3').innerText = `${movie.vote_average.toFixed(1)}⭐ Rating`;
                    document.querySelector('#edit-p').innerText = `${movie.overview}`;
                    posterURL = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
                carousel.appendChild(poster);
            });
        })
        .catch(error => console.error('Error fetching data:', error));


    // TMDb API URL for trending TV shows
    var trending_shows = MAIN_URL + 'trending/tv/week?api_key=' + apiKey;
    // Function to fetch trending TV shows
    function fetchTrendingTVShows() {
        fetch(trending_shows)
            .then(response => response.json())
            .then(data => {
                const carousel = document.querySelector('#trending-shows');
                data.results.forEach(tvShow => {
                    const poster = document.createElement('img');
                    poster.src = 'https://image.tmdb.org/t/p/w500' + tvShow.poster_path;
                    poster.alt = tvShow.name;
                    poster.addEventListener('click', () => {
                        document.querySelector('#trailer-video').src = '';
                        document.querySelector('.main').style.backgroundImage = `url(https://image.tmdb.org/t/p/original${tvShow.backdrop_path})`;
                        document.querySelector('#trailer-video').style.display = 'none';
                        document.querySelector('#edit-h3').innerText = `${tvShow.vote_average.toFixed(1)}⭐ Rating`;
                        document.querySelector('#edit-p').innerText = `${tvShow.overview}`;
                        posterURL = `https://api.themoviedb.org/3/tv/${tvShow.id}/videos?api_key=${apiKey}`
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }); // Add double-click event listener
                    carousel.appendChild(poster);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    // Initial fetch
    fetchTrendingTVShows();

    // TV Shows
    var tv_shows = MAIN_URL + '/discover/tv?api_key=' + apiKey + '&sort_by=popularity.desc';
    // Function to fetch TV serials
    function fetchTVSerials() {
        fetch(tv_shows)
            .then(response => response.json())
            .then(data => {
                const carousel = document.querySelector('#tv-shows');
                data.results.forEach(tvShow => {
                    const poster = document.createElement('img');
                    poster.src = 'https://image.tmdb.org/t/p/w500' + tvShow.poster_path;
                    poster.alt = tvShow.name;
                    poster.addEventListener('click', () => {
                        document.querySelector('#trailer-video').src = '';
                        document.querySelector('.main').style.backgroundImage = `url(https://image.tmdb.org/t/p/original${tvShow.backdrop_path})`;
                        document.querySelector('#trailer-video').style.display = 'none';
                        document.querySelector('#edit-h3').innerText = `${tvShow.vote_average.toFixed(1)}⭐ Rating`;
                        document.querySelector('#edit-p').innerText = `${tvShow.overview}`;
                        posterURL = `https://api.themoviedb.org/3/tv/${tvShow.id}/videos?api_key=${apiKey}`
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });

                    });
                    carousel.appendChild(poster);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    // Initial fetch
    fetchTVSerials();


    // TMDb API URL for anime and cartoon shows
    var cartoon_shows = MAIN_URL + '/discover/tv?api_key=' + apiKey + '&sort_by=popularity.desc&with_genres=16'; // 16 is the genre ID for Animation

    // Function to fetch anime and cartoon shows
    function fetchAnimeAndCartoonShows() {
        fetch(cartoon_shows)
            .then(response => response.json())
            .then(data => {
                const carousel = document.querySelector('#cartoon-shows');
                data.results.forEach(tvShow => {
                    const poster = document.createElement('img');
                    poster.src = 'https://image.tmdb.org/t/p/w500' + tvShow.poster_path;
                    poster.alt = tvShow.name;
                    poster.addEventListener('click', () => {
                        document.querySelector('#trailer-video').src = '';
                        document.querySelector('.main').style.backgroundImage = `url(https://image.tmdb.org/t/p/original${tvShow.backdrop_path})`;
                        document.querySelector('#trailer-video').style.display = 'none';
                        document.querySelector('#edit-h3').innerText = `${tvShow.vote_average.toFixed(1)}⭐ Rating`;
                        document.querySelector('#edit-p').innerText = `${tvShow.overview}`;
                        posterURL = `https://api.themoviedb.org/3/tv/${tvShow.id}/videos?api_key=${apiKey}`
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });

                    });
                    carousel.appendChild(poster);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    // Initial fetch
    fetchAnimeAndCartoonShows();


    //This event is for play button
    document.querySelector('#play').addEventListener('click', () => {
        // window.open(src)
        let trailer = fetch(posterURL)
            .then(response => response.json())
            .then(data => {
                // Check if there are any videos available
                if (data.results && data.results.length > 0) {
                    // Get the first video (assuming it's a trailer)
                    var trailerKey = data.results[0].key;

                    // Construct the URL for the trailer on YouTube
                    var trailerEmbedUrl = `https://www.youtube.com/embed/${trailerKey}`;

                    // Set the src attribute of the iframe to the trailer URL
                    document.querySelector('#trailer-video').src = trailerEmbedUrl;
                    document.querySelector('#trailer-video').style.display = 'flex';

                } else {
                    console.error('No trailer available for this movie.');
                }
            })
            .catch(error => console.error('Error fetching movie trailer:', error));
    })
    document.querySelector('#info').addEventListener('click', () => {
        window.open(info.html,'_blank')
    })
});