
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function() {
    thermostat.changePowerMode();
    $('#power-saving-status').text(updatePowersaving());
    updateTemperature();
  });

  // $('#status').on('click', function(){
  //   alert(JSON.stringify(thermostat));
  // })

  function updatePowersaving() {
    switch(thermostat.powerSaveMode) {
      case true:
        return 'On';
      case false:
        return 'Off';
    }
  }

    function updateTemperature() {
      $('#current_temp').text(thermostat.getCurrentTemperature());
      $('#current_temp').attr('class', thermostat.energyUsage());
    }

    // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    //   $('#current-temperature').text(data.main.temp);
    // })

    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var key = '&appid=3d706d9da7f2eabc337cf111e57da4e5';
      var units = '&units=metric';
      $.get(url + units + key, function(data) {
        $('#current-temperature').text(data.main.temp);
      });
    }

    // $('select-city').submit(function(event) {
    //   event.preventDefault();
    //   var city = ('current-city').val();
    //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3d706d9da7f2eabc337cf111e57da4e5&units=metric', function(data) {
    //     $('current-temperature').text(data.main.temp);
    //   })
    // });

    displayWeather('London');
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      console.log(city)
      displayWeather(city);
    })

});
