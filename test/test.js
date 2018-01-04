var should = require('chai').should(),
    wireless = require('../index'),
    hata = wireless.hata;

describe('hata', function() {
  it('case 1', function() {
    hata.Antenna(0, 0, 30);
    hata.SetFrequency(800);
    hata.SetCitySize(1);
    hata.SetCityType(2);
    hata.GetPathLoss(0, 50, 1).should.be.closeTo(160.043, 1e-2);
  }); 

  it('case 2', function() {
    hata.Antenna(0, 0, 25);
    hata.SetFrequency(947);
    hata.SetCitySize(0);
    hata.SetCityType(1);
    hata.GetPathLoss(0, 50, 1).should.be.closeTo(180.323, 1e-2);
  });   
});

