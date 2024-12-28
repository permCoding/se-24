const getRandomName = () => {
	let alphavit = 'abcdefghqijklmnoprstuvwxyz'
	let len = 2 + Math.floor(Math.random() * 12)
	let name = ""
	for (var i=0; i<len; i++) {
		name += alphavit[Math.floor(Math.random() * alphavit.length)]
	}
    return name
}

const getRandomRate = (a=160, b=240) => {
	return a + Math.floor(Math.random() * ((b-a)+1))
}

class Generator {
    constructor() { }

	static getRandomName() {
		let alphavit = 'abcdefghqijklmnoprstuvwxyz'
		let len = 2 + Math.floor(Math.random() * 12)
		let name = ""
		for (var i=0; i<len; i++) {
			name += alphavit[Math.floor(Math.random() * alphavit.length)]
		}
		return name
	}
	
	static getRandomRate(a=160, b=240) {
		return a + Math.floor(Math.random() * ((b-a)+1))
	}
}

module.exports = {
	Generator,
	getRandomName,
	getRandomRate
}
