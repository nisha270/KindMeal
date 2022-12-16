async function fetchDocument() {
    const result = await  fetch('./items.json')
    const json = await result.json();
    return json;
}
async function run() {
  let products = await fetchDocument();
  const itemDiv = document.getElementById("items");
  for (let item of products) {
    const div = document.createElement("div");
    div.innerHTML += `
            <div class="item">

            <div style="background-position: 10%;">10%</div>
                    
                    <img src="${item.images}" alt="${item.images}">
                    <div class = "tit">
                        <h3>${item.title}</h3>
                        
                    </div>
                    <p>${item.description}</p>
                    <button class = 'my'>Get FREE Coupon</button>

                    <div class="bottom">

                    <div class="item_img">
                        <img src="${item.full}" alt="${item.full}">
                        <img src="${item.full1}" alt="${item.full1}">
                        <img src="${item.full2}" alt="${item.full2}">
                    </div>

                    <div class="kind">
                    <p>KindMeal Discount</p>
                    <h2>10% off</h2>
                    </div>

                    <div class="off">
                    <p>Expires In</p>
                    <h2>6 Days</h2>
                    </div>

                    </div>

            </div>
            `;
    itemDiv.append(div);
  }
}


run();


/********** search *********** */





const search = document.getElementById("search-item")
const matchlist = document.getElementById("items")



async function searchItems(searchText){
  const response = await fetch("items.json")
  const co = await response.json()

  let matches = co.filter(food => {
    const regex = new RegExp(`^${searchText}`, "gi")
    return food.title.match(regex)
  })

  if(search.value === ""){
    matches = ""
    matchlist.innerHTML =""
  }
  thehtml(matches)
}


function thehtml(products){
  if(products.length > 0){
    const itemDiv = document.getElementById("items");
    itemDiv.innerHTML ="";
  for (let item of products) {
    const div = document.createElement("div");
    div.innerHTML += `
            <div class="item">

            <div style="background-position: 10%;">10%</div>
                    
                    <img src="${item.images}" alt="${item.images}">
                    <div class = "tit">
                        <h3>${item.title}</h3>
                        
                    </div>
                    <p>${item.description}</p>
                    <button class = 'my'>Get FREE Coupon</button>

                    <div class="bottom">

                    <div class="item_img">
                        <img src="${item.full}" alt="${item.full}">
                        <img src="${item.full1}" alt="${item.full1}">
                        <img src="${item.full2}" alt="${item.full2}">
                    </div>

                    <div class="kind">
                    <p>KindMeal Discount</p>
                    <h2>10% off</h2>
                    </div>

                    <div class="off">
                    <p>Expires In</p>
                    <h2>6 Days</h2>
                    </div>

                    </div>

            </div>
            `;
    itemDiv.append(div);
  }
  }
}
search.addEventListener("input",() => searchItems(search.value))




const page = document.getElementById("pages")
const divPage = document.getElementById("items")



async function searchPage(searchText){
  const responses = await fetch("items.json")
  const cot = await responses.json()

 

  console.log(searchPage)
}