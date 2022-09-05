const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then((data)=>{
    //console.log(data);
    return data.json();
}).then((json)=>{
    console.log(json);
    document.getElementById('cards').src = URL.createObjectURL(json);

    // async function completedata(){
    //     const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    //     const json = await response.json();
    //     document.getElementById('cards').src = URL.createObjectURL(json);  
    // }


   let data1="";
 completedata.map((values)=>{
    data1+=`<div class="card">
    <h1 class="title">${values.title}</h1>
    <img src=${values.image} alt="img" class="images">
    <p>${values.description}</p>
    <p class="category">${values.category}</p>
    <p class="price">${values.price}</p>
</div>`
   });
document.getElementById("cards").innerHTML=data1

}).catch((err)=>{
    console.log(err);
})