const Username = document.querySelector('#username');
const Password = document.querySelector('#password');
const username = /^[a-zA-Z0-9]+$/;
const password = /^[a-zA-Z0-9]+$/;


Username.addEventListener ("blur", function () {
    if (Username.value && username.test(Username.value)) {
        console.log("Valid Username");
    }

    else {
        console.log("Invalid Username");
}
}
)

Password.addEventListener ("blur", function ()  {
    if (Password.value && password.test(Password.value)) {
        console.log("Valid Password");
    }
    else {
        console.log("Invalid Password");
    }
})

const btn = document.querySelector("#asignInBtn");

btn.addEventListener("click", function() {
    console.log(input.value);
})




















// let username;

// username = window.prompt("Enter Username");

// console.log(username);

// const Username = /^[a-zA-Z0-9]+$/;
// const username = document.querySelector('#username');

// username.addEventListener ("blur", () => {
//     if (username.value && Username.test(username.value)) {
//         alert("Username Valid");
//     } else {
//         alert("Invalid Username")
//     }
// })

// const Password= /^[a-zA-Z0-9]+$/;
// const password = document.querySelector('#password');

// password.addEventListener ("blur", () => {
//     if (password.value && Password.test(password.value)) {
//         alert("Password Valid");
//     } else {
//         alert("Invalid Password")
//     }
// })

// const btn = document.querySelector("#signInBtn");
// btn.addEventListener('click', function() {
//     if (username.value && Username.test(username.value) && password.value && Password.test(password.value)) {
//         alert("Form Submitted");
//     } else {
//         alert("Form not Submitted")
//     }
// })





// // if (username.value) {
// //     alert("Username Valid")
// // } else {
// //     alert("invalid username")
// // }


// // if (password.test("Ollacash001")) {
// //     alert("Valid Password")
// // } else {
// //     alert("invalid Password")
// // }