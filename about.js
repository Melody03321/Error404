// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');	// Retourne le premier Element dans le document correspondant au groupe de sélecteurs spécifié
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Fonction réalisée avec la bibliothèque d'animation  Anime.js
anime.timeline()					// Les timelines permettent de synchroniser plusieurs animations ensemble
									// Par défaut, chaque animation ajoutée à la ligne de temps commence après la fin de l'animation précédente
  .add({							// Ajoute des animations à une timeline
    targets: '.ml1 .letter',		// Précise où trouver les éléments que l'on veut animer (ici à l'aide d'un sélecteur CSS)
    scale: [0.3,1],					// Anime automatiquement la propriété de transformation d'échelle de l'élément
    opacity: [0,1],
    translateZ: 0,					// Permet de déplacer un élément selon l'axe z de l'espace tridimensionnel
    easing: "easeOutExpo",			// Les fonctions "easing" définissent la vitesse à laquelle un paramètre change en fonction du temps
    duration: 600,					// Définit la durée de l'animation en millisecondes
    delay: (el, i) => 70 * (i+1)	// Définit le délai en millisecondes de l'animation (combien de temps avant qu'elle ne démarre)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',				// L'animation commence 875ms avant la fin de l'animation précédente
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
	
function myScrollTo(id) {
	var e = document.getElementById(id);	// Renvoie un objet Element représentant l'élément dont la propriété id correspond à la chaîne de caractères spécifiée
	var box = e.getBoundingClientRect();	// Retourne la taille d'un élément et sa position par rapport à la fenêtre de visualisation
	var k;
	for (k = 0; k < 10; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 100) + ")", 20 * k);	// setTimeout() appelle une fonction ou évalue une expression après un nombre déterminé de millisecondes
	for (k = 10; k < 20; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 50) + ")", 20 * k);
	for (k = 20; k < 30; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 25) + ")", 20 * k);
	for (k = 30; k < 40; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 50) + ")", 20 * k);
	for (k = 40; k < 50; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 100) + ")", 20 * k);
	}

function openNav() {
	  document.getElementById("mySidebar").style.width = "250px";
	  document.getElementById("main").style.marginLeft = "250px";
	}

	function closeNav() {
	  document.getElementById("mySidebar").style.width = "0";
	  document.getElementById("main").style.marginLeft= "0";
	}

function openLink(url) {
	document.location.href = url;
	return true;
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
	myScrollTo("band-img");
}

var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 4000); // Change image every 4 seconds
}
// When the user clicks on <div>, open the popup
function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
</script>
