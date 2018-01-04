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

## Author
* Released under the [MIT License](http://spdx.org/licenses/MIT.html).
* Authored and maintained by [@justyy](https://steemit.com/@justyy) with help from contributors ([list](https://www.npmjs.com/package/hata_model/access)).
    * Email: dr.zhihua.lai@gmail.com
    * Github: [github.com/doctorlai](https://github.com/doctorlai)
    * Twitter: [doctorzlai](https://twitter.com/doctorzlai)
    * Blog: [helloacm](https://helloacm.com)
    * Blog: [codingforspeed](https://codingforspeed.com)
    * Blog: [justyy](https://justyy.com)
    * Others: [weibomiaopai](https://weibomiaopai.com)
    * Others: [rot47](https://rot47.net)
    * Others: [uploadbeta](https://uploadbeta.com)
    * Others: [isvbscriptdead](https://isvbscriptdead.com)
    * Others: [happyukgo](https://happyukgo.com)
    * Others: [propagationtools](https://propagationtools.com)
    * Others: [steakovercooked](https://steakovercooked.com)

