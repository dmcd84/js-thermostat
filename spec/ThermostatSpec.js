describe("Thermostat", function(){
  var thermostat;
  // var Thermostat = require('../lib/Thermostat');

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("returns the starting temperature", function(){
    expect(thermostat.temperature).toEqual(20);
  });
  it('increases the temperature by 1', function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases the temperature by 1', function(){
    thermostat.down()
    expect(thermostat.temperature).toEqual(19);
  });

  it('decreases the temperature by 15', function(){
    expect(function(){for (var i = 0; i < 15; i++) {thermostat.down()}; }).toThrowError('Minimum of ' + thermostat.MINIMUM_TEMPERATURE + ' degree reached. Temp set to min.');
    expect(thermostat.temperature).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });

  it('has power save mode on by default', function(){
    expect(thermostat.inPowerSaveMode()).toBeTruthy();
  });

  it('resets temperature to default value', function(){
    for (var i = 0; i < 5; i++) {thermostat.up();}
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  describe('energy usage', function(){

    it('returns low-usage', function(){
      for (var i = 0; i < 5; i++) {thermostat.down();}
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('returns medium-usage', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('returns high-usage', function(){
      for (var i = 0; i < 5; i++) {thermostat.up();}
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });

  describe('if power save mode is on', function(){
    it('has a maximum temperature of 25', function(){
        for (var i = 0; i < 5; i++) {thermostat.up();}
      // expect(function(){ thermostat.up(); }).toThrowError('Maximum temperature of 25 reached for Power Saving Mode');
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('if power save mode is off', function(){
    it('has a maximum temperature of 32', function(){
      thermostat.changePowerMode();
      for (var i = 0; i < 12; i++) {thermostat.up();}
      // expect(function(){ thermostat.up(15); }).toThrowError('Maximum temperature of 32 reached');
      expect(thermostat.temperature).toEqual(32);
    });
  });
});
