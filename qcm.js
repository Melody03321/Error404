var numQues = 9;
var numChoi = 2;

var answers = new Array(9), comm = new Array(9);
answers[0] = "Non"
answers[1] = "Non"
answers[2] = "Non"
answers[3] = "Non"
answers[4] = "Oui"
answers[5] = "Non"
answers[6] = "Non"
answers[7] = "Oui"
answers[8] = "Non"
answers[9] = "Non"
comm[0]= "Les énergies renouvelables sont plus rapides à construire et moins coûteuses sur le moyen-long terme."
comm[1]= "Cette technologie paraît parfaite pour certains secteurs industriels fortement émetteurs mais il ne répond pas à l’enjeu de réduire les émissions. L’élimination du carbone de l’atmosphère, par le biais de puits naturels ou d’options technologiques, doit être considérée comme un complément aux efforts de réduction des émissions, et non comme une alternative. ce n’est pas une solution de grande échelle, ce qui est pourtant nécessaire vue l’urgence de la crise climatique."
comm[2] = "Face au captage et au stockage du CO2, il n’y a pas une alternative mais plutôt un bouquet de solutions de réduction des émissions de gaz à effet de serre, qui doivent être développées au maximum avant de déployer cette technologie : efficacité énergétique et décarbonation des sources d’énergie utilisée, développement de l’économie circulaire ou encore évolution des procédés pour la production de matériaux moins carbonés."
comm[3] = "Pour le Réseau Action Climat, le label bas carbone présente de nombreux risques. Il valorise notamment la capture du CO2, qui permet non pas de réduire les émissions du secteur mais plutôt de les compenser. Cela permet à l’agriculture industrielle de grande échelle de peu modifier son fonctionnement. Or, la séquestration de carbone dans les sols : ça peut relâcher le CO2 absorbé, et ce déstockage n’est pas toujours maîtrisable."
comm[4] = "Pour le Réseau Action Climat, cette transition se fera par des moyens plus stables et de plus grande ampleur, comme  la réforme de la PAC (Politique Agricole Commune) au niveau européen, dont les mécanismes d’aide sont déjà en place. Ces mesures devront être massivement orientées vers la transition de l’élevage, l’agriculture biologique, et le soutien aux légumineuses, haies et prairies."
comm[5] = "Les agrocarburants basés sur des cultures alimentaires  nécessitent d’exploiter davantage de terres agricoles ne permettant pas de réduire de manière significative les émissions GES et dans certains cas de figure, ils pourraient les augmenter. Ces phénomènes de déforestation ou de dégradation d’écosystèmes constituent une source importante d’émissions de GES, et participent très fortement à la destruction de la biodiversité."
comm[6] = "Nous avons tous appris au collège que les arbres ont la propriété d'absorber le dioxyde de carbone, cependant, la compensation complète des émissions par la plantation d'arbres n'est pas réaliste. Par exemple, en 2022 les émissions de gaz à effet de serre, selon le Citepa (organisme mandaté pour réaliser l'inventaire français) estime les émissions à 408 millions de tonnes équivalent CO2. Si l'on utilise l'estimation moyenne de 22 kilogrammes de CO2 absorbés par an par arbre, alors on pourrait estimer le nombre d'arbres nécessaires comme suit : 40 milliards de tonnes * (1 tonne / 1 000 kg) * (1 arbre / 22 kg) ≈ 1,818 milliards d'arbres."
comm[7] = "L'Agence internationale de l'énergie (AIE) affirme que les énergies renouvelables ont le potentiel de répondre à une grande partie de nos besoins énergétiques mondiaux avec des investissements et des progrès technologiques. Cependant la rapidité de la transition dépend des politiques gouvernementales de chaque pays."
comm[8] = "Le GIEC indique que la combustion des énergies fossiles, comme le charbon, le pétrole et le gaz naturel, contribue de manière significative aux émissions mondiales de gaz à effet de serre. On ne vous apprend rien MAIS nous avons quelques chiffres (STONKS).En 2019 l’émission totale mondiale était de 42,2 GIGA TONNE de CO2."
comm[9] = "Il faut savoir que pour construire une voiture électrique, il faut de nombreux composants électroniques, donc cela nécessite souvent d'importer ces composants par bateau, de plus, il faut ensuite importer la voiture en France. Ensuite, lors de l’utilisation de la voiture, nous devons la recharger. Ce recharge utilise de l’électricité pas toujours verte produisant du CO2. Les voitures électriques utilisent aussi des batteries qui ont une durée de vie limitée. Lors du changement de la batterie, les batteries usagées ne peuvent pas être recyclées et contiennent des produits très polluants."


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
	
	score = Math.round(score/(numQues+1)*100);
	form.percentage.value = score + "%";

	var correctAnswers = ""; 
	for (i=1; i<=numQues+1; i++) {
		correctAnswers += i + ". " + answers[i-1] + "\r\n" + comm[i-1] + "\r\n";
	}
	form.solutions.value = correctAnswers;
}
