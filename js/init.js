document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "d15ae70f9151c340d0ee35ac88e97aed";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/29.7575,-95.3668?exclude=currently,minutely,daily";
  var ctx = document.getElementById("HoustonWeatherChart").getContext("2d")


  // makeRequest(URL, function(json) {
  //   var data = generateDataSet(getHours(json), getFahrenheits(json));
  //   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });

   makeRequest(URL, ctx);
});