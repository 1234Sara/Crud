// function demo(val){

//     let intialValue = val; //10

//     function setValue(value){
//         intialValue = value //10 xxx 20
//     }
//     setValue(val) //10

//     // return {x: intialValue, y: setValue}

//     return [intialValue, setValue]
// }

// // demo(10)

// const [value, setValue] = demo(10)

// setValue(20)

// function outer(x) {
//     let hamada = x; //10

//     function inner(y) {
//        hamada = y;  //10
//     }

//     inner(x)

//     // return hamada

//     // return inner

//     return [hamada, inner]
// }

// const [value, setValue] = outer(10)

// value = 10
// setValue(3000)

// outer(10)

// const data = outer (10)

// data() // closure to call a full function 

// Closure from expression function:

// const data = function inner(y){
//     hamada = y;
// }
// data()

// Demo function return array like intial value & set value function so, when we call demo the return line is replaced the demo calling function We need to destruct the demo function.

// When we call demo function it takes the value 10 & put it inside the val then intialValue = val = 10. 

// And in the function setValue it takes the same value as setValue calls val that is equal = 10 so, the value parameter = 10 as intial value = value so, it will be 10, so, val is the focal point inside the demo function & the calling of setValue.

// If I need to change the value I will change it from setValue, so, If I need to change the value of value I will change it from setValue.

// The function can return two value.

// Destructing:

// const user = {
//     name: 'Ahmed',
//     age: 30,
//     wife: {
//         name: 'wafaa',
//         son: {
//             name: 'hamada',
//             age: 3
//         }
//     }
// }

// const {name, age} = user.wife.son

// const product = ['Toshiba', 2024]

// const [pName, pYear] = product


