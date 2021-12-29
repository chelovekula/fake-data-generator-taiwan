const fs = require('fs');

module.exports = class AddressGenerator {

	constructor() {
		this.addrData = this.loadData(__dirname + '/../data/address.csv');
	}


	selectRoad() {

		let index = Math.floor(Math.random() * (this.addrData.length - 1));

		return this.addrData[index];
	}

	selectNumbers(min, max) {
		return Math.floor(Math.random() * max) + min;
	}

	selectFloor() {

		let floor = this.selectNumbers(1, 24);
		if (floor > 1) {
			return floor + '樓';
		}

		return '';
	}



	generate() {
		let road = this.selectRoad();
		return this.selectAddress(road);
	}
};
