import { useEffect, useState } from "react";
import classes from './About.module.css'
export default function About() {
    
const [counter, setCounter] = useState(0)
const [username, setUsername] = useState('Hamada')
// const [product, setProduct] = useState(
//     {title: 'iphone', price: 40000, count: 3, onSale: true})


// Component Did Mount

    // useEffect(() => {
    //   console.log("About Component did mounted");
    // //   call API
    // }, [])
    
    // When we put useEffect here in the did mounted, it will execute two time one because it's existed in the parent & second in the about component.

    // Component Did Update

    // useEffect(() => {
        
    //     if (counter == 0) return

    //     console.log("About Component did update, Counter:", counter);
    //   }, [counter])

    //   useEffect(()=>{

    //     if (username == 'Hamada') return

    //     console.log("About Component did update, UserName:", username);

    // }, [username])

    // Component Will Unmount

    useEffect(()=>{
    
    return ()=>{
    
    console.log("About Component will unmounted");
    }

    }, [])

    // useEffect(()=>{
    //     console.log("About Component did update");
    //     // setCounter(counter+1)
    // }, [])

    
    useEffect(()=>{

    // Component Will mount

        console.log("About Component Did Mount");
        
        const idx = setInterval(() => {
            console.log('Hiiii');
            
        }, 1000);

    // Component Will Unmount

        return ()=>{
        clearInterval(idx)
        console.log("About Component Will UnMount");
        }
        
        }, [])

    // useEffect(()=>{

    //     // if (counter == 0 && username == 'Hamada') return;

    //     if (counter != 0){
    //     console.log("About Component did update, Counter:", counter);
    //     }

    //     if(username != 'Hamada'){
    //     console.log("About Component did update, UserName:", username);
    //     }
    // }, [counter, username])

      // When we need to make update, we will use the update without array & if we need to trigger specific thing we will use the array.

      // I don't need the message to appear from first time, so, We will make if condition.

      // We can make the two useEffects for username & counter in one useEffect but the best is to make each one in a separate useEffect.

      // If we make the two username & counter in one useEffect with one condition, the two messages will appear in the same time so, we need to make everyone in a condition or make everyone in a single useEffect. 
      
      // If the useEffect for the same things we can make one useEffect.

      // In the did will unmount the component will unmount is happened before creating or making the component while component will mount & update is happened after making the component, the mount component is appeared & the did mount update is appeared after updating.

      // The JSX code is happened before Component Did Mount.

      // In the API calling we will call it in the component did mount as we use the loader in the JSX then stop this loading in the useEffect after calling the API & take the new data then put it in the DOM by Component Did Update.

      // When increase the count & need to alert message that the count is increased successfully so, we use component Did Update.

      // When we need to change the data by another data in for example input search so, we use update component & will put the input search in the array as a dependency.

      // If we need to delete component so, we use component will unmount so, we put dependency on the child component.

    //   Don't make setCounter in useEffect with or without array because it will be in an infinite loop because set state is rendering the component so, every time it will re-render the component. don't use set state in the useEffect as it will re-render the component.

    // useEffect(()=>{

    //     console.log("About Component did update");
    //     setCounter(counter+1)
    // })

    // We can mix component did mount with component will unmount.

    // In API calling in the backstage there are three things happened like promises, add event listener "DOM", timeout & time interval, there are happened in web APIs & we can use them in the component will mount & by component will unmount we use the clear interval to cleanup the code, because without the cleaning when the component is deleted the code will execute as it's in time interval state, setting with time.

    // In Set interval we make a variable to put it in clear interval as returning & we make cleanup in the will umount component if we have set interval or API calling we make unsubscribe to not calling in the background because if we access the product & then to the brands, in the network, it will be working so, we use component will unmount & make unsubscribe to stop calling for the performance

    return(
        <div id="about">
            {console.log('ay 7aga')}
            <h1>About Component</h1>
            {/* <h2 className="bgTest">counter: {counter}</h2> */}
            <h2 className={classes.bgTest}>counter: {counter}</h2>
            <h2>Username: {username}</h2>
            <button onClick={()=> setCounter(counter + 1)}>Increment</button>
            <button onClick={()=> setUsername("Ahmed")}>Change Username</button>
            {/* <h2>Product Title: {product.title}</h2>
            <h2>Product Price: {product.price}</h2>
            <h2>Product Count: {product.count}</h2>
            <h2>Product On Sale: {product.onSale.toString()}</h2> */}
        </div>
    );
}

// useState return function & number

// Counter: variable

// setCounter: function that change in the variable

// The way to define variables are to make like useState with initial value, value & setValue, that change the value.

// like we did const counter = 10 now it will be created like use state.

// We just declared by use state, but the display is inside return code, if you need to call useState in the JSX code that transfer to HTmL & inside return we will make {} because we need to write pure javaScript.

// We should access anything like title or price or count or onSale don't write product only it'll get an error as it's an object. 

// On Sale is not displayed as it's getting true or false so, we need to covert it to string by toString() method.

// {} curly brackets & name of variable is called binding