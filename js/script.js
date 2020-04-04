var x = 2 // var - Function Scope
console.log(typeof x)
printX()
function printX() {
  var x = 'search'
  console.log(typeof x)
}
console.log(typeof x)

//let x = 2 
//error: unknown: Identifier 'x' has already been declared (6:4)
let y = 3 // let - Block Scope (within curly braces)

console.log( x)
console.log(typeof x)
console.log( x)
console.log(typeof y)

//console.log(data)
//data = 1
//error: Uncaught ReferenceError: Cannot access 'data' before initialization
const data = {
  message: 'Hello world'
}

$('#msg').html(data.message)

console.log(typeof data) //prints object type
console.log(data) //prints object
console.log(data.message) //prints object property
console.log(typeof data.message) //prints property type
//data = {} //errors because object data is a constant
//error: Uncaught TypeError: Assignment to constant variable.

function changeProperty() {
  data.message = 1
  console.log(data.message) //prints object property
  console.log(typeof data.message) //prints property type
  //data = {} //will error only when function called
  //console.log(typeof data) //prints object type
  //console.log(data) //prints object
  //error: Uncaught TypeError: Assignment to constant variable.
}

console.log(typeof data) //prints object type
console.log(data) //prints object
console.log(data.message) //prints object property
console.log(typeof data.message) //prints property type

changeProperty()

console.log(typeof data) //prints object type
console.log(data) //prints object
console.log(data.message) //prints object property
console.log(typeof data.message) //prints property type

data.message = 'World  Hello' 

console.log(typeof data) //prints object type
console.log(data) //prints object
console.log(data.message) //prints object property
console.log(typeof data.message) //prints property type

//immutable

function printData() {
  var data = 'search'
  console.log(typeof data)
  console.log(data)
  data + ' me'
  console.log(data)
  data += ' me'
  console.log(data)
  console.log(data.length)
  console.log(data.charAt(9)) //last index 8 not 9. Nothing in 9
  console.log(data.charAt(7))
  console.log(data.indexOf('m'))
  console.log(data.indexOf('e')) //first e in 'search me'
  console.log(data.indexOf('h m')) //first 'h m' in 'search me'
  console.log(data.indexOf('h k')) //(-1) first 'h k' does not exists in 'search me'
  console.log(data.replace('search', 'you search')) //does not affect data value
  console.log(data.toUpperCase())
  console.log(data.toLowerCase())
}
printData()

var bool = false

console.log(bool)
console.log(typeof bool)

if(bool){
  console.log('condition was true')
}

bool = true

console.log(bool)
console.log(typeof bool)

if(bool){
  console.log('condiyion was true')
}

bool1 = false
console.log(bool1)
bool2 = true
console.log(bool2)

console.log(bool1 & bool2) //AND notice 0
console.log(bool1 | bool2) //OR notice 1
console.log(bool1 && bool2) //AND notice false (andAlso or orElse)
//short circuit operator for performance optimization

var o 

//var propA = o.PropA
//error: Uncaught TypeError: Cannot read property 'PropA' of undefined

var propA = o && o.PropA

o = {propA: 'some value'}
console.log(o.propA)

console.log(1 == 1) //only checking for the value not the type
console.log(1 === 1) //safest expression? check for values also for data type
console.log(1 == 'o.propA') //FALSE; different value
console.log(1 == '1') //TRUE; same value, different type
console.log(1 === '1') //FALSE; same value but different type
console.log(1 != 1) //FALSE;
console.log(1 !== 1) //FALSE;
console.log(1 != 1) //FALSE;

arr = []
console.log(arr)

arr.push(1)
arr.push('string')
arr.push(false)
console.log(arr)

arr[4] = 'skip'
console.log(arr) //notice undefined

arr[100] = '100'
console.log(arr)
console.log(arr.length)

for(var i = 0; i < arr.length; i++){
  console.log(arr[i])
}

for(var item of arr){ // of
  console.log(item)
}

for(var item in arr){ // in
  console.log(item)
}

arr.forEach(val => {console.log(val)}) // looping through each value in an array and do something to it
arr.reverse()

// => arrow function
arr.forEach(val => {console.log(val)})

arr = [1,4,2,3,56,7,5]

arr.forEach(val => {console.log(val)})

arr.filter(val => {console.log(val > 5)})

arr = ['book','ease','eye']

arr.filter(val => {console.log(val.indexOf('o') >= 0)})

arr.map(val => {console.log(val+' rat')})

var obj = {}
obj = {a:1, b:'1', c:function(){"console.log('inside c')"}}
console.log(obj.a)
console.log(obj['a'])
console.log(obj.a === obj['a']) // same value and type
console.log(obj.a == obj['b']) // same value and diff type
console.log(obj.a === obj['b']) // same value and diff type

console.log(obj.c)
console.log(obj.c())

class Rectangle{
  constructor(width,height){
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height
  }
}

var r1 = new Rectangle(10,20)
console.log(r1.area)
console.log(r1.area())
