import React from 'react'
import { useState, useEffect } from 'react'
import Child from './Child'
export default function Parent() {

    // const [product, setProduct] = useState(
    //     {title: 'iphone', price: 40000, count: 3, onSale: true}
    // )
    
    const [products, setProducts] = useState(
        [
            {id: 3553, title: 'iphone', price: 40000, count: 3, onSale: true},
            {id: 67, title: 'samsung', price: 4000, count: 3, onSale: false},
            {id: 6565, title: 'oppo', price: 4000, count: 30, onSale: true},
            {id: 7645, title: 'htc', price: 1000, count: 3, onSale: false},
            {id: 8786, title: 'samsung', price: 3000, count: 3, onSale: false},
            {id: 67877, title: 'iphone 15', price: 4000, count: 3, onSale: false}, 
        ]);
        
        const [username, setUsername] = useState('ahmed')
        // This is old way by: Index

        // function deleteProduct(index){
        //     console.log('delete', index);
        //     // products.splice(index, 1)   // We will not make that like we did before.
        //     // Three Steps we should make 
        //     // 1- Copy from state 
        //    const newProducts = [...products]
        //     // 2- Action like here delete 
        //     newProducts.splice(index, 1)    
        //     // 3- Set the state with new array 
        //     setProducts(newProducts)
        // }

        function deleteProduct(id) {
            // console.log('delete', id);
        // 1- Copy from state 
           let newProducts = [...products]
            // 2- Action like here delete 
            newProducts =  newProducts.filter((product) => product.id !== id)    
            // 3- Set the state with new array 
            setProducts(newProducts)
        }   

        // This is old way by: Index

        // function incrementCount(idx) {
        // // console.log('increment', idx);
        //    const newProducts = [...products]
        // // console.log(newProducts[idx]);
        //    newProducts[idx].count++;
        //    setProducts(newProducts)
        // }

        function incrementCount(obj) {
            // console.log(obj); // We will receive an object from useState in an array.
            // let newProducts = [...products]
            // obj.count++
            // console.log(obj);
            let newProducts = [...products]
            const index = newProducts.indexOf(obj)
            // console.log(index);
            // We need to know the index of the product.
            newProducts[index].count++
            
            setProducts(newProducts)
        }

        function decCount(index) {
            let newProducts = [...products]
            newProducts[index].count--
            setProducts(newProducts)
        }

        // Hooks
        // Did Mount

        useEffect(() => {
          console.log("Parent Component did mounted");
        }, [])

        
// Anything you put in the useEffect, it's happen one time, the first time we will enter the component, this parent component specially as we are here now.

// Counter Did Updated is making update first time without any change & in any change it's updated but we shouldn't put empty array.

// Now it will update all of thing, if we need to trigger the count only we will use the array, this array is called dependencies.

  return (
    <section className='bg-info'>
        <div>
            <div className="container">
                {/* <h2>Services</h2> */}
                <h3>username: {username}</h3>
                <button className='btn btn-primary' onClick={()=> setUsername('hamada')}>Update Name</button>

                {/* <h3 className='bg-danger'>{counter}</h3> */}
                {/* Props */}
                <div className="row gy-4">
                    {products.map((product, idx)=> 
                    <Child 
                    key={product.id}
                    productInfo = {product}
                    // delete = { ()=>deleteProduct(idx)}
                    // index = {idx}
                    delete = {deleteProduct}

                    // increment = {()=>incrementCount(idx)}
                    increment = {incrementCount}
                    // index = {idx} // another way with index you send index to the child as you need the index
                    dec = {decCount} 
                    index = {idx}
                    />)}
                    {/* <Child productInfo = {products[0]}/>
                    <Child productInfo = {products[1]}/>
                    <Child productInfo = {products[2]}/>
                    <Child productInfo = {products[3]}/>
                    <Child productInfo = {products[4]}/>
                    <Child productInfo = {products[5]}/> */}
                </div>
            </div>
        </div>
    </section>
  )
}


