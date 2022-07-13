// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

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

function renderCheese() {
    //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
    let cheese = document.querySelector("#cheese");
    if (state.Cheese) {
        cheese.style.display = "inherit";
    } else {
        cheese.style.display = "none";
    }
}

function renderTomatoes() {
    //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
    let tomatoes = document.querySelector("#tomato");
    if (state.Tomatoes) {
        tomatoes.style.display = "inherit";
    } else {
        tomatoes.style.display = "none";
    }
}

function renderOnions() {
    //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
    let onion = document.querySelector("#onion");
    if (state.Onions) {
        onion.style.display = "inherit";
    } else {
        onion.style.display = "none";
    }
}

function renderLettuce() {
    //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
    let lettuce = document.querySelector("#lettuce");
    if (state.Lettuce) {
        lettuce.style.display = "inherit";
    } else {
        lettuce.style.display = "none";
    }
}

document.querySelector(".btn-patty").onclick = function() {
    state.Patty = !state.Patty;
    renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function() {
    state.Cheese = !state.Cheese;
    renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function() {
    state.Tomatoes = !state.Tomatoes;
    renderAll();
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function() {
    state.Onions = !state.Onions;
    renderAll();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function() {
    state.Lettuce = !state.Lettuce;
    renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons() {
    if (!state.Patty)
        document.getElementById("btn-patty").classList.remove("active");
    else
        document.getElementById("btn-patty").classList.add("active");
    if (!state.Cheese)
        document.getElementById("btn-cheese").classList.remove("active");
    else
        document.getElementById("btn-cheese").classList.add("active");
    if (!state.Tomatoes)
        document.getElementById("btn-tomato").classList.remove("active");
    else
        document.getElementById("btn-tomato").classList.add("active");
    if (!state.Onions)
        document.getElementById("btn-onion").classList.remove("active");
    else
        document.getElementById("btn-onion").classList.add("active");
    if (!state.Lettuce)
        document.getElementById("btn-lettuce").classList.remove("active");
    else
        document.getElementById("btn-lettuce").classList.add("active");
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard() {
    if (state.Patty)
        document.getElementById("p").style.display = "inherit";
    else
        document.getElementById("p").style.display = "none";
    if (state.Cheese)
        document.getElementById("c").style.display = "inherit";
    else
        document.getElementById("c").style.display = "none";
    if (state.Tomatoes)
        document.getElementById("t").style.display = "inherit";
    else
        document.getElementById("t").style.display = "none";
    if (state.Onions)
        document.getElementById("o").style.display = "inherit";
    else
        document.getElementById("o").style.display = "none";
    if (state.Lettuce)
        document.getElementById("l").style.display = "inherit";
    else
        document.getElementById("l").style.display = "none";
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
let load = true;

function renderPrice() {
    if (load) {
        let price = 170;
        if (!state.Patty)
            price -= 80;
        if (!state.Cheese)
            price -= 10;
        if (!state.Tomatoes)
            price -= 20;
        if (!state.Onions)
            price -= 20;
        if (!state.Lettuce)
            price -= 20;
        document.getElementById("MRP").innerText = "INR " + price;
    } else {
        load = false;
        let priceStr = document.getElementById("MRP").innerText;
        let price = parseInt(priceStr.substr(4));
        if (state.Patty)
            price += 80;
        else
            price -= 80;
        if (state.Cheese)
            price += 10;
        else
            price -= 10;
        if (state.Tomatoes)
            price += 20;
        else
            price -= 20;
        if (state.Onions)
            price += 20;
        else
            price -= 20;
        if (state.Lettuce)
            price += 20;
        else
            price -= 20;

        document.getElementById("MRP").innerText = "INR " + price;
    }
}