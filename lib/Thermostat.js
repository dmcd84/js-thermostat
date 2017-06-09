function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSaveMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.up = function(){
  if (this.isMaxTemp()) {
    throw new Error('Maximum temperature reached');
    return
  }
  this.temperature ++;
};

Thermostat.prototype.isMaxTemp = function(){
  if (this.inPowerSaveMode() === true) {
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  return this.temperature === this.MAX_LIMIT_PSM_OFF;
}

Thermostat.prototype.down = function(){
  if (this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw new Error('Minimum of ' + this.MINIMUM_TEMPERATURE + ' degree reached. Temp set to min.');
  }
  this.temperature --;
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
};

Thermostat.prototype.inPowerSaveMode = function(){
  return this.powerSaveMode;
};

Thermostat.prototype.changePowerMode = function(){
  this.inPowerSaveMode() ? this.powerSaveMode = false : this.powerSaveMode = true;
};

Thermostat.prototype.energyUsage = function() {
  switch (true) {
    case this.temperature < 18:
      return "low-usage";
    case this.temperature < 25:
      return "medium-usage";
    case this.temperature >= 25:
      return "high-usage";
  }
}

// module.exports = Thermostat;
