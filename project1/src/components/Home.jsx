import React from "react";

export default function Home() {
    
    return(
        <React.Fragment>
            <label htmlFor="fname">Fname</label>
            <input type="text" name="" id="fname" />
            <h1 className="text-danger"><i className="fas fa-home"></i> Home</h1>
            <p className="bg-black text-white">Hi</p>
        </React.Fragment>
        // <div id="home">
        //     <h1>Home Component</h1>
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit voluptate ratione, doloribus ut deserunt architecto sunt amet aut magnam perferendis atque molestiae placeat, nihil pariatur recusandae laborum ipsam quas.</p>
        // </div>
    );
}

// We can call the home components more than one time.

// We have only one export default & we can't make the curly brackets but export only we make the curly bracket.

// We can't write anything after return as we took before.

// Return one thing like string, number, array or object.

// Don't return h1 & paragraph so,if you want to return more than one thing put div as parent.

// Don't put <div></div> in a separate line as when it sees return it doesn't see anything after.

// If you want div in a separate line makes () inside the return & put the opening bracket beside the return, but if we make brackets also we need the parent div.

// If we need a lot of dives & we don't need to make div as a parent so, make react.fragment or empty tag <>

// If we use react fragment, we need to import react.

// React.Fragment is like skeleton or use empty tag, we use it as if we don't wrapping the elements by div.

// IF we need to install bootstrap & font awesome we make this command: npm i bootstrap @fortawesome/fontawesome-free

// We will find the bootstrap & font awesome is installed at node modules, also, to make sure you will find these files at package.json

// We put the bootstrap & font-awesome in the main.jsx as it's the main & calling app.jsx. We write those import inside the main.jsx:
// import 'bootstrap/dist/css/bootstrap.min.css' or import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; by node modules
// import "@fortawesome/fontawesome-free/css/all.min.css"

// Any thing inside the return function is like the HTML not html code.

// It's mix between JS & XML, it returns JSX.

// The concept is:

// let blackBox = `<h1>hi</h1><p>hello</p>`
// const ele = document.createElement('h1') make this tag <h1></h1>
// ele.classList.add('text-danger')
// ele.createTextNode('hi') between tags
// document.body.append(ele) to put element inside the body, open tag body & put hi

// JSX is existed to write like HTML code, it doesn't mean class it uses className as it's javaScript not HTML.

// Also in the label tag there is for don't write for directly as it's for loop but it's called htmlFor

// Don't name the file with js as vite doesn't read js it reads jsx or tsx.

