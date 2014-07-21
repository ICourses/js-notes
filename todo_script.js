window.todo = (function(){
    return{
        initial: function(settings){

            function cleanList(){
                document.getElementById(settings.listId).innerHTML = "";
            }

            function cleanInput(){
                document.getElementById(settings.inputId).value = "";
            }

            function addInArray( val ){
                array.push( val );
            }

            function deleteFromArray( text){
                var i = array.indexOf( text );
                array.splice(i, 1);
            }
            function visualize( str ){
                var Teg = document.createElement('div');
                Teg.innerHTML = str + "<a class=" + settings.aTegClassName + "><img class=" + settings.imgClassName +" src='delete.png'></a>";
                document.getElementById(settings.listId).appendChild(Teg);
            }

            function display ( array ){
                for ( var i=0; i < array.length; i++ ){
                    visualize(array[i]);
                }
            }

            var array = [];

            document.getElementById(settings.buttonId).addEventListener("click", function() {
                if (document.getElementById(settings.inputId).value) {
                    addInArray( document.getElementById(settings.inputId).value );
                    cleanInput();
                    cleanList();
                    display(array);
                }
                else{
                    alert("Enter a note for the entry in the list.");
                }
            });

            document.getElementById(settings.listId).addEventListener("click", function(event) {
                if(event.target.className == "image"){
                    deleteFromArray( event.target.parentElement.parentElement.firstChild.textContent );
                    cleanList();
                    display(array);
                }
            });
        }
    }
})();
