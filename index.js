'use strict';

const compute_lu = (f, hb, hm, d, citysize) => {
	let ch = 0;
	switch (citysize) { // 0 - small, 1 - big
		case 0: ch = 0.8 + (1.1 * Math.log10(f) - 0.7) * hm - 1.56 * Math.log10(f); break;
		case 1: {
			if ((f >= 150) && (f <= 200)) {
				ch = 8.29 * Math.pow(Math.log10(1.54 * hm), 2) - 1.1;
			} else if ((f > 200) && (f <= 1500)) {
				ch = 3.2 * Math.pow(Math.log10(11.75 * hm), 2) - 4.97;
			}
			break;
		}
	}
	return 69.55 + 26.16 * Math.log10(f) - 13.82 * Math.log10(hb) - ch + Math.floor(44.9 - 6.55 * Math.log10(hb)) * Math.log10(d);
}

const compute_lsu = (lu, f) => {
	return lu - 2 * Math.pow(Math.log10(f / 28), 2) - 5.4;
}

const compute_lo = (lu, f) => {
	return lu - 4.78 * Math.pow(Math.log10(f), 2) + 18.33 * Math.log10(f) - 40.94;
}

var hata = (function(){
	// default WIFI 2.4 GHz
	var frequency = 2400;
	// default Antenna (0, 0, 0)
	var _x = 0;
	var _y = 0;
	var _z = 0;
	// city size (0 - small, 1 - big)
	var citysize = 0;
	// type, default to urban
	var type = 0;

	function setUrban() {
		type = 0;
	}
	
	function setSuburban() {
		type = 1;
	}

	function setRural() {
		type = 2;
	}

	function getCitySize() {
		return citysize;
	}

	function setCitySize(v) {
		citysize = v;
	}
	
	function setAntenna(ax, ay, az) {
		_x = ax;
		_y = ay;
		_z = az;
	}
	
	function setFreq(f) {
		frequency = f;
	}

	function getFreq() {
		return frequency;
	}

	function getDist(x1, y1, z1, x2, y2, z2) {
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) + (z1 - z2) * (z1 - z2));
	}

	var getPathLoss = function(x, y, z) {
		// Height of base station antenna. Unit: meter (m)
		let hb = _z;
		// Height of mobile station antenna. Unit: meter (m)
		let hm = z;
		let d = getDist(x, y, z, _x, _y, _z);
		let lu = compute_lu(frequency, hb, hm, d, citysize);
		switch(type) {
			case 1: lu = compute_lsu(lu, frequency); break;
			case 2: lu = compute_lo(lu, frequency); break;
		}
		return lu;
	}

	return {
		Antenna: function(x, y, z) {
			setAntenna(x, y, z);
		},

		SetFrequency: function(f) {
			setFreq(f);
		},

		SetCitySize: function(v) {
			setCitySize(v);
		},

		SetCityType: function(v) {
			switch(v) {
				case 0: setUrban(); break;
				case 1: setSuburban(); break;
				case 2: setRural(); break;
			}
		},

		GetFrequency: function() {
			return getFreq();
		},

		GetDist: function(x, y, z) {
			return getDist(x, y, z, _x, _y, _z);
		},

		GetPathLoss: function(x, y, z) {
			return getPathLoss(x, y, z);
		}
	};
})();

module.exports = {
	compute_lo, compute_lu, compute_lsu, hata
}

