
//creating the first array
let arr=['https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500',
'https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/1510627/pexels-photo-1510627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/932403/pexels-photo-932403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=950'
]
//creating a custom function that get html element from the DOM
function id(id){
return document.querySelector(id);
}
//creating a function that change image 
let count=0;
function chimg(arr,img){
     img.setAttribute('src',arr[count]);
    img.style.objectFit='cover';
    if(count<arr.length-1){
        count++;
    }else{
        count=0;
    }
}

//initializing the second array
let arr2=['https://images.pexels.com/photos/1226458/pexels-photo-1226458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/160974/girl-in-leather-jacket-beautiful-hair-model-160974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/434490/pexels-photo-434490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/1006328/pexels-photo-1006328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=940'
]

//initializing the second array
let arr3=['https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/266840/pexels-photo-266840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/267292/pexels-photo-267292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/1474451/pexels-photo-1474451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/376636/pexels-photo-376636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]
//invoking the change image function with arrays and html element as the parameter
setInterval(()=>{
    chimg(arr,id('#twoses div+div >img'));
    chimg(arr2,id('#ethsec #ethsecC #modiv div+div+div>img'));
    chimg(arr3,id('#shoeSec div+div+div>img'));
    
},1000);











//initializing varaible

let wid2=608.5;
let wid=0;
let co=1;

//creating a right to left  function that move image to right and left with direction and html element use as the parameter
function ritlef(dir,div){
if(dir.getAttribute('id')==='right'){//checking if the dirction is equal right
     if(wid===40){
         wid=60;
         dir.setAttribute('disabled',true);
         dir.style.backgroundColor='#ddd';
    
     }else if(wid===0){
         wid=40;
     }
     
    div.style.transition='transform 0.2s linear';
    div.style.transform=`translateX(${-wid*(co)}%)`;
}



if(dir.getAttribute('id')==='left'){//checking if the dirction is equal left
    if(wid===60&&div.style.transform==='translateX(-60%)'){
         wid=40;
         
     }else if(wid===60&&div.style.transform==='translateX(-40%)'){
             wid=0;
             dir.style.backgroundColor='#ddd';
             dir.setAttribute('disabled',true);
     }else if(wid===40&&div.style.transform==='translateX(-40%)'){
        dir.style.backgroundColor='#ddd';
        dir.setAttribute('disabled',true);
        wid=0;
    }
    div.style.transition='transform 0.2s linear';
    div.style.transform=`translateX(${-wid*(co)}%)`;
}

if(dir.getAttribute('id')==='right1'){//checking if the dirction is equal right in the second element
    if(wid2===608.5){
    div.style.transition='transform 0.2s linear';
    div.style.transform=`translateX(${-wid2}px)`;
    dir.style.backgroundColor='#ddd';
    dir.style.color='#ddd';
    dir.setAttribute('disabled',true);
    wid2=0;
    }
}

if(dir.getAttribute('id')==='left1'){//checking if the dirction is equal left
     if(wid2===0){
        div.style.transition='transform 0.2s linear';
       div.style.transform=`translateX(${-wid2}px)`;
       dir.style.backgroundColor='#ddd';
       dir.style.color='#ddd';
       dir.setAttribute('disabled',true); 
       wid2=608.5;
     }
}


}
//adding a click event to the html element with the id of right 
id('#right').addEventListener('click',function(e){
    e.stopPropagation();
    this.nextElementSibling.removeAttribute('disabled');
    this.nextElementSibling.style.backgroundColor='#fff';
    this.nextElementSibling.style.color='#000';
    ritlef(this, id('#modiv'));//click element as function parameter and another html element 
    
},false)


//adding a click event to the html element with the id of left
id('#left ').addEventListener('click',function(e){
   
    e.stopPropagation();
     this.previousElementSibling.removeAttribute('disabled');
     this.previousElementSibling.style.backgroundColor='#fff';
     this.previousElementSibling.style.color='#000';
    ritlef(this, id('#modiv'));//click element as function parameter and another html element 
},false)


//adding a click event to the html element with the id of right1 
id('#right1').addEventListener('click',function(e){
     e.stopPropagation();
     this.nextElementSibling.removeAttribute('disabled');
     this.nextElementSibling.style.backgroundColor='#fff';
     this.nextElementSibling.style.color='#000';
     ritlef(this, id('#ninthc div'));//click element as function parameter and another html element 
})


//adding a click event to the html element with the id of left1
id('#left1').addEventListener('click',function(e){
    e.stopPropagation();
    this.previousElementSibling.removeAttribute('disabled');
   this.previousElementSibling.style.backgroundColor='#fff';
   this.previousElementSibling.style.color='#000';
    ritlef(this, id('#ninthc div'));//click element as function parameter and another html element 
})