'use strict'

const dayjs = require('dayjs');

function Film(filmID, name, favorite=false, date, rating){
    this.filmID = filmID;
    this.name = name;
    this.favorite = favorite;
    this.date = date;
    this.rating = rating;
}

function FilmLibrary(){
    this.films = [];

    // add new Film
    this.addNewFilm = film => this.films.push(film);

    // sort films by date
    this.sortByDate = () => {
        const sortFilms = this.films.filter(f => f.date !== undefined).sort((f1, f2) => f1.date.isAfter(f2.date));
        this.films.filter(f => f.date === undefined).forEach(f => sortFilms.push(f));
        return sortFilms;
    };

    // delete film
    this.deleteFile = (filmID) => {
    };

}

const f1 = new Film(1, 'Pulp Fiction', true, dayjs('2022-3-10'), 5);
const f2 = new Film(2, 'Grams', true, dayjs('2022-3-17'), 4);
const f3 = new Film(3, 'Star Wars', false);
const f4 = new Film(4, 'Matrix', false);
const f5 = new Film(5, 'Shrek', false, dayjs('2022-3-21'), 3);

const Filmlib = new FilmLibrary();
Filmlib.addNewFilm(f1);
Filmlib.addNewFilm(f2);
Filmlib.addNewFilm(f3);
Filmlib.addNewFilm(f4);
Filmlib.addNewFilm(f5);

//console.log(Filmlib);
//console.log(Filmlib.sortByDate());

