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
})
