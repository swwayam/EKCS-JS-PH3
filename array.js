// const names = ["Manish", "Amulya", "Pankaj", "Manoj"]

// console.log(names)

// let num = "10" // string
//     console.log(parseInt(num)); // str -> num
//     let a = 10
//     let b = 20
//     console.log(a.toString() + b.toString());
//     console.log(input.value);



const cart = []


function submitItem(){
    const name = document.getElementById("userName")
    const input = document.getElementById("cartItem")

    console.log(typeof input.value)
    name.innerHTML = input.value
    
}

function addToCart(product){
    cart.push(product)   // shampoo -> ["shampo",]
}


function removeFromCart(){
    cart.pop() // last wala product nikale ga
}


function showCart(){
    console.log(cart)
}

function searchCart(){

}

function selectCart(){

}

