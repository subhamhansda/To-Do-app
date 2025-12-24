
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
btn.addEventListener("click",function(){
let list=document.createElement("li");
ul.appendChild(list);
list.innerText=input.value;
let del=document.createElement("button");
del.innerText="Delete Task";
list.appendChild(del);
input.value="";
})
ul.addEventListener("click",function(event){
let toDelete=event.target.parentElement;
toDelete.remove();

})
