import conan from '../../assets/Images/Conan.webp'
import classes from "./Contact.module.css"

export default function Contact() {
  return (
    <>
    {/* <h2 style='color: red'>Contact</h2> */}

    {/* <h2 style={{color: "white", backgroundColor: "red"}}>Contact</h2> */}

    {/* <h2  className="test">Contact</h2> */}

    {/* <h2 className={classes.bgTest +" "+ classes.testText}>Contact</h2> */}

    <h2 className={`${classes.bgTest} ${classes.testText}`}>Contact</h2>

    {/* <img src="../assets/images/Conan.webp" alt="Conan"/> */}

    {/* Index.html */}
    {/* <img src="./src/assets/Images/Conan.webp" alt="Conan"/> */} 

    <img src={conan} alt="conan" />
    </>
  )
}

// Photo

// To display the images we need to write the path related to the index.html as the code generate from index.html

// We put the photo as a module so, we import the photo & it's rendered as the path of index.html

// CSS Style

// Style for giving color as CSS, it is like an object so, we don't use the old inline style.

// We put nested curly brackets in the style as we write object & JavaScript.

// We write inline style by camel case not like the old way with dash for two syllable.

// This is the way for writing inline style: style={{color: "white", backgroundColor: "red"}}

// If we need to write classes not inline style so, the best is to make folder for each component & CSS style for each component.

// We Should import the CSS file for working the style on it.

// Any style we give for the file is rendering as internal style under head tag in one file index.html, so, any components take same style.

// We will use the CSS style as modules to solve this issue.

// We will name the CSS file as a module to be an indicator as we use this file as a module.

// We import any name from the CSS file & bind in the classname the name that we write it in the import dot name of CSS that is existing in CSS file.

// We need to make a concate for using more than one class, so, using template literal is best for giving more spaces.

// Module way is make an encryption for the classes CSS style so, it will be unique.


