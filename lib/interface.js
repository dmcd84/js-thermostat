
$(document).ready(function() {
  var SERVER = 'http://localhost:9292'
  var thermostat = new Thermostat();
  // updateTemperature();
  displayTemperature();
  // storeTemperature();

  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature(storeTemperature());
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature(storeTemperature());
  });

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature(storeTemperature());
  });

  $('#powersaving-on').on('click', function() {
    thermostat.changePowerMode();
    $('#power-saving-status').text(updatePowersaving());
    updateTemperature(storeTemperature());
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

    function updateTemperature(callback) {
      $('#current_temp').text(thermostat.getCurrentTemperature());
      $('#current_temp').attr('class', thermostat.energyUsage());
      callback();
    }

    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var key = '&appid=3d706d9da7f2eabc337cf111e57da4e5';
      var units = '&units=metric';
      $.get(url + units + key, function(data) {
        $('#current-temperature').text(data.main.temp);
      });
    }

    displayWeather('London');
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      console.log(city)
      displayWeather(city);
    })

    function displayTemperature() {
      $.get(SERVER + '/temperature', function(data) {
        $('#current_temp').text(data);
      });
    }

    function storeTemperature() {
      $.post(SERVER + '/temperature', {"temp":thermostat.getCurrentTemperature()});
    }

});
