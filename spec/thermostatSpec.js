'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('has a starting temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('can be increased with an up function', function(){
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('can be decreased with an down function', function(){
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a minimum temperature of 10', function() {
    for (var i = 20; i > 10; i--) thermostat.down();
    expect(function(){ thermostat.down(); } ).toThrow(new Error('10 is the minimum temperature'));
  });
  it('is in power saving mode by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can switch power saving mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('can switch power saving mode back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 in power saving mode', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
      // expect(function(){ thermostat.up(); }).toThrow(new Error('Power saving mode: 25 is max temperature'));
    });
  });

  describe('when power saving mode is off', function() {
    it('has a max temp of 32', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
})
