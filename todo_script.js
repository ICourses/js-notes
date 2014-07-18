window.todo = (function(){
    return{
        initial: function(settings){

            function display ( array ){
                for ( var i=0; i < array.length; i++ ){
                    var divTeg = document.createElement('div');
                    divTeg.innerHTML = i+1 + ".  " + array[i] + "<a class=" + settings.aTegClassName +" id='" + i + "'><img class=" + settings.imgClassName +" src='delete.png'></a>";
                    document.getElementById(settings.listId).appendChild(divTeg);
                }
            }

            function deleteNote(){
                var closes = document.getElementsByClassName('link');
                for(var i = 0; i < closes.length; i++) {
                    closes[i].addEventListener('click', function(){
                        array.splice(this.id,1);
                        document.getElementById(settings.listId).innerHTML = "";
                        display(array);
                    });
                }
            }

            var array = [];

            document.getElementById(settings.buttonId).addEventListener("click", function() {
                if (document.getElementById(settings.inputId).value != "") {
                    array.push(document.getElementById(settings.inputId).value);
                    document.getElementById(settings.inputId).value = "";
                    document.getElementById(settings.listId).innerHTML = "";
                    display(array);
                    deleteNote();
                }
                else{
                    alert("Enter a note for the entry in the list.");
                }
            });

            document.getElementById(settings.listId).addEventListener("click", function() {
                deleteNote();
            });
        }
    }
})();
