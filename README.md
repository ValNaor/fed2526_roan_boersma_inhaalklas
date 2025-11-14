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

 ### Content

 - Er wordt geen jargon gebruikt, behalve wanneer het gaat om termen zoals de naam van een kledingstuk, het type kledingstuk of collecties van merken.
 - De alt-tags ontbreken soms volledig, en wanneer ze wel aanwezig zijn, zijn ze niet descriptief genoeg.
  <img src="readme-images/1.png">

 ### Global code

 - De HTML bevat veel fouten
  <img src="readme-images/3.png">
  <img src="readme-images/4.png">
 - De HTML bevat een lang-attribuut, die verandert afhankelijk van de taalkeuze.
 - <img src="readme-images/5.png">
 - De website heeft een h1 op de pagina. Semantisch is dit volgens mij correct, maar de h1 staat onderaan, wat ongebruikelijk is en het lastig maakt om dit in de inspector goed te lezen.
 - <img src="readme-images/6.png">
 - De viewport-zoom is niet disabled.
   <img src="readme-images/7.png">

 ### Keyboard

 - Er is een zichtbare focus-stijl aanwezig, maar het contrast is laag.
  <img src="readme-images/8.png">
 - De keyboard-focus volgt een logische volgorde, wat overeenkomt met de visuele orde.

 ### Mobile and touch
 - Ja, dat is mogelijk. Het werkt dan niet helemaal optimaal, maar functioneert wel.
  <img src="readme-images/9.png">
 - Er is geen horizontale scroll, tenzij dit bewust is toegepast.
 - Voor mij zijn de knoppen groot genoeg, maar voor iemand met grotere vingers kan dit een probleem vormen.
 - Ik klik niet per ongeluk op links of knoppen. Er blijkt dus voldoende ruimte te zijn om te scrollen.

 ### Headings
 - In het geheel wordt elke sectie correct geïntroduceerd, maar bij een aantal secties ontbreekt een h2. In plaats daarvan begint de sectie met een p of span-element.
  <img src="readme-images/10.png">
 - Er is maar één h1 per pagina. Bij sommige pagina's staat deze onderaan, zoals eerder benoemd.
 - De website slaat geen headings over, maar gebruikt ze wel op een aparte manier. Zo zitten er bijvoorbeeld een div en een span binnen een h2, in plaats van dat er correct een h2 gevolgd wordt door een h3.
   <img src="readme-images/11.png">

 ### Lists
  - De ul bevat de li-elementen als kinderen en wordt gebruikt voor de juiste content. Alleen wordt bijvoorbeeld geen nav-element gebruikt, maar een div om dit te wrappen.
    <img src="readme-images/12.png">
    
 ### Images

  - De afbeeldingen bevatten alt-tags die een duidelijke omschrijving van de foto geven.
    <img src="readme-images/13.png">
  - N/A
  - N/A
  - N/A
 
 ### Media
  - De video staat op autoplay, maar is wel gemute.
  - Alle media kan gepauzeerd worden.
  - Volgens mij bevat de video geen captions, maar het is waarschijnlijk meer bedoeld als decoratieve video.
  <img src="readme-images/15.png">
  - N/A

 ### Controls
  - Ja, het a element wordt correct gebruikt voor links.
  <img src="readme-images/16.png">
  - Links zien er over het algemeen uit als links, maar sommige links lijken eerder op buttons.
  - <img src="readme-images/14.png">
  - Alle controls hebben een focus-state.
    <img src="readme-images/8.png">
  - Voor buttons wordt het juiste element gebruikt
  - De website bevat skip-links, die alleen zichtbaar zijn wanneer ze gefocust zijn.
  - <img src="readme-images/17.png">
  - N/A
    
 ### Appearence
  - Nee
  - Het werkt, maar het ziet er niet bepaald mooi uit.
    <img src="readme-images/18.png">
  - De tekst kan worden vergroot tot 200%.
  - Alle informatie, behalve de focus, wordt op twee manieren overgebracht.

 ### Appearence
  - De animatie van de like-knop is vrij snel, maar vormt geen probleem.
  - N/A
  - Dit kan ik niet vinden.

 ### Color contrast
  - Alles heeft dezelfde kleur...
  - N/A
  - Dit kan ik niet vinden.
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

  - Ik heb de focus-styling verbeterd, zodat er duidelijk contrast is.
  - Ik heb per link minimaal twee manieren toegevoegd om aan te tonen dat deze in focus is.
  - Ik heb alle img's een alt tag toegewezen.
  - De video staat niet meer op auto play.
  - <Nav> wordt nu gebruikt waar dat nodig is

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

Het bijhouden van mijn read-me vond ik een stuk lastiger dan verwacht. Omdat ik dit onderdeel niet leuk vond, kostte het me veel meer tijd dan nodig; wat eigenlijk een klus van ongeveer dertig minuten had moeten zijn, voelde al snel als vier uur werk. Dit leidde tot frustratie en verminderde mijn motivatie. Tegelijkertijd merkte ik dat ik door mijn eigen wil om te leren veel van de inhoud goed heb kunnen toepassen. Door informatie uit video’s en de MDN-webdocs te halen, kon ik echt begrijpen wat ik had gedaan. Hierdoor kon ik deze kennis ook bij volgende momenten opnieuw gebruiken en effectief toepassen waar dat nodig was.

Ik weet ook van mezelf dat ik te veel bezig ben geweest met een aantal novelty-ideeën die wel heel tof waren, maar er wel voor hebben gezorgd dat ik een aantal andere onderdelen niet volledig heb kunnen afronden. Zo werken de pijlen bijvoorbeeld volledig op de detail.html, maar niet op de index.html. Ook kon ik niet vinden hoe ik alles donkerder kon maken zodra mijn side-menu open was. Daarnaast heb ik een aantal SVG’s in img-tags staan, wat wel werkt, maar technisch gezien niet correct is. Op de detail.html heb ik bovendien een derde schaalgrootte voor de eerste sectie niet toegepast, omdat ik hier te lang mee bezig zou zijn en het niet realistisch vond om dit netjes af te werken. Deze punten laten zien dat ik soms te veel focus op nieuwe functies heb gelegd, waardoor sommige technische aspecten niet optimaal zijn afgerond.

Hiervoor heb ik nog nooit met CSS Grid gewerkt en het was bovendien een tijd geleden dat ik met JavaScript en Flexbox bezig was. Het was daarom ook leuk om deze kennis weer op te frissen en toe te passen in de opdracht, waardoor ik mijn vaardigheden verder heb kunnen uitbreiden. Daarnaast heb ik gewerkt met een nieuw concept binnen het coden, namelijk anchors. Dit was precies waar ik naar op zoek was en het voelde erg goed om hiermee een oplossing te vinden voor een probleem waar ik eerder tegenaan liep.

Waar ik voornamelijk aan moet werken bij volgende projecten, is mijn werksnelheid en de concrete netheid die nodig is om toe te werken naar een professioneel product. Door hier beter op te letten, kan ik efficiënter werken en zorgen dat mijn werk zowel functioneel als netjes afgewerkt is.


  
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
