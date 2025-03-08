let currentStep = 0;
let friendshipPoints = 0;
let affectionPoints = 0;
let conflictPoints = 0;

const story = [
    {
        text: "Explosive Emotions: A Katsuki Bakugo Coming of Age Love Story",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
        backgroundImage: "images/start.webp",
        choices: [
            { text: "Play", nextStep: 1 },
            { text: "About the Developers", nextStep: 'aboutPage' },
        ]
    },
	{
        text: "In the year 2400, in a world full of superpowered individuals, Katsuki Bakugo, a hot-headed student at U.A. High, faces the pressure of hero training and an unexpected challenge: his growing feelings for his childhood rival, Izuku 'Deku' Midoriya.",
        characterImage: "images/bakugo_uni.png",
		characterImageTwo: "images/placeholder.png",
        backgroundImage: "images/UA.webp",
        choices: [
            { text: "Continue.", nextStep: 2 },
        ]
    },
	{
	text: "How to Play:" + "\n" + "1. Make Choices: At key moments, choose Bakugo's actions. Your decisions will impact his emotions and relationships." + "\n" + "2. Track Points: Your choices affect four key points: Tension, Conflict, Friendship, and Affection" + "\n" + "3. Reach an Ending: Based on your decisions, Bakugo will experience one of three endings—play to find out!",
        characterImage: "images/bakugo_uni.png",
		characterImageTwo: "images/placeholder.png",
        backgroundImage: "images/UA.webp",
        choices: [
            { text: "Start your adventure!", nextStep: 3, points: { friendship: 0, affection: 0, conflict: 0 } },
        ]
    },
    {
        text: "As the sun rises over U.A. High School, the training grounds buzz with the energy of aspiring heroes. Among them, Katsuki Bakugo stands out, his fiery determination evident as he unleashes a series of powerful explosions. But today, something feels different. A familiar figure catches his eye—Izuku Midoriya, his childhood rival, is training harder than ever. Something is different today. Bakugo must decide how to approach the situation." + "\n" + "\n" + "What will Bakugo do?",
        characterImage: "images/bakugo_rest.png",
		characterImageTwo: "images/deku_hero.webp",
        backgroundImage: "images/training.jpg",
		choices: [
            { text: "Yell at him to train harder.", nextStep: 4, points: { friendship: 0, affection: 0, conflict: 2 } },
			{ text: "Compliment his progress.", nextStep: 5, points: { friendship: 2, affection: 1, conflict: 0 } },
			{ text: "Ignore him and focus on his own training.", nextStep: 6, points: { friendship: 0, affection: 0, conflict: 0 } }
        ]
    },
    {
        text: "Izuku is startled as Bakugo’s voice echoes across the training grounds, leading to a heated tension settling between them.",
        characterImage: "images/bakugo_mad.png",
		characterImageTwo: "images/deku_awkies.png",
        backgroundImage: "images/training.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 7 }
        ]
    },
    {
        text: "Izuku is surprised but happy, opening a dialogue where Deku feels encouraged and they share a moment of camaraderie.",
        characterImage: "images/bakugo_fired.png",
		characterImageTwo: "images/deku_happyhero.png",
        backgroundImage: "images/training.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 7 }
        ]
    },
    {
        text: "Nothing is changed, and the scene switches between Bakugo and Midoriya both training rigorously. This leads to isolation, where Bakugo misses an opportunity to connect with Deku, setting the stage for potential misunderstandings later.",
        characterImage: "images/bakugo_hero.png",
		characterImageTwo: "images/deku_hero.webp",
		backgroundImage: "images/training.jpg",
        choices: [
            { text: "Continue to the next scene", nextStep: 7 }
        ]
    },
    {
        text: "U.A. High’s iconic Sports Festival. The students face off in a series of intense events designed to test their physical abilities, teamwork, and mental toughness. The entire school, along with pro heroes, is watching. For Bakugo, this is more than just a competition — it’s a chance to prove he’s the best." + "\n" + "\n" + "What will Bakugo do?",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/sportsfest1.jpg",
        choices: [
            { text: "Go all-out to win, ignoring Deku.", nextStep: 8, points: { friendship: 0, affection: 0, conflict: 2 } },
			{ text: "Let Deku take the lead in a particular event.", nextStep: 9, points: { friendship: 1, affection: 1, conflict: 0 } },
			{ text: "Challenge Deku directly during the event.", nextStep: 10, points: { friendship: 0, affection: 2, conflict: 0 } }
        ]
    },
    {
        text: "Bakugo's competitive drive dominates. He wins the event, but the distance between him and Deku grows. Bakugo suppresses any emotions, focusing solely on beating Deku. This may make Deku frustrated but also conflicted about Bakugo's harsh exterior.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/deku_pe.png",
		backgroundImage: "images/sportsfest2.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 11 }
        ]
    },
    {
        text: "Bakugo lets Deku step up in one event, begrudgingly acknowledging his rival’s growth. This choice is a rare moment of vulnerability for Bakugo, hinting at a growing respect for Deku’s abilities.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
        backgroundImage: "images/deku_win.webp",
        choices: [
            { text: "Continue to the next scene.", nextStep: 11 }
        ]
    },
    {
        text: "A heated, direct competition with Deku. Bakugo and Deku push each other to their limits, and despite the intense rivalry, they both gain a new level of respect for each other’s strength and determination.",
        characterImage: "images/deku_ballistic.png",
		characterImageTwo: "images/backugo.png",
		backgroundImage: "images/sportsfest3.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 11 }
        ]
    },
	{
        text: "A secluded wilderness where U.A. students undergo survival training. A surprise villain attack tests their limits, and Bakugo has to make a decision: face the challenge alone or rely on others, especially Deku." + "\n" + "\n" + "What will Bakugo do?",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/camp.jpg",
        choices: [
            { text: "Try to handle the danger on his own, refusing help from Deku.", nextStep: 12, points: { friendship: 0, affection: 0, conflict: 2 } },
			{ text: "Work together with Deku to defeat the villains.", nextStep: 13, points: { friendship: 1, affection: 2, conflict: 0 } },
			{ text: "Push Deku aside to protect him.", nextStep: 14, points: { friendship: 1, affection: 0, conflict: 1 } }
        ]
    },
    {
        text: "Bakugo’s stubbornness leads to a dangerous situation, but he barely escapes by relying on his Quirk. Deku, worried for Bakugo, tries to intervene, but Bakugo pushes him away. This deepens their emotional distance.",
        characterImage: "images/deku_sweat.png",
		characterImageTwo: "images/bakugo_tank.png",
        backgroundImage: "images/forest1.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 15 }
        ]
    },
    {
        text: "In a rare moment of cooperation, Bakugo and Deku take on the villain threat as a team. While Bakugo’s pride still holds him back from fully trusting Deku, the teamwork allows them to succeed.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/bkdk.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 15 }
        ]
    },
    {
        text: "Bakugo tries to protect Deku by taking the brunt of the danger himself, showing his determination and care in his own way, but it only deepens the tension between them as Deku feels rejected and Bakugo’s pride keeps him isolated.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/bkdk_push.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 15 }
        ]
    },
	{
        text: "The annual U.A. Festival, where students perform and showcase their talents. The Festival gives Bakugo a chance to reflect and relax, but it’s also a time where his emotions toward Deku come to the forefront. He may try to distract himself, but his feelings for Deku are impossible to ignore." + "\n" + "\n" + "What will Bakugo do?",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/festival1.jpg",
        choices: [
            { text: "Try to impress Deku by showcasing his Quirk.", nextStep: 16, points: { friendship: 2, affection: 0, conflict: 0 } },
			{ text: "Take a break with Deku and try to relax.", nextStep: 17, points: { friendship: 0, affection: 2, conflict: 0 } },
			{ text: "Confront Deku about something that’s been bothering him.", nextStep: 18, points: { friendship: 1, affection: 0, conflict: 1 } }
        ]
    },
    {
        text: "Bakugo attempts to impress Deku with an over-the-top display of his power. It’s an impressive show that leaves Deku in awe, fueling a deeper platonic admiration.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/festival2.jpg",
		choices: [
            { text: "Continue to the next scene.", nextStep: 19 }
        ]
    },
    {
        text: "Bakugo takes a moment to unwind with Deku, stepping away from the bustling atmosphere. It’s a quiet scene where they share an unexpected moment of peace. Bakugo, still defensive, can’t fully let his guard down but enjoys the moment.",
		characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/bkdk_fun.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 19 }
        ]
    },
    {
        text: "Bakugo confronts Deku with frustration about Deku’s interactions with Todoroki. This leads to a heated exchange, but also opens up an honest moment of vulnerability where Bakugo admits his own internal conflict.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/bkdk_argue.jpg",
		choices: [
            { text: "Continue to the next scene.", nextStep: 19 }
        ]
    },
	{
        text: "A real-world scenario where the students take part in their internship programs with licensed pro heroes. Bakugo is placed with a high-profile hero, but the experience isn’t as glamorous as he imagined. Meanwhile, Deku and Todoroki have different experiences, leading to an interesting point of reflection for Bakugo." + "\n" + "\n" + "What will Bakugo do?",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/inter.jpg",
        choices: [
            { text: "Show off his skills to the pro heroes.", nextStep: 20, points: { friendship: 0, affection: 0, conflict: 2 } },
			{ text: "Help Deku when he’s in trouble.", nextStep: 21, points: { friendship: 0, affection: 2, conflict: 0 } },
			{ text: "Go it alone, showing reluctance to trust others.", nextStep: 22, points: { friendship: 0, affection: 0, conflict: 1 } }
        ]
    },
    {
        text: "Bakugo throws himself into the internship, determined to prove his worth to Endeavor. He is impressed, but also warns Bakugo that heroism is about more than just power. Bakugo brushes it off, but deep down, he realizes that his desire to impress might be clouding his judgment.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/bakugo_power.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 23 }
        ]
    },
    {
        text: "In the midst of a battle, Bakugo sees Deku caught in a dangerous situation. Despite his usual pride and reluctance to work with others, Bakugo steps in and saves him. It’s not the typical Bakugo move, but his actions speak louder than words. Deku is grateful, and Bakugo feels a rare warmth that he’s not used to, realizing that working together might not be so bad.",
		characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/bkdk_angst.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 23 }
        ]
    },
    {
        text: "Bakugo insists on handling things solo, ignoring his teammates and even his pro hero’s advice. This leads to a tense situation where his overconfidence nearly gets him into trouble. While he’s ultimately able to get out of it, Bakugo realizes that his pride might be his biggest weakness.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/ooo_conflict.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 23 }
        ]
    },
	{
        text: "A private, quiet moment where Bakugo is alone, reflecting on the chaos of the school year so far. He’s sitting on the rooftop of U.A., staring at the sunset. After the sports festival, training camp, and other high-stress events, he’s given a moment to reflect on everything that’s happened. He could think about Deku, Todoroki, his goals as a hero, and whether or not he’s ready to confront his feelings." + "\n" + "\n" + "What will Bakugo do?",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/brooding.jpg",
		choices: [
            { text: "Confess his feelings for Deku.", nextStep: 24, points: { friendship: 0, affection: 2, conflict: 0 } },
			{ text: "Stay silent, but share a meaningful, quiet moment.", nextStep: 25, points: { friendship: 1, affection: 0, conflict: 0 } },
			{ text: "Confront Deku about his frustrations.", nextStep: 26, points: { friendship: 0, affection: 0, conflict: 1 } }
        ]
    },
    {
        text: "Bakugo opens up, admitting that he’s been holding onto feelings of respect and something deeper for Deku. It’s a moment of vulnerability for him, something he rarely shows. Deku, though surprised, listens carefully, and they share an understanding. It’s not a grand confession, but it’s a significant step in their evolving relationship.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/confess.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 27 }
        ]
    },
    {
        text: "Bakugo says nothing, but his presence says it all. Deku, sensing the weight of the moment, sits beside him in quiet understanding. Neither says much, but the silence speaks volumes. They’re in each other’s company, sharing a rare peaceful moment after everything they’ve been through.",
		characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/quiet1.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 27 }
        ]
    },
    {
        text: "Bakugo, unable to hold back his frustrations any longer, confronts Deku about something that’s been bothering him. The conversation is heated, filled with tension and raw emotions. Bakugo’s words sting, but it opens up a real dialogue between the two, one that might not solve everything but helps them both understand each other better.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/confront.jpg",
        choices: [
            { text: "Continue to the next scene.", nextStep: 27 }
        ]
    },
	{
        text: "As the night settles in, Deku stands quietly on the rooftop, still feeling the weight of his conversation with Bakugo. The words, the tension, the brief moments of understanding — it all lingers in his mind. He tries to organize his thoughts, but everything feels tangled." + "\n" + "\n" + "What had Bakugo meant by all that? Was it just a fleeting moment of vulnerability, or was there something more to it? Deku can’t quite place it, but he knows something has shifted. The air between them feels different, like an unspoken understanding that neither of them fully grasped yet." + "\n" + "\n" + "He looks up at the stars, lost in thought. There are so many unanswered questions, so many things he doesn’t know. But one thing is clear: whatever happens next, things between him and Bakugo have definitely changed.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/deku.jpg",
        choices: [
            { text: "What will Deku do?", nextStep: 'determineEnding'  }
        ]
    },
	{
        text: "BAD ENDING: Bakugo's jealousy and anger lead him to push Deku away. In a moment of vulnerability, Deku turns to Ochaco for comfort. The emotional support she provides leads them to grow closer, and eventually, they develop a relationship. Deku finds a sense of peace in her presence, something he hadn't realized he needed." + "\n" + "\n" + "Meanwhile, Bakugo watches from the sidelines, his feelings of regret intensifying. His jealousy, combined with his inability to admit his emotions, leaves him feeling isolated and angry at himself. The distance between him and Deku grows, and Bakugo’s loneliness deepens as he realizes he may have pushed away the one person who could truly understand him.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/izuocha.jpg",
		choices: [
            { text: "Restart the game", nextStep: 0 },
        ]
    },
    {
		text: "NEUTRAL ENDING: Bakugo and Deku’s rivalry slowly turns into a mutual respect, and their friendship deepens. Though Bakugo still carries his fiery spirit, there’s no longer the same tension between them. They support each other, each growing stronger as heroes and individuals, without the need for constant competition." + "\n" + "\n" + "As time passes, Deku and Todoroki’s bond grows, eventually blossoming into a relationship. Bakugo watches from the sidelines, still focused on his own goals, but quietly proud of how far they’ve all come. They’ve found their own paths, and though different, they each continue to support one another from afar.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/tododeku.jpg",
		choices: [
            { text: "Restart the game", nextStep: 0 },
        ]
    },
    {
        text: "GOOD ENDING:After years of tension and silent understanding, Bakugo finally admits his feelings to Deku. It’s a vulnerable moment, one that surprises them both. Deku listens carefully, his own feelings coming to light as he realizes how much Bakugo means to him too. What was once rivalry transforms into something deeper." + "\n" + "\n" + "They become a couple, their bond growing stronger with each passing day. Though their relationship isn’t without challenges, they support each other, both in their journeys as heroes and in their personal growth. Together, they push each other toward their full potential, creating a partnership built on mutual respect, trust, and a shared future.",
        characterImage: "images/placeholder.png",
		characterImageTwo: "images/placeholder.png",
		backgroundImage: "images/bakudeku.jpg",
		choices: [
            { text: "Restart the game", nextStep: 0 },
        ]
    },

];


