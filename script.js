var url = "https://upadhayay.github.io/db.json"
fetch(url)
 // .then(res=> res.json())
 // .then(data => {
 //   console.log(data.books[0].title);
 // }) ;
 .then(function(response){
    return response.json();
 })
 .then(function(products){
    let placeholder = document.querySelector(".head1");
    let out = "";
    out = `<img src="eins.jpeg" style="width:150px" alt="Albert Einstein">`
    out += `<p class="head1" style="color:black">Papers</p>`
    for(let product of products.books){
       out += `
       <ol>
           <div class="text-block"><li class='bloc'><a href="#">Title: ${product.title}</a></li></div>
        </ol>
       `;
    }
  
    placeholder.innerHTML = out;
 });