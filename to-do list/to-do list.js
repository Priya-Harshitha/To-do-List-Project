var ip=document.getElementById('takeTask');
var lists=document.getElementById('taskList');
document.addEventListener('DOMContentLoaded',retrive);
function add(){
    var li=document.createElement('li');
    li.innerHTML=ip.value;
    ip.value='';
    lists.appendChild(li);
    var span=document.createElement('span');
    span.innerHTML='';
    var img=document.createElement('img');
    img.setAttribute('src',"bin.svg");
    li.appendChild(img);
    save();
}

document.addEventListener('click',(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        save();
    }
    else if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
});
function save(){
    localStorage.setItem("data",lists.innerHTML);
}
function retrive(){
    lists.innerHTML=localStorage.getItem("data");
}