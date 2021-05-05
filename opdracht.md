"# Jeroen-Sebastaan--Filmzoeker" 
Waar moet ik starten? Hoe moet ik beginnen? Check ons stappenplan (let op: zie onderstaande als een leidraad. Het is geen waarheid, het is een suggestie. Je hoeft je er niet exact aan te houden):

    Begin met het opzetten van je HTML structuur. Wat heb je allemaal nodig?
        Navigatie <nav> met meerdere radiobuttons die allemaal id, name, value en type nodig hebben. Als je denkt: huh had ik dat moeten weten? Dit is allemaal standaard template code die hoort bij een radiobutton. Dat vind je in de documentatie over radiobuttons. Zie mozilla.
        De radiobuttons hebben allemaal een <label> nodig met daar in de titel van de radiobutton, in dit geval dus een naam van een filter.
        Het is een HTML structuur: dat betekent dat de invulling/het inkleuren nog niet volledig hoeft te kloppen. Start met de elementen.
        Onder de <nav> wil je een <main> maken of een container <div> waar alle films in komen te staan. We maken een container omdat we de plaatjes waarschijnlijk willen gaan uitlijnen. Dan moeten ze natuurlijk wel in hun eigen containertje zitten.
        Maak in de container een een <ul>.
        Je gaat straks met Javascript <li> elementen toevoegen aan deze <ul>, dus het is top als je deze <ul> alvast een goeie id kan geven, waar je hem straks mee kunt selecteren.
        Optioneel: maak als je wilt nog een header van je pagina en een footer (maar dat hoeft niet)

    Maak 2 javascript bestanden, 1 met de lijst met movies (die je in een variable movies stopt) en 1 voor de rest van je scripts. En voeg deze toe met script tags aan je html pagina. Let op! De ene file gebruikt de ander file. Dus volgorde matters.

    Check in je scripts file of je alle movies kunt loggen naar je console. Dit zijn de films waar je mee gaat werken. Bekijk de structuur van de data, zodat je een idee hebt van wat je allemaal kunt gaan gebruiken.

    Oke, laten we eerst eens kijken op welke manier we met JavaScript alle beschikbare films op het scherm (dus in de DOM) kunnen krijgen. Het mooiste is als je een functie schrijft die je later ook nog zou kunnen hergebruiken voor je gefiltered movieslist. DUS: schrijf een functie addMoviesToDom die 1 argument krijgt: de films. De films die deze functie krijgt, plempt 'ie netjes 1 voor 1 als li aan de ul vast die je zojuist hebt gemaakt (in stap 1).

        Stap 1: pak de ul dmv id die je zojuist met het maken van je HTML structuur zelf gemaakt hebt.

        Stap 2: itereer over alle movies in de movie list heen, die deze functie als argument meekrijgt. Je gaat als eerste elke movie in de lijst "omzetten naar" een compleet <li> element (een DOM node) met een .map functie. Die stoppen we vervolgens in een variabel. Het resultaat van de .map functie gaat dus een array met <li> elementen zijn.

        Stap 3: in de map functie, voor elke movie, maak een li en stop er even tijdelijk de titel van de movie in als string (we gaan het later wel een plaatje maken).

        Stap 4: buiten de .map functie: zet de hele verse gemaakte array met <li>'s in de DOM door elke li aan de ul te plakken. Onze suggestie: gebruik een .forEach loop.

        Stap 5: check even of je nu een hele mooi lijst met filmtitels op je scherm krijgt.

        Stap 6: nu je de titel hebt getoond in de DOM, wordt de movie poster natuurlijk simpel! In plaats van een text aan de li toevoegen, ga je nu een img maken, waarvan de src het attribute movie.Poster wordt*. *let op de data van de films is met hoofdletters gemaakt (je kan meestal niks doen aan het format waarin je jouw data krijgt).

        Nice! Nu je alle films als plaatje op je scherm hebt, laten we gaan kijken hoe we die films kunnen gaat filteren. Maar voordat we dat doen laten we even een best practice meteen in gang zetten: we gaan de filmlijst pas in de DOM zetten op het moment dat de content geladen is. Met andere woorden, je wilt de addMoviesToDom(movies) pas callen nadat het document geladen is. Zie ook nog:

        DOM: De DOM veranderen, wacht tot de pagina geladen is

    Oke, dan nu echt, we gaan iets doen op het moment dat er geklikt wordt op een van de radiobuttons. Er zijn 5 verschillende buttons waar op geklikt kan worden, waar allemaal een Eventlistener aan vastgemaakt moet worden. Hmm.... dat klinkt als herhaaldelijk werk.... Daar houden we niet van ⇒ array methods! Maak alle radiobuttons compleet in je HTML (het moeten er 5 zijn). Geef ze allemaal secuur en consistent juiste waardes voor de type, id, name en value . Het is handig als je die allemaal in lower-case houdt, e.g "princess-films". Dat is prettig werken. De naam in de label tags kun je uiteraard wel hoofdletters schrijven.

    Maak een functie addEventListeners(), deze functie wordt afgevuurd op het moment dat de content is geladen, en voegt een event toe aan elk van de radiobuttons.
        Selecteer alle radiobuttons hoe jij dat wilt, bijvoorbeeld doordat ze allemaal de name film-filter gekregen hebben.
        itereer vervolgens over de elementen en maak er een event aan vast.
        Welk event heb je nodig? Allereerst zou je misschien aan het click event denken, maar bij radiobuttons geeft een klik vaak een onverwacht effect. De klik wordt namelijk ook geregistreerd als je niet het bolletje hebt aangevinkt. Dus: gebruik het change event. Dan gebeurt er pas iets als het bolletje van de radiobutton aan of uit is gevinkt.
        Gebruik console.log() om te checken of je event werkt.

    Maak een functie handleOnChangeEvent() met als argument het woord "event" die afgevuurd wordt als er een change heeft plaatsgevonden bij een van de radiobuttons. Ergo: de radiobutton is aangevinkt.

    In de handleOnChangeEvent() functie, gebruik console.log(event.target) om uit te vinden op welke radio button er geklikt is. Google even hoe je een event doorspeelt naar een functie en wat het event object precies is (laat je niet overweldigen door de vele mogelijkheden. Je wilt event.target gebruiken, zoals je ook in heel veel voorbeelden online gaat terug zien). Check en controleer of je in deze functie het juiste element ontvangt dat je verwacht wanneer je de radiobutton aanvinkt.

    Wanneer het de "latest movies" button is aangevinkt wil je iets gaan doen, of wanneer het 1 van alle andere filter is aangeklikt wil je iets anders gaan doen. Poeh, dat klinkt als veel opties... We kunnen het oplossen met if...else if... else if.... Dat kan. De schoonste oplossing hier is een switch() statement maken.

    Maak in de handleOnChangeEvent() functie een switch statement, die iets gaat doen afhankelijk van welk filter is aangeklikt. Het onderwerp van switch kan bijvoorbeeld zijn event.target.value , dat is het value attribute van je input veld, die je zojuist zelf zo'n fijne lowercase waarde hebt gegeven hierboven. Maak voor je 5 verschillende filters, ook 5 verschillende cases en een default case, bijvoorbeeld: "princess-films", "x-men-films", "avenger-films", "batman-films", "latest-films". Schrijf voor elke case, voor de break statement, even een console.log("hey ik ben {vul
    film naam in} film"). En check of je switch goed werkt en doet wat je verwacht. Klik lekker rond op die radiobuttons.

    Je voel hem al aangekomen, he? Je wil nu in plaats van console.loggen ook echt iets gaan doen in je switch statement. Maak een functie die filterMovies heet met als argument wordInMovieTitle. Begin met 1 implementatie, bijvoorbeeld princess-films. In je switch statement gaat de functie filterMovies() af, met als argument het juiste woord om op de filteren. In dit geval dus bijvoorbeeld filterMovies("Princess") .

    Schrijf de filterMovies functie. Deze gaan we niet helemaal voor je uitschrijven, maar wat je wilt doen: check of het woord voorkomt in de titel van een movie. Je houdt nu een lijst met gefilterde films over. Roep als laatste stap in deze filterMovies , de functie aan van stap 4 addMoviesToDom() maar dan nu met je gefilterde filmlijst, in plaats van de hele filmlijst.

    Je filter functionaliteit werkt. (Dat heb je gecheckt) Voeg de filterMovies() functie nu met het juiste argument toe aan alle andere relevante switch statements.
    Er blijft nog 1 case over namelijk filter the latest movies. Maak hier een nieuwe functie voor filterLatestMovies deze functie krijgt geen argumenten, maar op het moment dat deze wordt aangeroepen plaats deze functie standaard alleen de films in de DOM die van 2014 of nieuwer zijn. Doe die op dezelfde manier als filterMovies(), alleen de filtermethode is anders.
    Je zal merken dat er een klein bugje in zit op deze manier, alle gefilterde movies worden aan elkaar geplakt. Je wilt dus waarschijnlijk op het moment dat je addMoviesToDom() aanroept, als allereerst alle films die er tot nu toe in de ul staan eerst verwijderen. En daarna de nieuwe gefilterde lijst er pas in plakken.
    Werken je filters?? Mooi dan alleen nog de laatste requirement: naast een <img> tag wil je de posters van de films wrappen in een <a> met als href de link van IMDB + de imdbID ....Hmm... dat wordt misschien wel een hele lange onleesbare functie zo in die forEach loop... Schrijf dus een aparte functie die imdbID van de movie als argument krijgt en de juiste URL returned (je mag zelf een naam bedenken). Deze zet je vervolgens in de href attribute van de <a>.
    De hierarchie die we hier dus gaan maken is: ul > li > a > img
    Klaar met je functionaliteiten? Dat kun je gaan stylen! :)
