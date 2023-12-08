var numQues = 9;
var numChoi = 3;

var answers = new Array(9), comm = new Array(9);
answers[0] = "Arthur Scherbius"
answers[1] = "Alan Turing"
answers[2] = "Cinq"
answers[3] = "C"
answers[4] = "En 1923"
answers[5] = "The Bombe"
answers[6] = "À cause des tic-tac que produisait la machine lors de son fonctionnement."
answers[7] = "17 576"
answers[8] = "Une lettre dans toutes les lettres de l'alphabet sauf le 'A'."
answers[9] = "Boucles - Cribs"
comm[0] = "Arthur Scherbius dépose un brevet pour sa machine de chiffrement le 23 février 1918."
comm[1] = "C'est Turing : Rejewski est un Polonais qui a brisé le code une première fois avant que les Allemands ne compliquent le système et que les Britanniques ne s'emparent de l'affaire."
comm[2] = "Il y a trois rotors à choisir parmi cinq."
comm[3] = "La réponse A est le nombre d'années nécessaires pour tester toutes les combinaisons en en essayant une par seconde, et la réponse B est le nombre de clés possibles concernant le réglage des fiches."
comm[4] = "La réponse A est l'année du brevet d'Enigma et la réponse B est l'année de création de la Bombe de Turing"
comm[5]= "La réponse A est la machine conçue vers octobre 1938 par le cryptologue polonais Marian Rejewski pour déchiffrer les codes allemands de la machine Enigma. La 'Bombe' créée par Alan Turing s'est inspirée de cette machine. La réponse C désigne les sous-marins allemands des deux guerres mondiales."
comm[6] = "La machine produisait des tic-tac en fonctionnant. C'est Rejewski qui la nomma ainsi."
comm[7]= "17 576 combinaisons car 26x26x26=17 576."
comm[8]= "Une lettre devient une autre lettre dans toutes les lettres de l'alphabet sauf elle-même."
comm[9] = "Les chaînes étaient utilisées par Rejewski et son équipe."
function getScore(form) {
	var score = 0;
	var currElt;
	var currSelection;
	
	for (i=0; i<numQues; i++) {
		currElt = i*numChoi;
		for (j=0; j<numChoi; j++) {
			currSelection = form.elements[currElt + j];
			if (currSelection.checked) {
				if (currSelection.value == answers[i]) {
					score++;
				}
			}
		}
	}
	if ((quiz.check2.checked) == true && (quiz.check3.checked) == true && (quiz.check1.checked) == false)  {
				score++;
			}

	score = Math.round(score/(numQues+1)*100);
	form.percentage.value = score + "%";

	var correctAnswers = ""; 
	for (i=1; i<=numQues+1; i++) {
		correctAnswers += i + ". " + answers[i-1] + "\r\n" + comm[i-1] + "\r\n";
	}
	form.solutions.value = correctAnswers;
}
