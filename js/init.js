document.addEventListener('DOMContentLoaded', function() {
  const API_KEY = "3c2c62b638ed629c4b5b5e00aa3e2c20";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7128,-74.0060";
  // const ctx = document.getElementById("NYCWeatherChart").getContext("2d")


  makeRequest(URL, function(json) {
    // const data = generateDataSet(getHours(json), getFahrenheits(json));
    // const tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });
});


// fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3c2c62b638ed629c4b5b5e00aa3e2c20/40.7128,-74.0060")