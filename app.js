
//custom function to get element from the DOM
function getElement(id){
  return document.querySelector(id);
}

//creating function constructor with property and method
function Obj(el,width,bar,time,img,count,bar1){
  this.el=el; 
  this.width=width;
  this.bar=bar;
  this.time=time;
  this.img=img
  this.count=count;
  this.bar1=bar1;
  this.type(); //invoking the prototype method of this function
}

document.addEventListener('DOMContentLoaded',()=>{//invoking an anonymous function after the page load 
  //initailizing my variables
  var arr=['image/code5.png','image/code3.jpeg','image/code6.jpeg'];
  var cont=getElement('#showcase');
 // cont.style.width='100%';
  var img=document.createElement('img');
  img.src=arr[2];
   cont.insertBefore(img,cont.firstElementChild);

   //invoking the function constructor
  new Obj(arr,0,getElement('#progress'),1000,img,2,getElement('#bar').offsetWidth)
})

//creating the prototype of the function constructor
Obj.prototype.type = function () {
if(this.width<100){//checking if the progress bar width is less than 100%
  this.width=this.width+10;//adding 1 to the width 
  this.bar.style.transition='width 50ms linear';
    this.bar.style.width=Math.round((this.width*this.bar1)/100)+'px';//updating the progress bar width
   
    // this.time=50; //updating the settimeout delay with 50ms
}else if(this.width===100){//checking if the progress bar width is equal to 100%
  

//changing the image with the if else statement

  if(this.count<this.el.length-1){
  this.count=++this.count;
}else if (this.count===this.el.length-1) {
    this.count=0;
  }
this.img.src=this.el[this.count];
this.width=0;
 if(this.width===0){
     this.bar.style.width=Math.round((this.width*this.bar1)/100)+'px';//updating the progress bar width
  this.time=1000;
   }
  
 
}


setTimeout(()=>this.type(),this.time);
};


// let aboutMeCont=getElement('#aboutmecont');
// //checking where about me section is on the page to fade in
// function showContent(){
// if (window.scrollY>(aboutMeCont.offsetHeight+window.innerHeight)-(aboutMeCont.offsetTop+window.innerHeight)) {
//   aboutMeCont.style.opacity='1';
// }
// }
// window.onscroll=showContent



let icon =getElement('#baricon');

let menu=(e)=>{

  let listitem=e.currentTarget.nextElementSibling;

   if(e.currentTarget&&listitem.style.left===''){
    listitem.style.left='0%';
     
   }else if(listitem.style.left==='0%'){
    listitem.style.left='-100%';
   }else if(listitem.style.left==='-100%'){
     listitem.style.left='0%';
   }
  
let listitemkids=listitem.children;
console.log(listitemkids)
listitemkids=Array.from(listitemkids);
listitemkids.forEach((list,index,arr)=>{
    list.addEventListener('click',()=>{
      listitem.style.left='-100%';
    })
})


}

icon.onclick=menu


