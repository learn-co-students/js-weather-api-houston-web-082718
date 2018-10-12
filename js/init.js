document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "5385cf1f5ce46ed64bc2a10307200f30";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7128, -74.0060";
  // var ctx = document.getElementById("NYCWeatherChart").getContext("2d")

  // makeRequest(URL, ctx)
});

// "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5385cf1f5ce46ed64bc2a10307200f30/40.7128, -74.0060"