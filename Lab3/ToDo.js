var myList=document.getElementsByTagName("li");
var i;
for(i = 0; i < myList.length; i++){
    var aSpanTag = document.createElement("SPAN");
    var someTxt = document.createTextNode("\u00D7");
    aSpanTag.className="close";
    aSpanTag.appendChild(someTxt);
    myList[i].appendChild(aSpanTag);
}
var check = document.createElement('input');
check.type = "checkbox";
check.id = "accept";
check.style = "margin-right: 100px";
//Close button
var closeButton = document.getElementsByClassName("close");
closeButton.style = "margin-left:50px";
//Cheked todos

var ulList = document.getElementById("the-ul");
ulList.addEventListener('click',function(event){
//    event.target.classList.toggle('checked');
    event.target.classList.toggle('checked');
},false);


var k;
for (k = 0; k < closeButton.length; k++) {
    closeButton[k].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function createNewElement(){
    var li = document.createElement('li');
    var theInputValue = document.getElementById("the-input").value;
    document.getElementById("the-input").value ="";
    var textNode = document.createTextNode(theInputValue);
    // li.appendChild(check);
    li.appendChild(textNode);
    if(theInputValue===''){
        alert("It cannot be empty");
    }
    else{
        document.getElementById("the-ul").appendChild(li);
    }
    
    var thePanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    thePanTag.className="close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag);
    for (i=0;i<closeButton.length; i++){
        closeButton[i].onclick=function(){
            var theDiv= this.parentElement;
            theDiv.style.display="none";
        }
    }
}
