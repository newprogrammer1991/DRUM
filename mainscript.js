'use strict';
	
function play(event) {
	del();
   let elements=document.querySelectorAll('[data-key]');
     for (let i = 0; i < elements.length; i++){
     let key=elements[i].getAttribute("data-key");
     if (key==event.keyCode) {
     	elements[i].classList.add("showParty");
     	let audios=document.querySelectorAll("audio[data-key]");
        for (let i = 0; i < audios.length; i++) {
         	if (audios[i].getAttribute("data-key")==key){
         	audios[i].currentTime=0;
                    audios[i].play();
                    console.log(audios[i].getAttribute("data-key"));
        	}
        }
     	return;
     }
     }  
};
 
function clear(event){
  event.target.classList.remove("showParty"); 
} 

function warning() {
	let tip=document.getElementsByClassName("tip")[0];
	if (!tip) {
   let main=document.getElementsByClassName('container')[0];
   let div=document.createElement("div");
   let text="Use only keyboard according to above letters";
   div.className="tip";
   div.textContent=text;
   //keys.parentNode.insertBefore(div, keys.nextSibling);
  document.body.appendChild(div);
  }
}

function del(){
let tip=document.getElementsByClassName("tip")[0];
	if (tip) {
tip.remove();
}
return;
};

document.addEventListener("keydown",play);
document.addEventListener("transitionend",clear);
document.addEventListener("click",warning);
