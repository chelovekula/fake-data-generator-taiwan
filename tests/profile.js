const FakeDataGenerator = require('../');

let generator = new FakeDataGenerator();

const num = 999;

for (let i = 0; i < num; i++) {
	let nickName = generator.nickName.generate();
	let password = generator.password.generate();
	let phone = generator.phone.generate(0,10);
	let height = generator.height.generate();
	let age = generator.age.generate();
	let lastModTime = generator.lastModTime.generate();
	let memberID = generator.memberID.generate();
	let workCity = generator.workCity.generate();
	let children = generator.children.generate();
	let house = generator.house.generate();
	let marriage = generator.marriage.generate();
	let education = generator.education.generate();
	let salary = generator.salary.generate();
	
	let record = {
	"nickName": nickName,
	"password": password,
	"phone": phone,
	"height": height,
	"age": age,
	"lastModTime": lastModTime,
	"memberID": memberID,
	"workCity": workCity,
	"children": children,
	"house": house,
	"marriage": marriage,
	"education": education,
	"salary": salary,
	}

	console.log(record);
}

