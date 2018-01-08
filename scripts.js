const apiKey = '5d576382955ff5829fc3844390db4427';
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

$(function () {
  //After the DOM has loaded, call afterGoClicked after any time the button is clicked
function afterGoClicked() {
  //Read the selected genre id from the select boxes and save it to a variable
  //Documentation: https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/
  //Documentation: http://api.jquery.com/val/
  let genreCode = $("#genre option:selected").val();
  //Read the entered year from the text box and save it to a variable
  let theYear = parseInt($("#year").text);
  //Call buildQueryString to handle building a completeUrl
  let theFullUrl = buildQueryString(baseAPIUrl, genreCode, theYear);
  //Load the JSON from the API with completeUrl, and then call the afterDataLoaded function
  //Documentation: http://api.jquery.com/jquery.getjson/
  $.getJSON(theFullUrl, afterDataLoaded);
}
//Combine the baseUrl, genre, and year together to create a complete url with the
//right query parameters. Then return the url.
//Documentation: https://www.themoviedb.org/documentation/api/discover
function buildQueryString(baseUrl, genre, year){
  return baseURL + "&" + genre + "&" + year;
}
//Call this function with the data object that comes back from getJSON
function afterDataLoaded(dataObject){
  // All images have this base URL
  var posterBaseUrl = "https://image.tmdb.org/t/p/w500"
  //Loop over the results in the dataObject. 
  for( let i = 0; i < dataObject.length; i++){

  }
  
  //use your debugger to find the name of the property that includes the array of results. 

  //For each result:
  //Look up a corresponding img element (in order)
  let posterPath = asdf;
  //Set the img element's src tag to posterBaseUrl + the poster_path from the result movie
    $("img src") = posterBaseUrl + posterPath;
}

})