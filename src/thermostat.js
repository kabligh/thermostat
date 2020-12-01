'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  }

  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      throw Error('10 is the minimum temperature');
    }
    this.temperature -= 1;
  };

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

};
