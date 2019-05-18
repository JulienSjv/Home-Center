import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../themoviedb.service';
import { FilmService } from '../film.service';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private movieName: String;
  private movies: any;
  private films;
  private categories: any;
  private items;
  private filteredItems;
  private name;
  private total;

  constructor(private theMoviedebService: ThemoviedbService, private filmService: FilmService) {
    // IntervalObservable.create(1000).subscribe(responce =>
    // console.log(responce));
  }

  ngOnInit() {

    this.getFilms();

  }

  orderCat() {
    this.films.forEach(film => {
      var array = film.genre.split(',');

      array.sort();
      console.log(array);

      film.genre = "";
      array.forEach(gnr => {
        if (film.genre == "") {
          film.genre = gnr;
        }
        else {
          film.genre = film.genre + "," + gnr
        }
      });


    });


  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.items);
  }

  assignCopy2() {
    this.films = Object.assign([], this.films);
  }



  

  filterItem2(value) {
    if (!value) this.assignCopy2(); //when nothing has typed
    this.films = Object.assign([], this.films).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  filterItem(value) {
    if (!value) this.assignCopy(); //when nothing has typed
    this.filteredItems = Object.assign([], this.films).filter(
      item => item.genre.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }
 //this.assignCopy();//when you fetch collection from server.

 searchCat(cat) {
   this.name = cat;
   this.filterItem(cat);
 }

countCat() {
  this.films.forEach(film => {
    var array = film.genre.split(',');

    array.sort();

    array.forEach(gnr => {

      var cat = {
        name: "",
        nb: 0
      }

      cat.name = gnr;
      //console.log(cat);
      if (this.categories) {

        if (!this.arrayContains(cat, this.categories)) {
          cat.nb++;
          this.categories.push(cat);
        } else {
          this.categories.forEach(c => {
            if (c.name == cat.name) {
              c.nb++;
            }
          });
        }
      }
      else {
        this.categories = new Array();
        cat.nb++;
        this.categories.push(cat);
        //console.log(this.categories);
      }


    });

  });
  this.totalFilmCat();
}

totalFilmCat() {
  this.total = 0;
  this.categories.forEach(cat => {
    console.log(cat.nb);

    this.total = this.total + cat.nb;
    console.log(this.total);

  });

}

arrayContains(cat, tab) {
  var find: boolean;

  tab.forEach(element => {
    //console.log(element.name +" "+cat.name)
    if (element.name == cat.name) {
      find = true;
    }
  });

  if (find) {
    return true;
  }
  else {
    return false
  }

  // return (tab.indexOf(cat) > -1);
}

saveFilms() {
  this.filmService.updateFilms(this.films)
    .subscribe((res) => console.log(res));
}



getMovie(movieName) {
  this.theMoviedebService.getMovie(movieName)
    .subscribe(
      movies => {
        console.log(movies),
          this.getMovieDetails(movies.results[0].id)
      })
}

getMovieDetails(idMovie) {
  this.theMoviedebService.getMovieDetails(idMovie)
    .subscribe(
      moviesDetails => {
        this.movies = moviesDetails,
          console.log(moviesDetails);
      })
}

getFilms() {
  this.filmService.getFilms()
    .subscribe(
      films => {
        this.films = films
        console.log(films);
        this.countCat();
      }
    )
}

loadGenres() { }

getGenresSolo(name) {
  this.theMoviedebService.getMovie(name)
    .subscribe(
      genre => {
        if (genre.results.length > 0) {
          this.getGenreDetails(genre.results[0].id, name);
        }
      }
    )
}


getGenres() {

  for (let index = 0; index < this.films.length; index++) {
    const film = this.films[index];
    console.log(film.genre);
    if (film.genre == null) {
      this.theMoviedebService.getMovie(film.name)
        .subscribe(
          genre => {
            if (genre.results.length > 0) {
              this.getGenreDetails(genre.results[0].id, film.name);
            }
          }
        )
    }
  }
}

getGenreDetails(id, filmName) {
  this.theMoviedebService.getMovieDetails(id)
    .subscribe(
      genreDetails => {
        // console.log(genreDetails);
        let genre = "";

        genreDetails.genres.forEach(gnr => {
          if (genre == "") {
            genre = gnr.name;
          } else {
            genre = genre + "," + gnr.name;
          }
        });
        this.films.forEach(flm => {
          if (flm.name == filmName) {
            flm.genre = genre.trim();
          }

        });
        console.log(genre);
      }

    )

}

}
