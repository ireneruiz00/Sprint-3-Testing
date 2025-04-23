// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(movie => movie.director)
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 return movies.filter(movie => movie.director === director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let directorMovies = movies.filter(movie => movie.director === director)

  let totalScore = directorMovies.reduce((total, currentMovie) => {
    return total + ( typeof currentMovie.score === 'number' ? currentMovie.score : 0 )
  }, 0)

  return Number((totalScore / directorMovies.length).toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let moviesTitles = movies.map(movie => movie.title)
  
  let moviesSorted = moviesTitles.toSorted()

  return moviesSorted.slice(0, 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  return movies.toSorted((a, b) => {

    return (a.year !== b.year) ? a.year - b.year : a.title.localeCompare(b.title)

  })
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let genreMovies = movies.filter(movie => movie.genre.includes(genre))

  if (genreMovies.length === 0) return 0

  let totalScore = genreMovies.reduce((total, movie) => {return total + parseFloat(movie.score)}, 0)

  let averageScore = totalScore / genreMovies.length
  return Number(averageScore.toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  return movies.map((movie) => {
    const duration = movie.duration
    
    let minutes = 0
    
    const hoursMatch = duration.match(/(\d+)h/)
    const minutesMatch = duration.match(/(\d+)min/)
 
    if (hoursMatch) minutes += parseInt(hoursMatch[1]) * 60
    if (minutesMatch) minutes += parseInt(minutesMatch[1])
 
     return { ...movie, duration: minutes }
   }
  ) 
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
