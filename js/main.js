
/* LIST OF CONCEPTS
 ---- 1 will add a slide to give additional animation to the page
 ---- 2 The alert message was written in the index.html file
 ---- 3 Use the OnClick attribute in HTML to call the learnMoreButton() function and change the CSS (display)
 ---- 4 Use onmouseover and onmouseout attributes in HTML to call the functions: changeImg() and normalImg() to change the image when hovered
 ---- 5 A function to show the prompt and request the user's name and then display it with a Greetings message
 ---- 6 Use the OnClick attribute in HTLM to call the myMove() function to move the text to the right when clicked
 ---- 7 A function that will change the color of the text in the footer and will run right after the page is loaded */

//---- 1 ----//
//variables for the slide
var slideInterval = setInterval(nextSlide,2000);
var i = 0;

//This function is in charge of changing the images(slides) for the slider
function nextSlide() {
    var slides = document.querySelectorAll(".slide");//array
    slides[i].className = "slide";
    i = (i+1)%slides.length;//this is necessary so that i doesnt become bigger than the number of slides (3)
    slides[i].className = 'slide showing';//is adding the class "showing" to display that specific slide
}


//---- 3 ----//
//this function is intended to show additional text or hide it after clicking on the learnMore button
function learnMoreButton() {
    var moreInfo = document.getElementById("myText");//the text to show/hide
    var button = document.getElementById("learnMore");//the btn
    if (moreInfo.style.display == "none") {//To check if the element (css) display is none
        moreInfo.style.display = "block";
        button.innerHTML = "Show less"//changes the content of the btn
        button.style.backgroundColor = "#49274A";//changes the background color 
        button.style.color = "#F4DECB";//changes the color of the text
    } else {
        moreInfo.style.display = "none";
        //the three following lines change the button to its original state
        button.innerHTML = "Learn More"
        button.style.backgroundColor = "#D83F87";
        button.style.color = "#49274A";
    }
}

//---- 4 ----//
//this function will change the image when hovered
function changeImg() {
    document.getElementById("IMG").src = "images/portrait-girl.jpg";
}

//this function will show the initial image when the mouse stops hovering
function normalImg(){
    document.getElementById("IMG").src = "images/portrait.jpg";
}

//---- 5 ----//
//This function is intended to show the Greeting message with the name provided
function addName() {
    var person = prompt("Please enter your name", "Lord Voldermort");
    if (person != null) {//to make sure the user added a name
        document.getElementById("Name").innerHTML = "Greetings, " + person;
        document.getElementById("btnAddName").style.display = "none";
    }
}

//---- 6 ----//
//This function is to move the text in the footer to the right when the text is clicked
function myMove() {
    var elem = document.getElementById("movingElement");
    var x = 0;//how much it will move
    var interval = setInterval(frame, 5);
    function frame() {
        if (x == 800) {//will move until x = 800
            clearInterval(interval);
        } else {
            x++; 
            elem.style.left = x + "px";//will provide a px number for left CSS
        }
    }
}

//---- 7 ----//
//This function is called on load so that is working all the time
function textColor() {
    var color = "#"+((1<<24)*Math.random()|0).toString(16);//Generates random colors found it here: https://stackoverflow.com/questions/1484506/random-color-generator
    var text = document.getElementById("colorChanging");
    text.style.color = color;
}