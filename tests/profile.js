const FakeDataGenerator = require('../');

let generator = new FakeDataGenerator();

const num = 999;

for (let i = 0; i < num; i++) {
	let nickName = generator.nickName.generate();
	let password = generator.password;
	let phone = generator.phone.generate(0,10);
	let height = generator.height;
	let age = generator.age;
	let lastModTime = generator.lastModTime;
	let memberID = generator.memberID;
	let workCity = generator.workCity;
	let children = generator.children;
	let house = generator.house;
	let marriage = generator.marriage;
	let education = generator.education;
	let salary = generator.salary;
	
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