// We need another component to display count, so, we make child. 

// We need to send the counter variable to the child, so, we will send it by props & we should put the counter or whatever anything in a variable like x or y or any name to call it inside the child. & send it to the child by props.

// We call the child more than one time to repeat the columns.

// This time we need to send products to the child as props so we assign a variable called productInfo & send it to the child.

// We make one by object & second by array.

// We couldn't send an array as the destruction is in a form of objects, so, we will put the product [0] & repeat it more than one time, so, we will make a loop instead of repeating the components by writing one by one.

// The map is a method return a new array as I like but it move on element step by step.

// Before when we called the child & put productInfo, we were repeated a lot (<Child productInfo = {products[0]}/>). Now we used map method to return a new array back as we want: {products.map((product)=> <Child productInfo = {product}/>)}

// Products here that is from the useState, it grabs the products already then make the map and assign new name to move on the element step by step & return the products inside the child by the name product that it's assigned inside the map. Already we assign all of that by a name to pass it as a props to the child component.

// We should make functions in the place that have our data, if you need to change count or delete products or edit products or make any actions so, make it in the place that have our data even our state here in the parent.

// We will make another function and send it to the child like infoProduct.

// If you make a function function deleteProduct(index){console.log('delete', index);} you will call it like that {products.map((product, idx)=> <Child productInfo = {product} delete = {deleteProduct(idx)}/>)} 

// It will call the function directly without giving you the chance to click. We should make an anonymous function to make it by click the button.

// So, when you put the calling function in anonymous function it will be done by click the button & the index is appeared also, we can make it by arrow function.

// We can't change in the state directly. we can't make splice directly by products.

// 1- Copy from state 

// const newProducts = products

// We can't make like that because newProducts will be exactly like products so, if I make any changes the both will be like each other so, we need to take shallow copy not as a reference copy so, we will make it by spread operator like that const newProducts = [...products]

// We will take from the values that inside the products & put it in new variable like newProducts.

// 2- Action like here delete 

// We make splice from the new variable that we defined upper & delete the index that we receive it as parameters like that newProducts.splice(index, 1) We make 

// 3- Set the state with new array 

// Then we grab the newProducts that we deleted and put it inside the setProducts as it's changed the state like we did before after any step we should recall the display function in the crud JavaScript.

// We have another array method called filter as it is the best way instead of using index way specially if the data comes from backend.

// In filter we will need to return all the array except what I will select.

// By the new way we will call it directly & go to the child component then call it by a function there.

// We will make the same steps like that:

// 1- Copy from state 

// let newProducts = [...products]

// 2- Action like here delete 

// newProducts =  newProducts.filter((product) => product.id !== id)  & cause the filter is return so, we will make a variable ro receive the new array so, we will use let.

// 3- Set the state with new array 

// setProducts(newProducts)

// In the filter every iteration I have a different product by the Id selector, then check the product.id from the useState is it equal to the parameter id or not but it's wrong I need to return all the array except the one that I delete it.

// We make new function for increment the count to increase it when click the button so, we make everything like first function, take new copy, increase the count & put the index that we receive it from the parameter inside the new copy = newProducts & make count++ to increase the count when click on the button then put all of that inside the setProducts & make it like that:

// function incrementCount(idx) {
//        const newProducts = [...products]
//        newProducts[idx].count++; //this line like we did before when we grab the property then make data[i].whatever what we need to access.
//        setProducts(newProducts)
//     }

// New way: 

// const ages = [10, 30, 50, 48, 3, 30]

// const res = ages.map( (age)=> `your age is ${age}`)

// console.log(res);


const ages = [10, 30, 50, 48, 3, 30]

const res = ages.filter(function (age) {
    return age !== 50
})

console.log(res);

// Filter return array with what we need exactly so, we write a condition like age !== 50 it will return all the array except the age with 50.



