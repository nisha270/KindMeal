

let http = new XMLHttpRequest();

http.open('get', 'item.json',true);


 http.send();

 http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText); 

        let output  = "";



        for(let item of products){
            output += `
                <div class="item">
                <img src="${item.images}" alt="${item.images}">
                <p class="title">${item.title}</p>

                <p class="description">${item.description}</p>
                <p class="price">
            <span></span>
            <span>&euro;</span>
            </p>
                </div>
            `;
        }
        document.querySelector(".item").innerHTML=output;
    }
 }

  