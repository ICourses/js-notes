window.todo = (function(){
    return{
        initial: function(settings){

            function display ( array ){
                for ( var i=0; i < array.length; i++ ){
                    var divTeg = document.createElement('div');    //i+1 + ".  " +
                    divTeg.innerHTML =  array[i] + "<a class=" + settings.aTegClassName + "><img class=" + settings.imgClassName +" src='delete.png'></a>";
                    document.getElementById(settings.listId).appendChild(divTeg);
                }
            }

            var array = [];

            document.getElementById(settings.buttonId).addEventListener("click", function() {
                if (document.getElementById(settings.inputId).value != "") {
                    array.push(document.getElementById(settings.inputId).value);
                    document.getElementById(settings.inputId).value = "";
                    document.getElementById(settings.listId).innerHTML = "";
                    display(array);
                }
                else{
                    alert("Enter a note for the entry in the list.");
                }
            });

            document.getElementById(settings.listId).addEventListener("click", function(event) {
                if(event.target.className == "image"){
                    var i = array.indexOf(event.target.parentElement.parentElement.firstChild.textContent);
                    array.splice(i, 1);
                    document.getElementById(settings.listId).innerHTML = "";
                    display(array);
                }
            });
        }
    }
})();
