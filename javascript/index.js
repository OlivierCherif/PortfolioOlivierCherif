$(document).ready(function () {
    // $ vise un élement html 
    $("a").on('click', function (event) {

        // this.hash lit le href attribut de this, et obtient la partie de l'URL en commençant par #
        if (this.hash !== "") {
            // event.preventDefaut = Annule l'evenement si ce dernier ne remplit pas la condition
            event.preventDefault();
            // Store hash
            var hash = this.hash; // this est ""
            // Utilisation de la méthode animate() de jQuery pour ajouter un défilement de page fluide
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    /*

    Exemple de changement de couleur lors d'un clic
    $("p").on('click', function (event) {
        if (this !== "p") {
            event.preventDefault();
            var para = this; // this  = $("p");
            // ajoute un style de couleur lors du clic d'un paragraphe
            $(para).css("color", "green");
        }
    });*/

});


