let form = document.querySelector("form");
let input = document.querySelector("input");
let image = document.querySelector("img");
let size = document.querySelector("#size");

async function qrMaker(e) {
    e.preventDefault();
    let response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data= ${input.value}`)
    // console.log(response)
    image.setAttribute("src",response.url);
    form.reset();
}

form.addEventListener("submit", qrMaker)