const pandaObject = {
    name: "panda",
    price: 120,
    img: "img/panda.png"
};
const coffeeObject = {
    name: "Coffee js",
    price: 100,
    img: "img/coffee.jpg"
};
const phoneObject = {
    name: "phone",
    price: 450,
    img: "img/phone.jpg"
};
const cameraObject = {
    name: "Camera",
    price: 320,
    img: "img/camera.jpg"
};
const laptopObject = {
    name: "Laptop",
    price: 720,
    img: "img/laptop.jpg"
};
const heartObject = {
    name: "Heart js",
    price: 110,
    img: "img/heart_js.jpg"
};
const vueObject = {
    name: "Vue js",
    price: 150,
    img: "img/vue-js.jpg"
};
const umbrObject = {
    name: "Umbrella",
    price: 160,
    img: "img/umbrella.png"
};


const objectArray = [pandaObject, cameraObject, coffeeObject, phoneObject, laptopObject, heartObject, vueObject, umbrObject];

function displayCard(array) {
    for (let i = 0; i < array.length; i++) {
        const body = document.getElementById("display-card");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card card-compact w-full bg-base-100 shadow-xl gap-2">
        <figure><img src="${array[i].img}" class="w-full h-40" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${array[i].name}</h2>
          <p>Price : $<span>${array[i].price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" onclick="addToCart(this)">Buy Now</button>
          </div>
        </div>
      </div>
       `

        body.appendChild(div);
    }
    // const body = document.getElementById("display-card");
    // const div = document.createElement("div");
    // div
}
displayCard(objectArray);

let pdArray = [];

function displayTable(arr) {
    const totalAdded = document.getElementById("total-add");
    totalAdded.innerText = arr.length;

    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';

    let total = 0;

    for (let i = 0; i < arr.length; i++) {

        total = total + arr[i].pdPrice;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${arr[i].pdName}</td>
        <td>${arr[i].pdPrice}</td>
        `
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Total</td>
    <td>${total}</td>
    `
    tableBody.appendChild(tr);



}

function addToCart(element) {
    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const products = {
        pdName: pdName,
        pdPrice: parseFloat(pdPrice)
    }
    pdArray.push(products);

    displayTable(pdArray);
}

