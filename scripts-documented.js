const apiKey = "5d576382955ff5829fc3844390db4427";
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

$(function () {
  //After the DOM has loaded, call afterGoClicked whenever the button is clicked
  function afterGoClicked() {
    //Read the selected genre id from the select boxes and save it to a variable
    //Documentation: https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/
    //Documentation: http://api.jquery.com/val/
    let genreCode = "with_genres=" + $("#genre option:selected").val();
    //Read the entered year from the text box and save it to a variable
    if ($("#year").val() >= 1900 && $("#year").val() <= 2020) {
      let theYear = "primary_release_year=" + $("#year").val();
    } else {
      alert("Please enter a valid 4 digit year between 1900 and 2020.");
    }
    //Call buildQueryString to handle building a completeUrl
    const theFullUrl = buildQueryString(baseAPIUrl, genreCode, theYear);
    //Load the JSON from the API with completeUrl, and then call the afterDataLoaded function
    //Documentation: http://api.jquery.com/jquery.getjson/
    $.getJSON(theFullUrl, afterDataLoaded);
  }
  
  //Combine the baseUrl, genre, and year together to create a complete url with the
  //right query parameters. Then return the url.
  //Documentation: https://www.themoviedb.org/documentation/api/discover
  function buildQueryString(baseUrl, genre, year){
    return baseUrl + "&" + genre + "&" + year;
  }
  //Call this function with the data object that comes back from getJSON
  function afterDataLoaded(dataObject){
    let posterPath, imgUrl;
    //For each result, look up a corresponding img element (in order) and set that
    //iamge's source to the poster image source (dataObject[x].poster_path)
    //Documentation: https://stackoverflow.com/questions/2600343/why-does-document-queryselectorall-return-a-staticnodelist-rather-than-a-real-ar
    Array.prototype.map.call(document.querySelectorAll("img"), (val,i) => {
        posterPath = dataObject.results[i].poster_path;
        imgUrl = posterBaseUrl + posterPath;
        val.setAttribute("src", imgUrl); 
      });
  }
  $("#submitButton").click(afterGoClicked);
})
