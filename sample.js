var hata = require('hata_model').hata;
hata.Antenna(0, 0, 30);
hata.SetFrequency(800);
hata.SetCitySize(1);
hata.SetCityType(2);
console.log(hata.GetPathLoss(0, 50, 1));