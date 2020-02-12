// ---------first-------------

let testObj = {}
testObj.prop = "test property"
console.log(testObj.prop, testObj['prop'])
testObj.pi = Math.PI
delete testObj.prop
testObj.sumOfTwo = function (x, y) {
	return x + y
}

const res = testObj.sumOfTwo("40", 150)
console.log(res, typeof res)

let newObj = {}
Object.assign(newObj, testObj)
newObj.newProp = {
	x: 10
}
console.log(newObj)

for (let key in testObj) {
	delete testObj[key]
}

let copiedObj = {
	...newObj
}

console.log(copiedObj, newObj)
copiedObj.newProp.x = 100
console.log(copiedObj.newProp, newObj.newProp)

const keysArr = Object.keys(copiedObj)
const valuesArr = Object.values(copiedObj)
const myArrObj = keysArr.concat(valuesArr)
console.log(myArrObj)

// ---------second-------------

const ConstructObject = function (objectName, objectNumber, objectString) {
	this.objectName = objectName || "noName"
	this.objectNumber = objectNumber || 0
	this.objectString = objectString || ""
	this.greet = function () {
		return `Hello ${this.objectName}!`
	}
}
const myObj = new ConstructObject()
const secondObj = new ConstructObject("test", 10, "i'm a string")
const myObjValues = Object.values(myObj)
const secondObjValues = Object.values(secondObj)
console.log(myObjValues)
console.log(secondObjValues)

// -----third part-----

const targetObj = {
	x: 1,
	y: {
		w: 'test',
		q: {
			a: true,
			b: () => console.log('useless'),
			c: {
				d: ['a', 'b', 'c']
			}
		}
	},
	z: [1, 2, 3, 4, 5]
}

const deepCopy = (obj) => {
	const copyObj = {}
	for (let key in obj) {
		if (typeof obj[key] === "object") {
			if (Array.isArray(obj[key])) {
				copyObj[key] = Object.values(obj[key])
			} else {
				copyObj[key] = deepCopy(obj[key])
			}
		} else {
			copyObj[key] = obj[key]
		}
	}
	return copyObj
}
const copiedObj = deepCopy(targetObj)
targetObj.y.q.c.d = 100
const areElementsEqual = targetObj.y.q.c.d[0] === copiedObj.y.q.c.d[0]
console.log(areElementsEqual)
console.log(copiedObj)
console.log(targetObj)