function startGame() {
    friendshipPoints = 0;
    affectionPoints = 0;
    conflictPoints = 0;
	
	currentStep = 0;
	
    updateScene(currentStep);
}

function updateScene(step) {
    const scene = story[step];

    if (!scene.backgroundImage) {
        console.error('Background image missing for step:', step);
        return;
    }

    const backgroundElement = document.getElementById('background');
    backgroundElement.style.backgroundImage = `url(${scene.backgroundImage})`;

    if (!scene.characterImage) {
        console.error('Character image missing for step:', step);
        return;
    }

    const characterElement = document.getElementById('character');
    characterElement.style.backgroundImage = `url(${scene.characterImage})`;
	
	if (!scene.characterImageTwo) {
        console.error('Character image missing for step:', step);
        return;
    }

    const characterElementTwo = document.getElementById('characterTwo');
    characterElementTwo.style.backgroundImage = `url(${scene.characterImageTwo})`;

    document.getElementById('dialogue-text').innerText = scene.text;

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    scene.choices.forEach(choice => {
        const choiceBtn = document.createElement('button');
        choiceBtn.classList.add('choice-btn');
        choiceBtn.innerText = choice.text;
        choiceBtn.onclick = () => {
            if (choice.nextStep === 'aboutPage') {
                window.location.href = 'about.html'; 
            } else if (choice.nextStep === 'determineEnding') {
			determineEnding();
			} else if (choice.nextStep === 0) {
			startGame();
			updatePointsDisplay();
			} else {
				currentStep = choice.nextStep;
				updateScene(currentStep);
				
				friendshipPoints += choice.points.friendship;
				affectionPoints += choice.points.affection;
				conflictPoints += choice.points.conflict;
				
				console.log(`Friendship: ${friendshipPoints}, Affection: ${affectionPoints}, Conflict: ${conflictPoints}`);

				
				updatePointsDisplay();
			}	
			
        };
        choicesContainer.appendChild(choiceBtn);
    });
}

function determineEnding() {
    let highestPoints = Math.max(conflictPoints, friendshipPoints, affectionPoints);
    
    if (highestPoints === conflictPoints) {
        currentStep = 28;
    } else if (highestPoints === friendshipPoints) {
        currentStep = 29;
    } else if (highestPoints === affectionPoints) {
        currentStep = 30;
    }

    updateScene(currentStep);
}


function updatePointsDisplay() {
    const pointsDisplay = document.getElementById('points-display');
    pointsDisplay.innerHTML = `
        Conflict: ${conflictPoints} | 
        Friendship: ${friendshipPoints} | 
        Affection: ${affectionPoints} | 
    `;
}

window.onload = startGame;
