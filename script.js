const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "0");
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [],
	privat: false,
};

personalMovieDB.movies[prompt('Один из просмотренных фильмов?')] = prompt('На сколько оцените его?');
personalMovieDB.movies[prompt('Один из просмотренных фильмов?')] = prompt('На сколько оцените его?');
console.log(personalMovieDB);
console.log(personalMovieDB.movies);