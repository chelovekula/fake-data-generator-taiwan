const NameGenerator = require('./lib/name');
const MobileGenerator = require('./lib/mobile');
const IDNumberGenerator = require('./lib/id_number');
const AddressGenerator = require('./lib/address');
const children = ["未填写", "有孩子但不在身边", "没有小孩", "有孩子且偶尔会一起住", "有孩子且住在一起"];
const house = ["已购房","和家人同住","租房","住在单位宿舍"];
const marriage = ["未婚","丧偶","离异"];
const education = ["高中及以下", "大学本科", "大专", "中专"];
const salary = ["5001-8000元","3000元以下","8001-12000元","3001-5000元"];
const randomInteger = (min, max) => {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
  }
  
module.exports = class DataGenerator {


	  
	 
	
	 constructor() {
		this.nickName = new NameGenerator();
		this.password = randomInteger(1, 99) + "D" + randomInteger(1, 99) + "F67B" + randomInteger(1, 99) + "F5F345B56F3425B6DC52BF5D9" + randomInteger(154341254687, 998564124465) + "4F2BA4BE0C2CC";
		this.phone = new MobileGenerator();
		this.height = randomInteger(162, 183);
		this.age = randomInteger(24, 62);
		this.lastModTime = "2021-" + randomInteger(4, 11) + "-" + randomInteger(1, 30),
        this.memberID = null;
		this.workCity = ["重庆"];
		this.children = children[randomInteger(0, children.length - 1)];
		this.house = house[randomInteger(0, house.length - 1)];
		this.marriage = marriage[randomInteger(0, marriage.length - 1)];
		this.education = education[randomInteger(0, education.length - 1)];
		this.salary = salary[randomInteger(0, education.length - 1)];
	}
};
