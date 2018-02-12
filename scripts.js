const apiKey = "49bc2272c9e6c5fd9f31d28b35b9dbe8";
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
let genreCode, theYear, posterPath, imgUrl;

$(function () {  
  function afterGoClicked() {
    genreCode = "with_genres=" + $("#genre option:selected").val();
    if ($("#year").val() >= 1900 && $("#year").val() <= 2020) {
      theYear = "primary_release_year=" + $("#year").val();
    } else {
      theYear = 0;
      $("p.validity").html("Please enter a valid 4 digit year between 1900 and 2020.");
    }
    const theFullUrl = buildQueryString(baseAPIUrl, genreCode, theYear);
    $.getJSON(theFullUrl, afterDataLoaded);
  }
  function buildQueryString(baseUrl, genre, year){
    return baseUrl + "&" + genre + "&" + year;
  }
  function afterDataLoaded(dataObject){
    Array.prototype.map.call(document.querySelectorAll("img"), (val,i) => {
        posterPath = dataObject.results[i].poster_path;
        if(posterPath && theYear){
          imgUrl = posterBaseUrl + posterPath;
        } else {
          imgUrl = "img/placeholder.jpg";
        }
        document.getElementById("#movies").style.display = "block";
        val.setAttribute("src", imgUrl);
      });
  }
  $("#submitButton").click(afterGoClicked);
})