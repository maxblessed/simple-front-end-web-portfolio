function accessEl(id){
    return document.querySelector(id);
    
}
let figure=accessEl('#item').children;
let arr2=['https://images.pexels.com/photos/1226458/pexels-photo-1226458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/160974/girl-in-leather-jacket-beautiful-hair-model-160974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/434490/pexels-photo-434490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/1006328/pexels-photo-1006328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/266840/pexels-photo-266840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/267292/pexels-photo-267292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/1474451/pexels-photo-1474451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/376636/pexels-photo-376636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=940',
'https://images.pexels.com/photos/932403/pexels-photo-932403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=950'
]
//initailizing my variable with a custom function(accessEl)
let itemcart=accessEl(' #listitemcontainer #itemcart');
let clearcart=accessEl('#clearcart');
let tcost=accessEl('.totalcost');
let section=accessEl('#itemadded');
let spanz=document.getElementsByClassName('spanz');
let count=0;
let sup=accessEl('.sup');
let trash='';

//loading all the image in the arr on the page 
function loadim(figure,arr){
for(var i=0;i<figure.length; i++){
    var img=document.createElement('img');
    img.setAttribute('src',`${arr[i]}`);
   
    
    figure[i].insertBefore(img,figure[i].firstElementChild);
}

}
 window.onload=loadim(figure,arr2);
 



//converting html object to array

let figure2=Array.from(spanz);
let fg=[];
  
  var div='';
/*  looping over the converted html object(shopping cart icon) and adding 
   eventListerner to the icon to get the item added to the cart*/
  figure2.forEach((figure,index,arr)=> {
      figure.addEventListener('click',(e)=>{
          e.stopPropagation();
        var img=e.currentTarget.previousElementSibling.src
        var para=e.currentTarget.nextElementSibling.firstElementChild.innerHTML
        var h6=e.currentTarget.nextElementSibling.lastElementChild.innerHTML;
        fg.push(img);
          for(var i=0;i<3;i++){
        //creating a div element and inserting item then adding to the cart
            div=document.createElement('div');
              if(i===0){
                 div.innerHTML=`<span id="lk" class="spanf"><i class="far fa-trash-alt"></i></span>`;
                  div.style.cssText='color:rgba(255,0,0,0.9);';
                
              }else if(i===1){
                  div.innerHTML=para+'<br>'+h6;

              }else if(i==2){
                  div.innerHTML=`<img src="${img}"/>`;
              }
            //insertin the cart in the DOM 
         section.insertBefore(div,section.firstElementChild);
          }
         
    
      //calling a total cost function with a callback and passing an empyty array and an element  
    totalcost(section,[]);
   
      },false)
  });


//adding click event to shopping cart item
itemcart.addEventListener('click',function(e){
       e.stopPropagation();
    
    if(e.currentTarget.id=='itemcart'){
        //checking if the cart has item or not before opening
        if(section.children.length>0||this.nextElementSibling.classList.length===2){
            this.nextElementSibling.classList.toggle('addClass');
        }else if(section.children.length===0&&this.nextElementSibling.classList.length===1){
            alert('Cart Is Empty'); 
        } 
    }
},false)


function totalcost(total,arr1){
    let tot = total.children;   //accessing every element in the cart and looping over them    
    var finalamount=0;
     arr1=Array.from(tot);
    for(var i=0;i<arr1.length;i++){
       if(arr1[i].innerHTML.includes('€')){//getting only the element with the euro sign
          var amount= arr1[i].innerHTML.lastIndexOf('>');
          var amounts=arr1[i].innerHTML.substring(amount+2);//retriving every single amount
          finalamount +=Number(amounts);//adding every single amount in the cart
         
       }
    }
   total.nextElementSibling.lastElementChild.innerHTML=`&euro;${finalamount}`;//updating the amount to the page
   count++;
 sup.innerHTML=count;//updating the cart supscript element
alert(count+' '+'item added to cart');//notify the client that item has been added to the cart

clearp(document.getElementById('lk')); //calling a clearcart function with a callback and passing an element to his parameter
}



function clearp(spanf){
spanf.addEventListener('click',(e)=>{//adding click event to the delete icon
    e.stopPropagation();
    let div1=e.currentTarget.parentElement.previousElementSibling;
        let div2=e.currentTarget.parentElement.previousElementSibling.previousElementSibling;
          let parent=e.currentTarget.parentElement.parentElement;
           let current=e.currentTarget.parentElement;
          //above code accessing all element to delete in the  cart and storing them in a variable
         let updatedDiv1= div1.innerHTML.lastIndexOf('€');
         let updatedTcost= tcost.innerHTML.lastIndexOf('€');
         updatedDiv1=div1.innerHTML.substring(updatedDiv1+1);
         updatedTcost=tcost.innerHTML.substring(updatedTcost+1);
         tcost.innerHTML='&euro;'+Number(updatedTcost-updatedDiv1);
        //above code subtracting the deleted amount from the total amount and updating the totalamount
          if(tcost.innerHTML==='€0'){
            tcost.innerHTML=Number(updatedTcost-updatedDiv1);//updating the total amount
          }

      parent.removeChild(div1);
       parent.removeChild(div2);
      parent.removeChild(current);
      //removing them from the DOM
            sup.innerHTML=--count;//updtaing superscript element of the deleted amount in cart

        
},false)

}

//clearcart function
clearcart.onclick=()=>{
   
    if(section.children.length>0){//checking if there is element in clear cart and clear if there is
        section.innerHTML='';
        sup.innerHTML=count=0;//updating superscript after cart has been cleared
        tcost.innerHTML=0;//updating totalcost
    }else{
        section.style.fontFamily='verdana'; 
        section.style.padding='50px 20px 50px 80px';
        section.innerHTML='No Item To Clear Out';
        section.style.color='rgb(255,0,0)';
        //above else code is use to display empty cart
        setTimeout(()=>{
            section.style.padding='';
            section.innerHTML='';
            section.style.fontFamily='';
            section.style.color='';
        },500);
    }
   
}
