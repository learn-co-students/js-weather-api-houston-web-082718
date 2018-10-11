const API_KEY = 'af140bd104025db315bc9f6e5c1931ca';


document.addEventListener('DOMContentLoaded', function () {
  var API_KEY = "af140bd104025db315bc9f6e5c1931ca";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  let URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/29.7604,-95.3698?exclude=currently,minutely,daily,alerts,flags";
  var ctx = document.getElementById("HOUWeatherChart").getContext("2d")


  makeRequest(URL, function (json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    let tempChart = new Chart(ctx, data);
  });
});