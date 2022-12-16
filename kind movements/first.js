let arr4=JSON.parse(localStorage.getItem("recip1"))||[]
displaycard(arr4)


function displaycard(data){
    // document.querySelector("#product-container").innerHTML="";
      data.forEach(function(element){
      //for(i=0;i<data.length;i++) { 
        let div1mai=document.createElement("div")
        div1mai.setAttribute("class","prodit")


        let div00=document.createElement("div")
        div00.setAttribute("id","dd0")
        
     
        let imag1=document.createElement("img")
        imag1.setAttribute("src",element.tname1)

         let hh1=document.createElement("h4")
         let aa=document.createElement("a")
let date1="Dec 14th 2022"
aa.setAttribute("href","#")
         aa.innerText=element.tname2
         let br1=document.createElement("br")

         let but1=document.createElement("button")
         but1.innerText="View"

         hh1.append(aa,br1,date1)
div00.append(imag1,hh1,but1)

        
let img2=document.createElement("img")
img2.setAttribute("src",element.tname3)


let div11=document.createElement("div")
        div11.setAttribute("id","dd1")

       let img01=document.createElement("img")
        img01.setAttribute("src","https://www.kindmeal.my/images/icon_heart_darkgrey.svg")
      let  img02=document.createElement("img")
        img02.setAttribute("src","https://www.kindmeal.my/images/icon_camera_darkgrey.png")
      let  img03=document.createElement("img")
        img03.setAttribute("src","https://www.kindmeal.my/images/icon_comment_darkgrey.png")

        div11.append(img01,img02,img03)

        let par=document.createElement("p")
        par.innerText=element.tname4

        let hrr=document.createElement("hr")


        let div22=document.createElement("div")
        div22.setAttribute("id","dd2")

        let imafa=document.createElement("img")
        imafa.setAttribute("src","https://www.kindmeal.my/images/icon_facebook_moment.png")



        let hp=document.createElement("p")
        let aa1=document.createElement("a")
        aa1.setAttribute("href","#")
let para="LG-206 , Lower Valle.."

        aa1.innerText="Purple Cane Tea Restaurant"
        let br2=document.createElement("br")
hp.append(aa1,br2,para)
        div22.append(imafa,hp)



       

        // let prod=document.createElement("h3")
        // prod.innerText=element.Category
      
      
       
        div1mai.append(div00,img2,div11,par,hrr,div22)
        
       document.querySelector("#prods").append(div1mai)

     } )
    
    //}
    
      
    }