// destructuring
// let names = ['anna','harry','albert']
// let a = names[0]
// let b = names[1]
// let c = names[2]
//
// let names = ['anna','harry','albert']
// let [a,b,c] = names;
// console.log(a,b,c);
//
// let a;
// let b;
// let c;
// let names = ['anna','harry','albert']
// [a,b,c] = names;
// console.log(a,b,c)
//
// let names = ['anna','harry','albert']
// let  [,,name3] = names;
// console.log(name3);
//
// let names = ['anna','harry','albert']
// let [name1,name2,name3 = 'anonim',name4 = 'anonymous'] = names;
// console.log(name3,name4);

// spread
// let names = ['anna','harry','albert']
// let newNames = [...names]
// console.log(names)
// console.log(newNames)

// rest operator
// let names = ['anna','harry','albert']
// let [name1 , ...other] = names;
// console.log(name1,other)
//
// let names = ['anna','harry','albert', 'jack','nick']
// let lastName = names[names.length - 1]
// console.log(lastName)

// let obj = {
//     name : 'diana',
//     age: 20,
//     skills: ['js','react']
// }
// let {age, name, skills:[skill1,skill2]} = obj;
// console.log(age,name,skill1,skill2)

// поверхностное копирование (spread operator)
// let obj1 = {
//     name : 'diana',
//     age: 20,
//     skills: ['js','react']
// }
// let obj2 = {...obj1};
// obj2.skills.push('html/css')
// obj2.name = 'kush'
// console.log(obj1)
// console.log(obj2)

// глубокое копирование
// JSON.stringify() - переводит в строку
// JSON.parse - переводит в объект
// let obj1 = {
//     name : 'diana',
//     age: 20,
//     skills: ['js','react']
// }
// let obj2 = JSON.parse( JSON.stringify(obj1))
// console.log(obj2)

// let str = 'Albert Einstein';
// let [a,l,b,e,r,t,...kushbekov] = str;
// console.log(a,l,b,e,r,t,kushbekov)

// let str = 'Albert Einstein';
// let info = str.split(' ');
// let [firstName,lastName] = info;
// console.log(firstName,lastName)

// function checkTask(fullName){
//     [firstName,,,titul] = fullName;
//     console.log(firstName,titul)
// }
// checkTask(["Julius", "Caesar", "Consul", "of the Roman Republic"] )
//
// function checkTask(fullName){
//     let checkTask = 'Albert Einstein';
//     let [firstName,lastName] = fullName;
//     console.log(firstName,lastName)
// }
//
// function checkTask(fullName){
//     let str = fullName.split(' ')
//     let [firstName,lastName] = str
//     let obj = {firstName,lastName}
//     console.log(obj)
// }
// checkTask('Albert Einstein')


// function checkTask(obj){
//     let {name,surname,age} = obj;
//     console.log(name,   surname,age)
// }
// checkTask({name: 'Петр', surname: 'Петров', age: '20 лет'})

// function checkTask(obj){
//     let {hello,apple, ...rest} = obj;
//     console.log(rest)
// }
// checkTask({ hello: 'World', apple: 'iPhone', java: 'script' } )

// function checkTask(a,b){
//     [b,a] =[a,b]
//     console.log(a,b)
// }
// checkTask(0,1)

// function checkTask(arr){
//     [,elem2 = 'bbb',elem3 = 'eee'] = arr
//     console.log(elem2,elem3)
// }
// checkTask(['первый', 'второй', 'третий'] )

// function checkTask(obj){
//     let {hobbies:[hobby1,hobby2]} = obj;
//
//     console.log(hobby1,hobby2)
// }
// checkTask( {name: 'Jack', age: '22', hobbies: ['football', 'swimming']})

// function checkTask(obj){
//     let {name,surname,age = '? лет'} = obj;
//     console.log([name,surname,age])
// }
// checkTask({name: 'Петр', surname: 'Петров', })
// let person = {}
// function checkTask(info){
//     [name,surname,age] = info;
//     person = {name : name,surname : surname,age : age}
//     console.log(person)
// }
// checkTask(['Sam', 'Christenson', 22])

// function checkTask(obj){
//     let {name = 'Aibek',age = '99'} = obj;
//     console.log(name,age)
// }
// checkTask( {name: 'John', age: '22', })
// let n;
// let s;
// let a;
// function checkTask(person) {
//     [name] = person
//     n = person
//     [surname] = person
//     s = person
//     [age] = person
//     a = person
//     console.log(name, surname, age);
// }
// checkTask(['name','surname','age'])
// const object1 = {
//     a: 'somestring',
//     b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }
// function checkTask(obj){
//  for (let [key,value] of Object.entries(obj)){
//      if (value > 25){
//          console.log(key)
//      }
//  }
// }
// checkTask({"Sam": 22,"Kate": 28,"Luck": 16})

// function checkTask(obj){
//     let {size:{width,height}, items:[cake,donut],extra} = obj
//     console.log(width)
//     console.log(height)
//     console.log(cake)
//     console.log(donut)
//     console.log(extra)
// }
// checkTask({ size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true})
// TASK 15
// function checkTask(arr){
//     for (let value of arr){
//         for (let elem of value){
//             // console.log(elem)
//             let [num1,num2,num3] = value;
//             console.log(`первое - ${num1}, второе - ${num2}, третье - ${num3}`)
//             break
//         }
//     }
// }
// checkTask([[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]])
// extra task 1
// function checkTask(obj){
//     let {name,years = 'age', isAdmin = 'false'} = obj
//     console.log(name)
//     console.log(years)
//     console.log(isAdmin)
// }
// checkTask({ name: "Mike", years: 43 })


// let newArr = []
// function checkTask(employee){
//     let [name,surname,department,position,salary] = employee;
//     newArr =employee
//     console.log(newArr)
// }
// checkTask(["John", "Jones", "it dept", "developer", 3000])

// function checkTask(firstName, lastName, age){
//     [firstName,lastName,age] = [lastName,age,firstName];
//     console.log(firstName,lastName,age)
// }
// checkTask(32,'Michael','Jackson')

// function checkTask(arr){
//     let [,,...rest] = arr;
//     let newRest = rest.reduce((num1,num2) => num1 + num2)
//     console.log(newRest)
// }
// checkTask([1, 2, 3, 4, 5, 6])

// function checkTask(person){
//     let {name,age,dog:{...rest}} = person;
//     let {dogName,dogAge} = rest
//     console.log(dogName,dogAge)
// }
// checkTask({name: 'Patrick', age: '22', dog: {dogName: 'Hachi', age: 2}})


// let a;
// let b
// function checkTask(first, second) {
//     let {a ='first', b = 'second'} = [first,second]
//     console.log(first,second)
// }

// function checkTask(arr){
//   let [num,[num1[[[num2,num3], num4], num5]]]
//     console.log(num,num1,num2,num3,num4,num5)
// }
// checkTask([1, [2, [[[3, 4], 5], 6]]])
