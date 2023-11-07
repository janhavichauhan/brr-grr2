

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}


  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  function renderCheese() {
    var cheeseY = document.getElementById('cheese');
    state.Cheese 
    ? cheeseY.style.display = "block" 
    : cheeseY.style.display = "none";
  }
  //Another way to write same code
  //  let Cheese = document.querySelector("#cheese");
  // if (state.Cheese) {
  //   Cheese.style.display = "inherit";
  // } else {
  //   Cheese.style.display = "none";
  // }


  

  function renderTomatoes() {
    var Tamatar = document.getElementById('tomato');
    state.Tomatoes 
    ? Tamatar.style.display = "block" 
    : Tamatar.style.display = "none";
  }


  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM

  function renderOnions() {
    var piyaz = document.getElementById('onion');
    state.Onions 
    ? piyaz.style.display = "block" 
    : piyaz.style.display = "none";
  }
  

  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  function renderLettuce() {
    var patta = document.getElementById('lettuce');
    state.Lettuce 
    ? patta.style.display = "block" 
    : patta.style.display = "none";

  }


document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};






// Trial 2 - Setup event listener for the cheese button
// Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes=!state.Tomatoes;
  renderAll();
}



// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions=!state.Onions;
  renderAll();
}


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce=!state.Lettuce;
  renderAll();
}


// Challenge 1 - Add/Remove the class active to the buttons based on state
// function renderButtons() {
//   document.querySelector(".btn-cheese").classList.toggle('active', state.Cheese);
//   document.querySelector(".btn-tomatoes").classList.toggle('active', state.Tomatoes);
//   document.querySelector(".btn-onions").classList.toggle('active', state.Onions);
//   document.querySelector(".btn-lettuce").classList.toggle('active', state.Lettuce);
// }
function renderButtons(){
  for(key in state){
    if(state[key]){
      console.log(state[key]);
      document.querySelector(".btn-" + key.toLowerCase()).classList.add("active")
    }else{
      document.querySelector(".btn-" + key.toLowerCase()).classList.remove("active")
    }
  }
}

// Challenge 2 - Render only the items selected in the ingredients board based on the state
// function renderIngredients() {
//   document.getElementById("cheese").style.visibility = state.Cheese ? "visible" : "hidden";
//   document.getElementById("tomato").style.visibility = state.Tomatoes ? "visible" : "hidden";
//   document.getElementById("onion").style.visibility = state.Onions ? "visible" : "hidden";
//   document.getElementById("lettuce").style.visibility = state.Lettuce ? "visible" : "hidden";
// }
function renderIngredientsBoard(){
  let i = 0;
  let elements = document.querySelectorAll(".items");
  for(key in state){
    if(state[key]){
      elements[i++].style.display = "inherit";
    }else{
      elements[i++].style.display = "none";
    }
  }
}
//trying another way to write the code 

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
// function renderPrice(){
//   var payment=wholeWheatBun;
//   for (let ingredient in state){
//     if(state[ingredient]){
//       payment+=ingredients[ingredient]
//     }
//   }
//   var amount=document.querySelector(".price-details")
//   amount.textContent="IND"+payment;
// }
// function renderPrice() {
//   let totalPrice = 20;

//   for (key in state) {
//     if (state[key]) {
//       totalPrice += ingredients[key];
//     }
//   }
//   // Create a new paragraph element
//   const priceDetails = document.createElement("p");

//   // Set the inner HTML of the paragraph element
//   priceDetails.innerHTML = "INR " + totalPrice;

//   // Select the target element to replace
//   const priceContainer = document.querySelector("body > footer > div.Rectangle3 > div > p.price-details");

//   // Replace the existing element with the updated one
//   priceContainer.parentNode.replaceChild(priceDetails, priceContainer);
// }

//Final code that worked
function renderPrice(){
  let totalPrice = 20;
  for(key in state){
    if(state[key]){
      totalPrice+= ingredients[key];
    }
  }
  document.querySelector("body > footer > div.Rectangle3 > div > p.price-details").innerHTML = "INR " + totalPrice;
}


