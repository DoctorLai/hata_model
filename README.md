# hata_model
Hata Propagation Model as described in https://en.wikipedia.org/wiki/Hata_model

## Installation
```
npm install hata_model
```

## Usage
```
var hata = require('hata_model').hata;
hata.Antenna(0, 0, 30);
hata.SetFrequency(800);
hata.SetCitySize(1);
hata.SetCityType(2);
console.log(hata.GetPathLoss(0, 50, 1));
```

Output:
```
160.04304435069645
```

## Tests
```
npm test
```

## Online Tool
You may also like [this tool: Free Space Path Loss Calculator with API](https://propagationtools.com/wireless/free-space-path-loss-calculator-with-api/).

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D
