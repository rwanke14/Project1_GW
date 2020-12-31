$(document).ready(function () {
	// Carousel time switch variables
	const elems = document.querySelector('.carousel');
	const duration = 6000; //milliseconds 

	// Initiate carousel transition
	M.Carousel.init(elems);

	// Boolean to randomize card flip
	var flip = Math.random() < 0.5;
	
	// Carousel loop function
	setInterval(function () {
		M.Carousel.getInstance(elems).next();
	}, duration);
	$(document).ready(function () {
	$('.carousel').carousel();
	});

	const settings = {
		"async": true,
				"crossDomain": true,
				// "url": "https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/",
				"method": "GET",
				"headers": {
					"x-rapidapi-key": "87b6f48f43mshd9aaace1d8eeaefp1a1912jsn1259fae457e2",
					"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com"
				}
			};

			// $.ajax(settings).done(function (response) {
			// 	console.log(response);
			// });

			$.getJSON('https://rws-cards-api.herokuapp.com/api/v1/cards', function (data) {
				console.log(data);
				cardData = data;
			});

			var cardData;

			function showCards(data) {
				$('#0').click(function() {
					if ($('#0').hasClass('flip')) {
						$('#0').removeClass('flip');
					}
					var randomCard = Math.floor(Math.random() * cardData.cards.length);
					console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
					cardImage = (cardData.cards[randomCard].name_short);
		
					$('#0').attr('src', './assets/card-images/' + cardImage + '.png');
					var flip1 = Math.random() < 0.5;
					if (flip1 === true) {
						$('#0').addClass('flip');
					}
				});

				$('#1').click(function() {
					if ($('#1').hasClass('flip')) {
						$('#1').removeClass('flip');
					}
					var randomCard = Math.floor(Math.random() * cardData.cards.length);
					console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
					cardImage = (cardData.cards[randomCard].name_short);
					$('#1').attr('src', './assets/card-images/' + cardImage + '.png');
					var flip2 = Math.random() < 0.5;
					if (flip2 === true) {
						$('#1').addClass('flip');
					}
				});

				$('#2').click(function() {
					if ($('#2').hasClass('flip')) {
						$('#2').removeClass('flip');
					}
					var randomCard = Math.floor(Math.random() * cardData.cards.length);
					console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
					cardImage = (cardData.cards[randomCard].name_short);
					$('#2').attr('src', './assets/card-images/' + cardImage + '.png');
					var flip3 = Math.random() < 0.5;
					if (flip3 === true) {
						$('#2').addClass('flip');
					}
				});
				};

				$('.ppfBtn').click(function (e) {
					e.preventDefault();
					$('.carousel').remove();
					var cardDiv = $('<div>');
					for (var i = 0; i < 3; i++) {
						var cardBack = $('<img src=./assets/card-images/card-back.jpg>');
						$(cardDiv).append(cardBack);
						$(cardBack).attr('id', [i]);
						$('#main').append(cardDiv);
					}
					showCards();
					// Button on slide 2 is pressed
					// Carousel is hidden. Card deck is displayed
					// User clicks card deck, cards shuffle
					// Card shuffle ends, interval stops, three card spread is displayed
					// Spread is shown with back facing
					// User clicks each card one by one to reveal (math.random)
					// User can click the card to bring info to display

				});

				$('.welcomeSlide').text('Welcome to the Tarot');
				$('.welcomeText').text('INSERT TAROT EXPLANATION HERE');
				// Insert background image for slide 1 or appropriate color palette 

				$('.ppfTitle').text('Past - Present - Future Spread');
				$('.ppfInfo').text('A classic spread. Use the tarot to explore your past, present, and future.');
				$('.btn').text('See my spread');

				/*

				First Page: 

					Header - 
					Navbar setting up title of page.
						- include small menu to connect the three pages we will have in case they want to move between
						- do we have an about page explaining our team and the page
					

					Body - have carousel and three slides explaining the process or what they get. Each slide has a button that lets you go to the next page to select deck.

					Footer - larger than navbar and lists out all the pages for links and you can add fake legal. You could put social media for fun but not have them lead anywhere?

				Second Page

					Nav and footer are the same.
					Change center container to as many sections we need to hold the various decks
						-drop down menu to select and select layout?
						-Tarot shuffle button on this page to move to next page?

				Third Page

					Nav and footer the same.
					Show the shuffle of cards.
					then layout the reading along with the layout the chose. 
					section explaining the reading
					section explaining each card and their meaning?
					section leading you back to the main page and starting over?

				Fourth Page 
					horoscope page?
					horoscope of the day - select yours and pop up your horoscope. 
				*/
});
