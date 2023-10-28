let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu_bar');
let cross = document.getElementById('cross');
menu.addEventListener('click',()=>{
     menu_bar.className = "flex-col bg-[#222] text-white"
     menu.className = "hidden";
     cross.className = "inline-flex text-3xl absolute top-[40%] left-[90%]"
});

cross.addEventListener('click',()=>{
    menu_bar.className = "hidden "
    menu.className = "inline-flex text-3xl absolute top-[40%] left-[90%] lg:hidden";
    cross.className = "hidden"
})

//background_music
document.getElementById('play_now').addEventListener('click',()=>{
   let audio = new Audio('pubg_ringtone.mp3');
   audio.play();



 // Play now Game
 var body = document.getElementById('menu');
let blood = document.getElementById('blood');
let menu = document.getElementById('menu_body');
let bullet = document.getElementById('bullet');
menu.style.cssText = "cursor: url('target.png'),pointer;";

bullet.style.cssText = "position:absolute; width:40px; height:38px; background: url(hole.png); pointer-events: none; transform: translate(20px,20px);";
document.addEventListener('click',(e)=>{

     var x=e.offsetX;
     var y=e.offsetY;
     bullet.style.left = x+'px';
     bullet.style.top = y+'px';
     let audio = new Audio('sound.wav');
     audio.play();
    blood.className = "inline-flex absolute top-[50%] w-[200px] "
    var X=e.offsetX+35;
    var Y=e.offsetY+35;
    blood.style.left = X+'px';
    blood.style.top = Y+'px';

})
setInterval(()=>{
    blood.className = "hidden";
    menu.className = "cursor:url(''),pointer";
  },2000)
})
document.getElementById('play_now2').addEventListener('click',()=>{
    let audio = new Audio('pubg_ringtone.mp3');
    audio.play();
 
 
 
  // Play now Game
  var body = document.getElementById('menu');
 let blood = document.getElementById('blood');
 let menu = document.getElementById('menu_body');
 let bullet = document.getElementById('bullet');
 menu.style.cssText = "cursor: url('target.png'),pointer;";
 
 bullet.style.cssText = "position:absolute; width:40px; height:38px; background: url(hole.png); pointer-events: none; transform: translate(20px,20px);";
 document.addEventListener('click',(e)=>{
 
      var x=e.offsetX;
      var y=e.offsetY;
      bullet.style.left = x+'px';
      bullet.style.top = y+'px';
      let audio = new Audio('sound.wav');
      audio.play();
     blood.className = "inline-flex absolute top-[50%] w-[200px] "
     var X=e.offsetX+35;
     var Y=e.offsetY+35;
     blood.style.left = X+'px';
     blood.style.top = Y+'px';
 
 })
 setInterval(()=>{
     blood.className = "hidden";
     menu.className = "cursor:url(''),pointer";
   },2000)
 })
//time logic

setInterval(()=>{
    let date = new Date();
let time = document.getElementById('time').innerHTML = date;
},1000)