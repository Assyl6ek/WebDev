var items = document.getElementsByTagName("li");


var i;
for(i = 0; i < items.length; i++){
    var remove = document.createElement("SPAN");
    var cross = document.createTextNode("\u00D7");
    remove.className="delete";
    remove.appendChild(cross);
    items[i].appendChild(remove);
}
var check = document.createElement('input');
check.type = "checkbox";
var deleteBtn = document.getElementsByClassName("delete");

var items = document.getElementById("list");
items.addEventListener('click',function(event){
   event.target.classList.toggle('done');
},false);

// check.addEventListener('click', function(event){
//     event.items.classList.toggle('done');
// }, false);

var k;
for (k = 0; k < deleteBtn.length; k++) {
    deleteBtn[k].onclick = function() {
    var container = this.parentElement;
    container.style.display = "none";
  }
}

function createNewElement(){
    var element = document.createElement('li');
    var inputItem = document.getElementById("insert").value;
    document.getElementById("insert").value ="";
    var text = document.createTextNode(inputItem);
    // li.appendChild(check);
    element.appendChild(text);
    if(inputItem === ''){
        alert("Type something!!!");
    }
    else{
        document.getElementById("list").appendChild(element);
    }
    
    var remove = document.createElement("SPAN");
    var cross = document.createTextNode("\u00D7");
    remove.className="delete";
    remove.appendChild(cross);
    element.appendChild(remove);
    var i;
    for (i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].onclick = function(){
            var container = this.parentElement;
            container.style.display = "none";
        }
    }
}
