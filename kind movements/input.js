let fom=document.querySelector("form").addEventListener("submit",myyfom);
let arr1=JSON.parse(localStorage.getItem("recip1"))||[]
function myyfom(event){
    event.preventDefault();
    let tname1=document.querySelector("#task1").value
    let tname0=document.querySelector("#task0").value
    let tname2=document.querySelector("#task2").value
   
    let tname3=document.querySelector("#task3").value
    let tname4=document.querySelector("#task4").value
   

    let obj={
        tname1,
        tname0,
        tname2,
     
      tname3,
      tname4,
       
    }
    arr1.push(obj)
    localStorage.setItem("recip1",JSON.stringify(arr1))
    
}
mytable(arr1) 

function mytable(arr1){
arr1.forEach(function (ele,i){
    let r=document.createElement("tr")
    let img1=document.createElement("th")
    let profurl=document.createElement("th")
    let img2=document.createElement("th")
    let descp=document.createElement("th")
    let btn=document.createElement("th")
    btn.innerText="Delete"
   btn.addEventListener("click",function(){
    deletfav(ele,i)
    
   })

    let city=document.createElement("th")
 city.innerText=ele.tname0

    img1.innerText=ele.tname1
    profurl.innerText=ele.tname2

    img2.innerText=ele.tname3
    descp.innerText=ele.tname4
  r.append(img1,city, profurl,img2,descp,btn)
  document.querySelector("tbody").append(r)
});
} 

function deletfav(ele,i){
arr1.splice(ele,1)
console.log(arr1)
localStorage.setItem("recip1",JSON.stringify(arr1))
mytable(arr1)
}