import React, { useEffect } from 'react'

export default function Child(props) {
    console.log(props);
    const {title, count, price, onSale, id} = props.productInfo
    const {index} = props 
    // You get the index as props to use it as an argument in the increment button

    //Update
    
    useEffect(()=>{
      console.log("counter did updated");
    }, [count])

// Counter Did Updated is making update first time without any change & in any change it's updated but we shouldn't put empty array.

// Now it will update all of thing, if we need to trigger the count only we will use the array, this array is called dependencies.

// The array "dependencies" will make the update.

  return (
    <div className="col-lg-4">
        <div className='bg-warning position-relative'>     
        <i className='fa fa-laptop'></i>
        {/* <h3>Title: {props.productInfo.title}</h3> */}
        {/* <p>Count: {props.productInfo.count}</p> */}
        {/* <p>Price: {props.productInfo.price}</p> */}
        <h3>Title: {title}</h3>
        <p>Count: {count}</p>
        <p className= {price > 3000 ? 'text-primary' : 'text-danger'}>Price: {price}</p>
        {
            // onSale === true ? <span className='bg-danger position-absolute p-2 top-0 end-0'>Sale</span> : null
            // onSale ? <span className='bg-danger position-absolute p-2 top-0 end-0'>Sale</span> : null
            onSale && (<span className='bg-danger position-absolute p-2 top-0 end-0'>Sale</span>)
        }
        <button 
        // onClick = {props.delete}
        onClick = {()=>props.delete(id)}
        className='btn btn-outline-danger'>
          <i className='fas fa-trash'></i>
        </button>
        <button 
        // onClick = {props.increment}
        // onClick = {()=>props.increment(index)}
        onClick = {()=>props.increment(props.productInfo)}
        className='btn btn-outline-success mx-2'>
          <i className='fas fa-edit'></i>
        </button>
        <button 
        onClick = {()=>props.dec(index)}
        className='btn btn-outline-primary mx-1'>
          <i className='fas fa-edit'></i>
        </button>
        </div>
</div>
    
  )
}

// The props before return It sees the counter that it is equal x = 0 as an object, so, we need to display it in the div after return by props.variable that has the name x or y whatever what it is name.

// Props is coming as an object.

// You can destructing the data by making const {x, y} = props instead of making props. in every step in the dives.

// We here display the columns of the row div that comes from parent.

// At this time we need to send an array here it will not get it as the props are coming in a form of objects & the destruction here in a form of object, so, in the parent component we will make map method to use the array & pass it here.

// I can't write if condition or for loop in the curly brackets we should use another methods like ternary operators or filter or map or etc..

// We need to make a condition if the on sale is true put span sale with background danger, if not so, make it null & we can write without true as it's already true & called truce & falsy value.

// We can make && only without ternary operator as the whole div return true.

// If I need the prices that are greater than 3000 by color & less than 3000 by another color makes ternary operator like that & access the price by curly bracket: <p className= {price > 3000 ? 'text-primary' : 'text-danger'}>Price: {price}</p>

// Any functions we need to make we go to parent as the parent for functions because we have the array at the parent we can't make for example splice from the array here we should go to the parent as the parent have the array.

// We will get the delete in the button as props & write the onClick by camel case not small letters like HTML as we write JSX code.

// We should get the id from the parent component as props as we need it in the calling of the function as an argument.

// By the new way we will call it here by a function & inside the function we will receive it as a props.

// const age = 80

// const username = 'Hamada'

// age && username

// && return the last true value 


