# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Roan Boersma

  #### Je startniveau:
  Rood

  #### Je focus:
  Responsive 1a/b, als alles soepel gaat 1c, en als dan alles echt heel makkelijk loopt ga ik voor responsive en surface
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
 [https://www.zalando.nl/heren-home/ ](https://www.zalando.nl/heren-home/)](https://www.zalando.nl/wardrobe-essentials-heren/?_rfl=en)

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepagina zalando mannen,
  De homepagina veranderd steeds dus het zal ongeveer de zelfde layout hebben met mogelijk andere kleuren en andere content. Dit is het geval door advertenties.
  <img src="readme-images/homepagina_mobile.png" alt="Homepagina mobile device">

  #### Screenshot(s) van de tweede pagina (small screen):
  Detail pagina voor item: STRIPED JACKET Unisex - Denim jacket - white van Blkvis. recommended items kunnen mogelijk overtijd aangepast worden. In dat geval zal ik een ander item als vervanging gebruiken.  
  <img src="readme-images/detailpagina_blkvis_item.png"  alt="Detail pagina voor item: STRIPED JACKET Unisex - Denim jacket - white van Blkvis.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  # Niet goed
  ### Navigatie & toetsenbord
  - Niet alle knoppen en links zijn bereikbaar met het toetsenbord.
  - De focus is niet altijd zichtbaar, waardoor je niet ziet waar je je bevindt.
  - Het hoofdmenu en submenu’s werken niet logisch: soms moet je pijltjestoetsen gebruiken in plaats van tab, wat verwarrend is.
    
  ### Bestelproces
  - Het volledig afronden van een bestelling zonder muis is niet mogelijk.
    <img src="readme-images/narrator_test_readme_image_2"  alt="Betaal venster van zalando, is niet bereikbaar zonder gebruik van pijl toetsen">
  - Adresinvoer werkt niet goed: na postcode kun je niet verder tabben naar een adreskeuze.
  - Bezorgopties en betaalmethodes zijn soms niet toegankelijk; keuzerondjes missen duidelijke labels of zijn helemaal niet te bereiken.

  ### Productpagina’s
  - Maatkeuze-opties hebben soms geen labels, waardoor de screenreader niet duidelijk kan voorlezen wat je selecteert.
  - Prijzen en productinformatie worden niet altijd correct voorgelezen.

  ### Links, knoppen & iconen
  - Sommige iconen (bijv. SVG’s) hebben geen beschrijving, waardoor je niet weet wat ze doen.
  - Texten worden soms dubbel voorgelezen, bijvoorbeeld bij de cookiebanner, ook wordt er veel onnodige informatie voorgelezen.
  - Soms worden headings overgeslagen.

  ### Visueel & design
  - Het contrast is op sommige plekken onvoldoende, waardoor teksten lastig te lezen zijn.
  - Er is geen dark mode, waardoor gebruikers altijd in de lichte weergave zitten.

  # Wel goed
  ### Productpagina’s zijn goed te navigeren
  - De productinformatie, zoals prijs, maat en kleur, wordt duidelijk voorgelezen door de screenreader.
  - De tabvolgorde is logisch, waardoor je goed door de verschillende secties van de pagina kan navigeren.
  
  ### Zoekfunctie is toegankelijk
  - De zoekbalk is goed bereikbaar met het toetsenbord en de screenreader leest de zoekresultaten duidelijk voor.
  <img src="readme-images/narrator_test_readme_image_1"  alt="Screenreader op de searchbalk met Blkvis ingevuld in de searchbar">
  - Filteropties zijn aanwezig en worden correct voorgelezen, hoewel ze soms wat uitgebreid zijn dit kan goed of slecht zijn.

  ### Algemene structuur en opmaak zijn overzichtelijk
  - De website maakt gebruik van duidelijke koppen en secties, waardoor je snel kunt navigeren naar het gewenste onderdeel.
  - Er is de mogelijkheid gegeven om lange carousels over te slaan.


    Content:
    - Ja
    - Ja
    Global code:
    - Nee
    <img src="readme-images/readme_validate_html.png"  alt="zo'n 166 html fouten volgens de checker">
    Er zijn zo;n 166 fouten volgens de checker
    - Ja
    - Ja
    - Ja
    Keyboard
    - Ja, maar niet altijd hetzeflde
    - Ja
    Mobile and touch
    - Ja
    - Ja
    - Ja
    - Ja
    Headings
    - Ja
    - Ja
    - Nee
    - Ja, gaat wel weer terug naar vorige headings
    Lists
    - Volgens mij wel ja
    Images
    - Ja
    - Ja
    - Ja
    - Ja
    Video
    -  Nee
    -  Ja
    -  Ja
    -  Nee
    Controls
    - Ja
    - Ja
    - Ja
    - Nee
    - Ja
    - Ja
   
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  Breakdown schets van de detail pagina
  <img src="readme-images/breakdown_schets_detail_pagina_volledig.jpg" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  Breakdown van een paar menu's op de detail pagina
  <img src="readme-images/breakdown_sketch_detail pagina_mobile_dynamish_element.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  - Alt tags zijn goed en discriptive.
  - Volgorde van h2 naar h3 en dergelijke elements wordt correct toe gepast.
  - Sommige tags die nu gebruikt worden zijn niet correct aangezien deze een eigen element hebben die daarvoor gebruikt kan worden denk aan, data, tijd, prijs.
  - 


  ### Agenda voor meeting
  samen met je groepje opstellen

  Roan   
  - Wat zijn de correcte elements voor: tijd, prijs, etc.
  - Gebruik van elements, is nu juist?
  - Is de nesting in de footer correct?
  - Heb ik de SVG's juist uitgevoerdt
  - Code voor invis class.

  
  Sidney
  
  Tyneisha 
  
  Lam 
  

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen


  - Een aantal elementen moeten binnen een unordered-list inplaats van hoe het nu staat, dit geld voor alle ul li items die momenteel in mijn footer staan.
<img src="readme-images/voortgangs_gesprek_1.jpg" alt="screenshot van een gedeelte code relevant tot vorig benoemde punt">
  
  - Pricing elements, time elements
<img src="readme-images/voortgangs_gesprek_1_2.jpg" alt="screenshot van een gedeelte code relevant tot vorig benoemde punt">

  -  Invis class is te vinden op brightspace
  -  Data element voor tijd / datum
  -  Verder gaat het de jusite kant op en moet ik gewoon lekker verder gaan met de HTML voor de tweede pagina, voordat ik aab de css ga werken.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  ###Roan:
  Font-face werkt niet



  ### Verslag van meeting

  Ga verder zoals je bezig bent.
  @font-face was niet juist gelinkt.
  Gebruik geen margin, dit zorgt voor vervelende problemen.
  

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen

   Content:
    - Ja
    - Ja
    Global code:
    - Nee
    <img src="readme-images/2.png" alt="tijdsnood">
    - Ja
    - Ja
    - Ja
    Keyboard
    - Ja
    - Ja
    Mobile and touch
    - Ja
    - Ja
    - Ja
    - Ja
    Headings
    - Ja
    - Ja
    - Ja
    - Ja
    Lists
    - Ja
    Images
    - Ja
    - Ja
    - Ja
    - Ja
    Video
    -  Ja
    -  Ja
    -  Ja
    -  N/A
    Controls
    - Ja
    - Ja
    - Ja
    - Ja
    - Ja
    - Ja
   

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  ##Roan: 
  Custom buttons voor video

  ### Verslag van meeting

  Geen oplossing voor de vraag, assistent docent wist hier de oplossing nier voor, moet zelf gaan zoeken.
  Verder ziet alles er met 1 blik prima uit, ga verder zoals je bezig bent.
  <del> inplaats van <s>
  
</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. [bron 1 voor de svg's zodat ik ze nogsteed kan aanpassen](https://www.svgviewer.dev/)
  2. [bron 2 (Grid info: ](https://www.youtube.com/watch?v=SIvCb7Ze2HA&t=982s)
  3. [bron 3 (Flexbox info:](https://www.youtube.com/watch?v=euEYZ4DtIG0&t=11064s)
  4. [bron 4 (Time element:](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time)

</details>
