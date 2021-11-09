var close = document.getElementsByClassName("close");
var done = document.getElementsByClassName("done");
var list = document.getElementsByClassName("list");
var clear = document.getElementsByClassName("clear-list");
var i;

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("Input eshte bosh!");
    }else {
        li.className = "list";
        document.getElementById("myOL").appendChild(li);
    }
    document.getElementById("input").value = "";

    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("X");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);

    var buttonn = document.createElement("BUTTON");
    var tx = document.createTextNode("DONE");
    buttonn.className = "done";
    buttonn.appendChild(tx);
    li.appendChild(buttonn);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    for(i = 0; i<done.length; i++){
        done[i].onclick = function() {
            var div = this.parentElement;
            div.style.textDecoration = "line-through";
            // div.classList.toggle('checked');
        }
    }

}

function clearElement(){ 
    for (i = 0; i < list.length; i++) {
            list[i].style.display = "none";
    }
}


