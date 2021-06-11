const currentId = 0;
const movieList = [];

$ (function () {
  $ ('#add-movie').on ('submit', function (e) {
    e.preventDefault ();
    let title = $ ('#title').val ();
    let rating = $ ('#rating').val ();

    let movieData = {title, rating, currentId};
    const HTMLtoAppend = createMovieDataHTML(movieData);
    currentId++;
    movieList.push(movieData);

    $("#")
    $()
  });
});
