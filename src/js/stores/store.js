import {observable, action} from 'mobx';

class Store {

  @observable
  name = `Zoek cultuur niet te ver`

  @observable
  tours = [
    {
      _id: 1,
      map: `tour1`,
      title: `Surreal tour`,
      desc: `blablabla`
    },
    {
      _id: 2,
      map: `tour1`,
      title: `Modern tour`,
      desc: `blablabla`
    },
    {
      _id: 3,
      map: `tour1`,
      title: `Belgian tour`,
      desc: `blablabla`
    },
    {
      _id: 4,
      map: `tour1`,
      title: `Far far away tour`,
      desc: `blablabla`
    }, {
      _id: 5,
      map: `tour1`,
      title: `Garden lover tour`,
      desc: `blablabla`
    }
  ]

  @observable
  artworks = [
    {
      _id: 1,
      image: `1981-E`,
      painter: `Gustave de Smet`,
      name: `De groene koepelkerk in Amsterdam`,
      period: `1909`,
      city: `Amsterdam`,
      lon: 52.3746961,
      lat: 4.8285747,
      country: `NL`,
      desc: `Evenals zijn vriend Frits Van den Berghe vluchtte Gustave De Smet bij het uitbreken van de Eerste Wereldoorlog naar Nederland. Hij vestigde zich tot 1920 achtereenvolgens in Laren en Blaricum in Het Gooi. In de laatste twee jaar van zijn verblijf in Nederland ging De Smet ook geregeld naar Amsterdam, waar hij tijdelijk een zolderkamer huurde die hij als atelier gebruikte. Hij schilderde er bijna uitsluitend vrouwenfiguren en stillevens naast stadsgezichten, gezien vanuit zijn dakvenster. Daar ontstond ook De groene koepelkerk in Amsterdam, een van de meest voldragen expressionistische werken uit die periode. De dynamische interpretatie van het stadsbeeld toont een verwantschap met het Duits expressionisme en het Franse kubisme. In zijn Hollandse periode gebruikte Gustave De Smet zelden een helder koloriet. Hij drukte zich veeleer uit in een harmonie van warme herfstkleuren en zwarten, stevig, met brede toetsen in een zware verfmassa neergezet.`
    },
    {
      _id: 2,
      image: `1906-A`,
      painter: `Nicolaes Maes`,
      name: `Portret van een vrouw`,
      period: `17e eeuw`,
      city: `Amsterdam`,
      lon: 52.3746962,
      lat: 4.8285748,
      country: `NL`,
      desc: `Na 1660 schilderde hij bijna uitsluitend portretten, waarin hij evolueerde naar een elegante en heldere stijl die vooruitwees naar de 18de eeuw. Dit Portret van een vrouw is in tekening en lichtspeling uiterst verfijnd, scherp en delicaat. Als veel gevraagde mondaine portretschilder legde Maes zich toe op een rake weergave van de uiterlijke verschijning, meer dan op de studie van het karakter.`
    },
    {
      _id: 3,
      image: ``,
      painter: `Rik Wouters`,
      name: `Zittende vrouw bij het venster`,
      period: `1915`,
      city: `Amsterdam`,
      lon: 52.3746963,
      lat: 4.8285749,
      country: `NL`,
      desc: `Van opleiding was Rik Wouters beeldhouwer, als schilder was hij autodidact. Zijn grote voorbeeld was de Franse kunstenaar Paul Cézanne. Wouters schilderde in felle, meestal zonnige kleuren in een techniek die aan aquarel doet denken. Hij bracht de verf zeer dun aan en hier en daar liet hij delen van het doek onbeschilderd, wat bijzondere lichteffecten creëert. Zijn uitverkoren model was zijn vrouw Nel. Bij het begin van de Eerste Wereldoorlog, na de val van Antwerpen, wordt Wouters in Nederland geïnterneerd. In 1915 werd hij ongeneeslijk ziek en in vrijheid gesteld. Samen met zijn vrouw vestigde hij zich in Amsterdam. Daar schilderde hij onder meer Zittende vrouw bij het venster. Het donker kleurengamma en de serene sfeer zijn kenmerkend voor Wouters latere werken.`
    },
    {
      _id: 4,
      image: `1900-D`,
      painter: `Anthony van Dyck`,
      name: `Jupiter en Antiope`,
      period: `17e eeuw`,
      city: `Antwerpen`,
      lon: 51.2603015,
      lat: 4.2304525,
      country: `BE`,
      desc: `In Jupiter en Antiope bracht Antony van Dyck een van de talrijke escapades van Jupiter in beeld. In de Metamorfosen van Ovidius lezen we hoe de oppergod, vermomd als sater, de nimf Antiope zwanger maakte van een tweeling. Van Dyck beeldde het moment af waarop Jupiter, vergezeld van zijn vaste attribuut de arend, de argeloos slapende Antiope bespiedt. De erotisch getinte voorstelling kan begrepen worden als een ode aan de vruchtbaarheid, maar ook als een veroordeling van losbandig gedrag. Dergelijk mythologische taferelen boden kunstenaars een alibi om zonder schroom naaktfiguren uit te beelden. Jupiter en Antiope is een jeugdwerk van Van Dyck en een van de weinige mythologische voorstellingen van zijn hand. Het is een typisch bravourestuk waarin Van Dyck zijn virtuositeit in het schilderen van naakten en kostbare stoffen kon demonstreren. Hij boekte er veel succes mee. Er zijn verschillende versies van en Rubens zelf bezat er een tot aan zijn dood.`
    },
    {
      _id: 5,
      image: `1958-I`,
      painter: `Cornelis de Vos`,
      name: `Familieportret`,
      period: `17e eeuw`,
      city: `Antwerpen`,
      lon: 51.2603016,
      lat: 4.2304526,
      country: `BE`,
      desc: `Cornelis de Vos, een jongere tijdgenoot en vriend van Rubens, was in verschillende genres werkzaam. Zijn talent komt echter vooral tot uiting in de portretten van burgers die hij tussen 1620 en 1640 schilderde. Uit dit familieportret blijkt dat hij een meester is in de compositie van groepsportretten en de uitbeelding van kinderen. Hij is een van de eerste kunstenaars die kinderen, ondanks hun pose en zware feestkledij, niet portretteert als kleine volwassenen maar met de spontaneïteit en openheid eigen aan hun leeftijd. Het Familieportret is klaar en overzichtelijk opgebouwd, met een groot vakmanschap in de stofweergave en een opvallende natuurlijkheid in de blik en gebaren. De Vos maakt geen karakterstudies, maar blijft een nuchtere en objectieve toeschouwer. Het familieportret heeft ook een moraliserende betekenis. De rode appel refereert aan de vruchtbaarheid en de op de voortplanting gerichte huwelijksethiek van de zeventiende-eeuwse burgerij.`
    },
    {
      _id: 6,
      image: `1926-A`,
      painter: `Jacob Jordaens`,
      name: `De hemelvaart van Maria`,
      period: `17e eeuw`,
      city: `Antwerpen`,
      lon: 51.2603017,
      lat: 4.2304527,
      country: `BE`,
      desc: `Naast Peter Paul Rubens was Jacob Jordaens een van de meest productieve talenten van zijn tijd. Het altaarstuk Maria-Tenhemelopneming draagt rechts onder een half uitgewist wapenschild en de inscriptie ‘Dono Dedit V.D. Venne’, wat verwijst naar de familie Van de Venne als schenkers. De compositie gaat bijna letterlijk terug op de Maria-Tenhemelopneming die Rubens in 1624 voor de kathedraal van Antwerpen schilderde. De Gentse versie van Jordaens dateert van 1650- 1655. Kenmerkend voor het oeuvre van de Antwerpse meester uit die periode zijn de schematiserende vormgeving en de enigszins stereotiepe houdingen en gebaren. In een van de apostelen rechts op het doek is vermoedelijk de figuur van Abraham Grapheus te herkennen. Van de rustieke kop van Grapheus maakte Jordaens verscheidene olieverfstudies. Een ervan bevindt zich in de verzameling van het Museum.`
    },
    {
      _id: 7,
      image: `1899-B`,
      painter: `Jacob Jordaens`,
      name: `Studies van de kop van Abraham Grapheus`,
      period: `17e eeuw`,
      city: `Antwerpen`,
      lon: 51.2603018,
      lat: 4.2304528,
      country: `BE`,
      desc: `De olieverfschets Studies van de kop van Abraham Grapheus is een detailstudie naar het leven, waarin de knappe schildertechniek en het rake observatievermogen van  Jacques Jordaens bijzonder goed tot uiting komen. Abraham Grapheus – hier ongeveer 65 jaar oud – was ‘knaap’ bij de schildersgilde Sint-Lucas in Antwerpen, een ambt dat vergelijkbaar was met een huidige secretaris bij een vereniging. Verscheidene tijdgenoten van Jordaens, onder wie Cornelis de Vos en Anthony van Dyck, kozen hem als model. De kop links op de schets gebruikte Jordaens later voor een van zijn Vier evangelisten, een schilderij dat zich thans in het Louvre in Parijs bevindt. De rechterkop herkennen we als een van de saters in zijn Allegorie van de vruchtbaarheid uit de Koninklijke Musea voor Schone Kunsten van België in Brussel, dat thematisch verwant is met het gelijknamige doek uit het Museum van Gent.`
    },
    {
      _id: 8,
      image: `S-51`,
      painter: `Maerten de Vos`,
      name: `De familie van de heilige Anna`,
      period: `16e eeuw`,
      city: `Antwerpen`,
      lon: 51.2603019,
      lat: 4.2304529,
      country: `BE`,
      desc: `De legende over het leven van de heilige Anna ontstond in de dertiende eeuw. Volgens die legende huwde Anna driemaal. Uit elk huwelijk had ze een dochter. Zij was al een bejaarde vrouw toen zij Maria, de moeder van Jezus, baarde. Op het schilderij van Maarten de Vos zit Maria in het midden met het Kind op haar schoot. Naast haar zit haar nicht Elisabeth en niet, zoals gebruikelijk, haar moeder, de heilige Anna. Voor Elisabeth staat haar zoon Johannes de Doper. In het bejaarde echtpaar rechts van de arcade herkennen we Anna en haar derde man Joachim met hun kind Maria. Vooraan links en rechts zitten de halfzusters van Maria. Achteraan zien we van links naar rechts Zebedeus, Zacharias en Jozef, de echtgenoten van Marias halfzus, van Elisabeth en van Maria. Een doorzicht in de architectuur toont het tafereel van de ontmoeting tussen Maria en Elisabeth. Maarten de Vos wordt beschouwd als de voorloper van de grote Antwerpse barokschool. Hij schilderde zowel portretten als monumentale, religieuze taferelen. Het schilderij De familie van de heilige Anna, afkomstig uit de oude abdijkerk van Sint-Pieters in Gent, is gesigneerd en gedateerd 1585 bovenaan in het midden. Dat jaar bekeerde de kunstenaar zich tot het lutheranisme. Zijn faam was echter zo groot dat hij ook uit katholieke kringen nog talrijke opdrachten bleef ontvangen`
    },
    {
      _id: 9,
      image: `1910-Z`,
      painter: `Peter Paul Rubens`,
      name: `De geseling van Christus`,
      period: `17e eeuw`,
      city: `Antwerpen`,
      lon: 51.260302,
      lat: 4.230453,
      country: `BE`,
      desc: `De geseling van Peter Paul Rubens is een zorgvuldig uitgewerkte schets of modello voor het gelijknamige schilderij in de dominicanenkerk, thans Sint-Pauluskerk, in Antwerpen. Het grote paneel dateert van circa 1614. Het maakt deel uit van een reeks van vijftien panelen, gewijd aan de mysteries van de rozenkrans, en uitgevoerd door elf kunstenaars, onder wie Maarten de Vos, Anthony van Dyck en Jacques Jordaens. De compositie van het grote doek wijkt nauwelijks af  van de schets. Het modello is meer in de breedte uitgewerkt. Daardoor hebben de figuren hier meer ruimte. Opmerkelijk is de directe en onstuimige penseelvoering, de sculpturale kracht van de personages en de evenwichtige compositie rond de centrale figuur van Christus. Voor de houding van zijn figuren baseerde Rubens zich vaak op antieke voorbeelden die hij tijdens zijn verblijf in Italië kopieerde. De kunstenaar zelf hechtte veel belang aan zijn olieverf-schetsen, getuige het feit dat hij ze tot op het einde van zijn leven in zijn bezit hield.`
    },
    {
      _id: 10,
      image: `1952-G`,
      painter: `Pieter Brueghel de Jonge`,
      name: `Dorpsadvocaat`,
      period: `1621`,
      city: `Antwerpen`,
      lon: 51.2603021,
      lat: 4.2304531,
      country: `BE`,
      desc: `Naast talrijke kopies naar het werk van zijn vader schiep Pieter II Brueghel ook originele composities, zoals de Boerenadvocaat of Dorpsadvocaat, gesigneerd en gedateerd 1621 links onderaan. Dit schilderij is een interessant historisch document. De overheid bemoeide zich steeds meer met de rechtspleging. Daardoor werd de advocaat op het platteland een belangrijke vertrouwenspersoon. De betaling gebeurde, zoals wij hier zien, vaak in natura. In dit werk toonde Pieter II Brueghel zich een satirische kunstenaar, een geamuseerde observator van menselijke relaties en maatschappelijke toestanden. Hij stelde de advocaat voor als een sluw en hebzuchtig man die de naïeve boeren met massa’s papier overblufte.`
    },
    {
      _id: 11,
      image: `S-76`,
      painter: `Theodoor Rombouts`,
      name: `Allegorie van de vijf zintuigen`,
      period: `16e eeuw`,
      city: `Antwerpen`,
      lon: 51.2603022,
      lat: 4.2304532,
      country: `BE`,
      desc: `Hier symboliseert elke man een bepaald zintuig. De oude man met bril en spiegel stelt het Gezicht voor. Het Gehoor bespeelt een chitarrone, een soort basluit. De blinde man staat voor de Tastzin. De vrolijke man met een glas wijn in de hand beeldt de Smaak uit en de elegante jonge man met pijp en knoflook de Reukzin. Look, wijn, muziek en spiegel verwijzen naar de bedrieglijkheid van de zintuiglijke waarneming en naar de vergankelijkheid van het leven. De Gentse bisschop Antoon Triest, die ook verschillende schilderijen van Hollandse meesters bezat, bestelde dit doek bij Rombouts`
    },
    {
      _id: 12,
      image: `S-75`,
      painter: `Theodoor Rombouts`,
      name: `Allegorie van het Schepengerecht van Gedele`,
      period: `16e eeuw`,
      city: `Antwerpen`,
      lon: 51.2603023,
      lat: 4.2304533,
      country: `BE`,
      desc: `In 1627 bestelde het stadsbestuur van Gent dit monumentale schilderij bij de Antwerpse schilder Theodoor Rombouts. Het was bestemd voor het Schepenhuis van Gedele. Het Schepengerecht van Gedele is vergelijkbaar met het huidige vredegerecht en was tevens bevoegd voor de wezenzorg. Het werd pas op het einde van de achttiende eeuw afgeschaft. De personages in deze allegorie zingen de lof van de opdrachtgevers en van de stad Gent. Bovenaan troont de Maagd van Gent, met aan haar voeten de Gentse leeuw. Bij haar zitten vijf weeskinderen en op de trappen zetelen aan elke kant vier rechters. Zij symboliseren het schepengerecht. De vrouwen in het midden stellen drie deugden voor: Kracht slaat haar arm om een zuil, Wijsheid houdt al schrijvend een vergrootglas vast en Matigheid doet water in de wijn. De soldaten vooraan links moeten de orde handhaven. Rechts ligt de Schelde in de gedaante van een naakte man met een hoorn des overvloeds en een kruik met water. De vrouw rechts van hem, met de waterspuwende draak, is de Leie, de tweede rivier die de stad Gent haar welvaart bezorgde. Rombouts was in 1627 pas terug uit Italië. Hij bewonderde het werk van Caravaggio en dat is hier in zijn manier van schilderen nog goed te zien. De groots opgezette compositie doet echter aan Rubens denken die hem in toenemende mate zou gaan beïnvloeden.`
    },
    {
      _id: 13,
      image: `1914-DI`,
      painter: `Camille Corot`,
      name: `Steengroeve in Fontaineblau`,
      period: `1831`,
      city: `Barbizon`,
      lon: 48.4472566,
      lat: 2.5858564,
      country: `BE`,
      desc: `Omstreeks 1830 was Jean Baptiste Camille Corot een van de vroegste bezoekers van Barbizon, het dorpje aan de rand van het woud van Fontainebleau, waar de zogenaamde School van Barbizon zou ontstaan. Nog volledig volgens de classicistische traditie zijn vele van zijn studies en plein air bedoeld als voorbereiding voor grote historiestukken. Steengroeve van Chaise-Marie in Fontainebleau daarentegen is een zelfstandig uitgevoerd landschapsportret, direct naar de natuur geschilderd. Voorgesteld is een verlaten steengroeve die nog enkel werd bezocht door de plaatselijke bevolking om er hout te sprokkelen. Het landschap is niet mooi te noemen, maar een plek waar de mens ooit de natuur heeft geëxploiteerd. Coloristisch is het schilderij interessant. Aan de overheersende bruine, beige en groene tinten voegde Corot immers wat grijs toe om aan het geheel een tonale eenheid te geven.`
    },
    {
      _id: 14,
      image: `2000-F`,
      painter: `Fernand Khnopff`,
      name: `Wierook`,
      period: `1898`,
      city: `België`,
      lon: 50.4795318,
      lat: 2.2341862,
      country: `BE`,
      desc: `De Belgische kunstenaar Fernand Khnopff verbeeldde in zijn tekeningen en schilderijen een mysterieuze, verstilde en niet makkelijk te betreden wereld. Religie, spiritualisme, mysticisme en traditie spelen er een grote rol in. Wierook illustreert dat. De tekening is een mooi voorbeeld van Khnopffs fijnzinnige tekentalent. Zijn bewondering voor de academische traditie blijkt uit de hoge graad van realisme, die de herinnering aan de Vlaamse primitieven oproept. Het raadselachtige gewaad waarin Marguerite Khnopff, Khnopffs zus en lange tijd zijn vaste model (zie ook blz. 50-51), ook vaak op fotos te zien is, kan erop wijzen dat zij als medium fungeerde in spirituele séances.`
    },
    {
      _id: 15,
      image: `1914-AF`,
      painter: `Eugène Boudin`,
      name: `Vrouwen op het strand`,
      period: `19e eeuw`,
      city: `Berck`,
      lon: 50.414695,
      lat: 1.5459361,
      country: `FR`,
      desc: `Eugène Boudin is geboren in 1824, het jaar dat op het Salon van Parijs de tentoonstelling wordt gehouden die van grote betekenis zal zijn voor de bewustwording van de School van Barbizon. Op dit Salon worden Franse romantische kunstenaars als Delacroix en Géricault en Engelse landschapsschilders als Bonington en Constable geëxposeerd. Deze bevestigen de Barbizon-schilders in hun nieuwe visie op de landschapsschilderkunst en confirmeren de breuk tussen de klassieken en de modernen. Boudin begint dus zijn carrière als schilder in een tijd dat de moderne landschapsschilders reeds hun stempel op de Franse schilderkunst hebben gedrukt. Hun invloed is groot en ook Boudin ondergaat de inspirerende werking van deze kunstenaars. Als zoon van een schipper gaat zijn voorkeur uit naar het schilderen van zeegezichten, waarin grote aandacht wordt besteed aan het grote luchtoppervlak met wolken boven het water en het licht dat het hele landschap overdekt. Onder toedoen van Isabey maakt Boudin vanaf de jaren 1860 een hele reeks strandscènes, hoofdzakelijk bevolkt door bourgeoisie-mensen die hun vrije tijd doorbrengen aan de kust. Maar ook minder gegoede personen als vissers en vissersvrouwen verdienen zijn aandacht, zoals blijkt in Wasvrouwen te Etretat. Dit werk is vervaardigd in het laatste decennium van zijn leven. Typisch voor vele van dergelijke schilderijen is de verdeling van de compositie in drie horizontale, parallelle zones die worden ingenomen door de lucht, de zee en het strand. Het gevoel voor de atmosferische werking van het natuurlijke licht kondigt het impressionisme aan. Het koele, zilverige licht en de matte, vale tinten worden hier en daar verlevendigd door het wit van de kapjes en het rood in de kleren op de voorgrond. De simplificatie van de vorm en de vrije, suggestieve factuur verlenen aan dit werkje, ondanks het anekdotische element, een bredere en meer bestendige expressiewaarde.`
    },
    {
      _id: 16,
      image: `1991-F`,
      painter: `Ernst Ludwig Kirchner`,
      name: `Stadsgezicht`,
      period: `1923`,
      city: `Berlijn`,
      lon: 52.5072111,
      lat: 13.1459682,
      country: `DU`,
      desc: `Ernst Ludwig Kirchner studeerde architectuur in Dresden. Als schilder was hij autodidact. Samen met Erich Heckel en Karl Schmidt-Rottluff richtte hij in 1905 in Dresden de expressionistische kunstenaarsgroep Die Brücke op. Villa in Dresden is een typisch voorbeeld van Kirchners ontluikend expressionisme. De kunstenaar toverde hier een alledaags gegeven om tot een krachtige voorstelling, waarin de rechtlijnige architectuur contrasteert met de grillige boomsilhouetten. Het werk is zonder grondlaag geschilderd op een bijzonder ruw doek dat tussen de verschillende kleuren zichtbaar is. Hierdoor zijn de kleurtegenstellingen enigszins gedempt. Als architectuurstudent tekende en schilderde Kirchner talrijke stadsgezichten in Dresden. Het huis dat we hier zien ligt aan de Löbtauerstrasse en komt voor op meerdere tekeningen en schilderijen uit die tijd, gezien vanuit verschillende gezichtspunten.`
    },
    {
      _id: 17,
      image: `1903-A`,
      painter: `Puccio Di Simone`,
      name: `De Kroning van Maria`,
      period: `14e eeuw`,
      city: `Berlijn`,
      lon: 52.5072112,
      lat: 13.1459683,
      country: `DU`,
      desc: `De kroning van Maria is het middenpaneel van een veelluik. Vermoedelijk bestond het veelluik uit vijf luiken. Twee zijpanelen bevinden zich in de Gemäldegalerie in Berlijn en stellen de heiligen Catharina en Laurentius voor. Door de rijkelijk in goud uitgewerkte versierselen oogt het paneel voor die tijd bijzonder modern. We zien hier Christus die zijn moeder Maria een gouden kroon op het hoofd zet, een geliefd thema in de christelijke kunst. Aan hun voeten luisteren zes musicerende engelen de apotheose van Maria’s leven op. Volgens middeleeuwse traditie zijn de engelen veel kleiner voorgesteld, wat de onderlinge hiërarchie van de figuren duidelijk moest maken. De decoratieve achtergrond en het ontbreken van enig perspectief plaatst het tafereel in een hemelse sfeer.`
    },
    {
      _id: 18,
      image: ``,
      painter: `Odilon Redon`,
      name: `Een man van het volk`,
      period: `ca. 1887`,
      city: `Bordeaux`,
      lon: 44.8638282,
      lat: - 0.6561808,
      country: `FR`,
      desc: `Tekening voor een illustratie in Le Juré van Edmond Picard`
    },
    {
      _id: 19,
      image: `1991-J`,
      painter: `Erich Heckel`,
      name: `Huizen in de ochtend`,
      period: `1917`,
      city: `Brugge`,
      lon: 51.2607981,
      lat: 3.0820625,
      country: `BE`,
      desc: `Tijdens de Eerste Wereldoorlog verbleef de Duitse expressionist en Brücke-kunstenaar Erich Heckel als vrijwilliger van het Rode Kruis in Vlaanderen. In die jaren bracht hij het Vlaamse landschap meermaals in beeld. Er zijn ook vele tekeningen van hem uit die tijd bewaard: vrij uitgewerkte portretten of schetsen van landschappen en stadsgezichten van Brugge, Gent en Roeselare. Waarschijnlijk wilde hij die later in tempera op doek uitwerken, zoals dit Brugse stadsgezicht. We zien hier de Augustijnenrei met de Augustijnenbrug. Het gaat echter niet om een nauwgezette weergave, eerder om een vrije interpretatie. De kunstenaar voerde het werk uit met sterk verdunde verf, waardoor bijna het effect van een aquarel ontstaat. De hoekige weergave van de lucht en de dynamiek van de voorstelling tonen de impact van het kubisme en futurisme. Het schilderij bevindt zich nog in de voorlopige lijst (een spieraam) waarin Heckel het verkocht.`
    },
    {
      _id: 20,
      image: `1904-A`,
      painter: `Navolger van Robert Campin`,
      name: `De Man van Smarten`,
      period: `15e eeuw`,
      city: `Brugge`,
      lon: 51.2607981,
      lat: 3.0820625,
      country: `BE`,
      desc: `De man van smarten, ook Engelenpiëta genoemd, werd vanaf de veertiende eeuw een populair thema in de schilder- en beeldhouwkunst. De verrezen Christus toont zijn wonden aan de mensheid. Hij zit op de rand van een sarcofaag, omgeven door treurende engelen. De gouden achtergrond verwijst naar het goddelijke karakter van Christus. Zo symboliseert de voorstelling zijn onsterfelijkheid en vat als het ware de gehele heilsgeschiedenis van de ‘godmens’ in één enkel beeld samen. Het verwrongen lichaam en de expressieve weergave van de wonden contrasteren met de serene uitdrukking van het gelaat.  Het paneel is van de hand van een anonieme meester uit de omgeving van de Meester van Flémalle. De Meester van Flémalle was een van de eerste ‘Vlaamse Primitieven’ en had een belangrijk atelier in Doornik waar onder meer Rogier van der Weyden heeft gewerkt.`
    },
    {
      _id: 21,
      image: ``,
      painter: `Gaspar de Crayer`,
      name: `Het oordeel van Salomo`,
      period: `ca.1620-1622`,
      city: `Brussel`,
      lon: 50.8550625,
      lat: 4.3053504,
      country: `BE`,
      desc: `Weergave van het bijbelse verhaal over koning Saul, die in Endor een heks de geest van de overleden profeet Samuël laat oproepen, om van deze laatste zijn nakend tragisch lot te vernemen. Saul knielt voor de verschijning van de profeet. Links is de heks afgebeeld; achter Saul staan twee soldaten die het tafereel vol ontzetting gadeslaan. Helemaal rechts, op de achtergrond, is uitgebeeld hoe Saul, naar Samuëls voorspelling, de volgende dag zal omkomen: op het slagveld, verslagen door de Filistijnen, stort hij zich wanhopig op zijn eigen zwaard. Dit werk kan toegeschreven worden aan Gaspar de Crayer. Het schilderij bezit de opmerkelijke stroefheid in compositieopbouw en typering van de personages, die typisch zijn voor zijn vroegste periode, ongeveer te situeren voor 1619. Ook inzake de motieven is er een directe verwantschap met andere schilderijen uit De Crayers vroegere jaren. Zo vindt men het realistisch gelaat van Samuel nagenoeg letterlijk herhaald in de voorstelling van God in de uit 1623 daterende 'Hemelvaart en Kroning van Maria' (Musée des Beaux-Arts, Dijon). Ook de invloed van Pieter Paul Rubens kan in dit schilderij herkend worden: het motief van de heks is letterlijk overgenomen uit het linkerluik van Rubens' Kruisoprichtingsaltaar te Antwerpen (1610-1611). (Naar: H. Vlieghe, Stedelijke Musea Brugge. Catalogus Schilderijen 17de en 18de eeuw, Brugge, 1994, p. 89.)`
    },
    {
      _id: 22,
      image: ``,
      painter: `Jacques Louis David`,
      name: `Drie vrouwen`,
      period: `19e eeuw`,
      city: `Brussel`,
      lon: 50.8550625,
      lat: 4.3053504,
      country: `BE`,
      desc: `Tijdens de Franse Revolutie en het Empire stelt Jacques-Louis David zijn werk ten dienste van respectievelijk Robespierre en Napoleon. Zijn liefde voor groots opgevatte, beredeneerde en evenwichtige composities leent zich uitermate goed voor propagandistische doeleinden. Maar deze controversiële thematiek maakt Parijs voor David een gevaarlijke plek na het herstel van de monarchie en noopt hem te verhuizen naar Brussel. Davids Brusselse periode luidt stilistisch sterke veranderingen in. Zijn koloriet wordt intenser en de poging om het ideale met het realistische te combineren opvallender. Enkele weken voor zijn dood schenkt Jacques-Louis David vier tekeningen aan de Gentse Société Royale des Beaux-Arts (Museum voor Schone Kunsten Gent, inv. 1933-E-1 tot 1933-3-4). De kunstenaar exposeert eerder tweemaal in het Gentse Stadhuis, op tentoonstellingen ingericht door de kring. De krijttekeningen illustreren de late stijl van David die de Oudheid in een meer realistische weergave her-actualiseert. Typerend zijn het zware modelé en het accent op het reliëf en de schaduwen.`
    },
    {
      _id: 23,
      image: ``,
      painter: `Philippe de Champaigne`,
      name: `Portret van bisschop Jean-Pierre Cannus`,
      period: `1643`,
      city: `Brussel`,
      lon: 50.8550625,
      lat: 4.3053504,
      country: `BE`,
      desc: `Het Portret van Jean Pierre Camus door Philippe de Champaigne dateert van 1643. Camus, bisschop van Bellay en later van Arras, is bekend als schrijver van talrijke heiligenlevens. Hij is gekleed in een monastieke grijze kapmantel en draagt als attribuut van zijn bisschoppelijke waardigheid slechts een bescheiden kruisje. Door het sterk doorgedreven realisme en de sereniteit in de uitdrukking, is het portret meer verwant met de vijftiende-eeuwse Vlaamse portretschilderkunst dan met de barok.`
    },
    {
      _id: 24,
      image: `S-46`,
      painter: `Pieter Brueghel de Jonge`,
      name: `Bruiloftsmaal`,
      period: `16e eeuw`,
      city: `Brussel`,
      lon: 50.8550625,
      lat: 4.3053504,
      country: `BE`,
      desc: `Pieter II Brueghel, de oudste zoon van Pieter Bruegel de Oudere, heeft in grote mate bijgedragen tot de verspreiding van het werk van zijn vader. Hij stond aan het hoofd van een atelier en specialiseerde zich in het kopiëren en imiteren in meerdere exemplaren van de werken van zijn vader. Zo is het Bruiloftsmaal in de schuur een bijna getrouwe kopie, op kleiner formaat, van het gelijknamige werk van Pieter Bruegel de Oudere in het Kunsthistorisches Museum in Wenen. Het hier getoonde schilderij is afkomstig uit de abtswoning van de Sint-Pietersabdij in Gent. Het bruiloftsmaal heeft plaats in een schuur. De bruid herkennen we aan de papieren kroon boven haar hoofd, bevestigd op het witte doek achter haar. Bovenaan rechts hangen twee bundels graanhalmen kruiselings over een hark, zantekoren genoemd. Het waren de halmen die na het oogsten van de akker werden opgeraapt, wat een beschermd recht van arme mensen was. Dat zou er op kunnen wijzen dat het hier gaat om een minder begoede familie. Het vrijend koppel, half verborgen op de hooizolder links, is een toevoeging van Pieter II Brueghel.`
    },
    {
      _id: 25,
      image: `1961-A`,
      painter: `René Magritte`,
      name: `Perspectief II. Het balkon van Manet`,
      period: `1950`,
      city: `Brussel`,
      lon: 50.8550625,
      lat: 4.3053504,
      country: `BE`,
      desc: `René Magritte was een van de belangrijkste vertegenwoordigers van het surrealisme in België. Zijn werk is verontrustend, ironisch en tegelijk poëtisch, maar zelden brutaal confronterend. In de meeste van zijn werken neemt hij een loopje met de werkelijkheid. Ook in Het balkon is het uitgangspunt niet de werkelijkheid maar een schilderij van Manet, Le Balcon. Het schilderij van Magritte hoort thuis in een reeks schilderijen met als titel Perspective. In de reeks hernam hij telkens een reeds bestaande compositie, van Edouard Manet, Jacques Louis David of François Gérard. In die composities verving hij de figuren door doodskisten.`
    },
    {
      _id: 26,
      image: `1962-Q`,
      painter: `Victor Servranckx`,
      name: `Haven-Opus 2`,
      period: `1926`,
      city: `Brussel`,
      lon: 50.8550625,
      lat: 4.3053504,
      country: `BE`,
      desc: `De abstracte beweging in België ontstond in Antwerpen en in Brussel aan het einde van de Eerste Wereldoorlog. In Antwerpen was de beweging geconcentreerd rond de essayist Michel Seuphor en de dichter Paul Van Ostaijen, de fervente verdedigers van de zuivere beelding. In Brussel was er op dat ogenblik een andere groep abstracte kunstenaars actief, met onder meer Victor Servranckx, die al in 1917 niet-figuratief werk tentoonstelde in de Galerie Georges Giroux in Brussel. Servranckx bleef zijn hele leven trouw aan zijn opvattingen over beeldende kunst en was ongetwijfeld de meest interessante figuur van de abstracte richting in België. Soms is zijn werk gebaseerd op gestileerde elementen uit de wereld van de industrie en de mechanica zoals hier in Haven Opus 2, meestal is het echter zuiver abstract.`
    },
    {
      _id: 27,
      image: `1909-PPP-1`,
      painter: `Auguste Rodin`,
      name: `Kop van Pierre de Wissant`,
      period: `19e eeuw`,
      city: `Calais`,
      lon: 50.9519343,
      lat: 1.8339367,
      country: `FR`,
      desc: `De Kop van Pierre de Wissant is een monumentale uitwerking van één van de burgers van Calais, de beeldengroep waar Auguste Rodin van 1884 tot 1895 aan werkte. Het thema is ontleend aan een historische gebeurtenis uit de veertiende eeuw: enkele vooraanstaande burgers offerden zich op om hun stad, die door de Engelsen werd belegerd, te redden. Voor Rodin was het thema aanleiding om te experimenteren met expressieve houdingen en gelaatsuitdrukkingen in een groep van zeven mannelijke figuren. Rodin hernam de koppen van de burgers in afzonderlijke versies, en onder meer ook in deze zogeheten ‘tête colossale’ van één van de burgers, Pierre de Wissant. In 1903 wilde de Stad Gent voor haar nieuwe museum een exemplaar van de Burgers van Calais aankopen. Dat bleek te duur en uiteindelijk kocht de stad deze bronzen kop samen met het originele gips.`
    },
    {
      _id: 28,
      image: ``,
      painter: `Max Ernst`,
      name: `Vegetatie`,
      period: `1925`,
      city: `Cologne`,
      lon: 50.9578353,
      lat: 6.8272392,
      country: `FR`,
      desc: `Zoals alle surrealisten maakte ook Max Ernst gebruik van toevallige elementen. Hij hanteerde daarbij technieken als calqueren, tamponneren, wegkrassen en wrijven. Vegetatie is daarvan een van de eerste voorbeelden. De organische, speels aangebrachte verfmaterie contrasteert met het deels strakke, deels losse grafisme van de ingekraste lijnen. De suggestieve werking van het beeld en de grote vrijheid in de uitvoering verlenen het paneeltje zijn expressieve kracht. In België werd vooral Frits Van den Berghe door de nieuwe vormgeving van Max Ernst beïnvloed.`
    },
    {
      _id: 29,
      image: `1921-B`,
      painter: `Théodore Fourmois`,
      name: `Landschap in de Dauphiné`,
      period: `1846`,
      city: `Dauphiné`,
      lon: 45.3721176,
      lat: 4.9912449,
      country: `FR`,
      desc: `Théodore Fourmois was een van de eerste schilders in België om zich te verzetten tegen de academische landschapschilderkunst. Hij streefde naar een volkomen integratie van mens en dier in het landschap, en hechtte veel belang aan het schilderen in en naar de natuur. Hoewel hij zich in zijn werken vanuit de natuur liet inspireren, waren zij deels ook ontleend aan de fantasie. De kunstenaar behoorde nog tot de romantische schilders, maar door zijn directe benadering van de natuur kan hij als wegbereider van de negentiende-eeuwse Belgische landschapschilderkunst worden beschouwd. De monumentale bomen in Landschap in de Dauphiné doen sterk denken aan voorbeelden van de Hollandse zeventiende-eeuwse landschapschilders.`
    },
    {
      _id: 30,
      image: `1874-E`,
      painter: `Franz Verhas`,
      name: `De leeuw`,
      period: `1874`,
      city: `Dendermonde`,
      lon: 51.028857,
      lat: 4.0251804,
      country: `BE`,
      desc: `Zoals zijn broer Jan genoot ook Frans Verhas in het laatste kwart van de negentiende eeuw een ruime bekendheid als schilder van burgerlijke taferelen. In het schilderij De leeuw komt zijn voorkeur voor een anekdotische en verhalende kunst tot uiting. Een meisje zoekt bescherming bij haar moeder uit angst voor haar broer die zich onder een decoratieve leeuwenkop heeft verscholen en deze plots tot leven brengt. Het tafereel speelt zich af in een burgerlijk interieur met een rijkelijk overladen versiering. Verhas’ aandacht voor het verglijdende licht en de weergave van de stof in het kleed van de vrouw herinneren aan de werkwijze van Alfred Stevens die toen internationaal een grote populariteit genoot.`
    },
    {
      _id: 31,
      image: `1877-F`,
      painter: `Jan Verhas`,
      name: `De meesterschilder`,
      period: `19de eeuw`,
      city: `Dendermonde`,
      lon: 51.028857,
      lat: 4.0251804,
      country: `BE`,
      desc: `Jan Verhas specialiseerde zich in portretten van kinderen uit de gegoede burgerij. Hoewel de compositie meestal weldoordacht en vrij klassiek is, treft ons de levendigheid waarmee hij kinderen in hun spel uitbeeldt. De meesterschilder toont een jongetje dat geconcentreerd zijn eerste penseelstreek zet onder de aanmoedigende en vertederde blik van zijn broer en zusjes. De natuurlijke houdingen van de kinderen versterken het ongedwongene van een momentopname. Het warme kleurenpalet, de decoratieve fond en het rijkelijke meubilair accentueren de burgerlijke sfeer.`
    },
    {
      _id: 32,
      image: ``,
      painter: `Jean François Millet`,
      name: `De heilige Familie`,
      period: `1913`,
      city: `Frankrijk`,
      lon: 46.1357071,
      lat: - 2.2788885,
      country: `FR`,
      desc: `Jean-François Millet geniet vooral bekendheid als schilder van het landelijke leven in Frankrijk. Voor deze landelijke taferelen baseerde hij zich vaak op verhalen uit de bijbel of uit de klassieke literatuur. De overname van dergelijke klassieke elementen verklaart dan ook de religieuze, spirituele ondertoon in zijn werk. Toch gebeurde het zelden dat hij letterlijk naar bijbelse onderwerpen en figuren werkte, zoals wel het geval was in De Heilige Familie. De figuren in deze schets komen modern en tijdloos over, en kunnen deel uitmaken van een boeren- of arbeidersgezin. Anderzijds lijken de vlotte techniek, de compositorische opbouw en het onderwerp te verwijzen naar de Franse kunstenaars van de romantiek, en, via hen, naar de Vlaamse meesters van de barok.`
    },
    {
      _id: 33,
      image: `1962-C`,
      painter: `Frits Van den Berghe`,
      name: `De idioot bij de vijver`,
      period: `1926`,
      city: `Gent`,
      lon: 51.0827681,
      lat: 3.5744025,
      country: `BE`,
      desc: `In zijn hele oeuvre ging Frits Van den Berghe, in diverse stijlen, op zoek naar de menselijke psyche (en haar donkere kanten). Deze kinderlijk ogende Idioot bij de vijver is in dat licht een belangrijk expressionistisch werk. Een dorpsgek, een tragikomische figuur in sjofele kleren, staat plompverloren in een landelijke omgeving. Die is samengesteld uit heldere kleurvlakken naast elkaar, waarin vier eenden enig leven brengen. De man kijkt met een lege, contactloze blik domweg uit het schilderij, lichtjes zelfvoldaan. Van den Berghes latere (vaak surreële) werk zal wrang en zwaarmoedig blijven.`
    },
    {
      _id: 34,
      image: `1921-CH`,
      painter: `George Minne`,
      name: `De verloren zoon`,
      period: `1896`,
      city: `Gent`,
      lon: 51.0827681,
      lat: 3.5744025,
      country: `BE`,
      desc: `Het motief van elkaar omklemmende naaktfiguren komt meermaals voor in Minnes werk. Waar in Twee vechtende mannen (ca. 1886) de worstelende figuren elkaar in een stevige houdgreep vastklampen, versmelten de personages in De Verloren zoon (1896) bijna tot één lichaam. De innige verstrengeling van lichamen heeft vaak een spirituele ondertoon. Samen met zijn stadsgenoot en vriend Maurice Maeterlinck koestert Minne immers een grote bewondering voor de christelijke middeleeuwen en put hij inspiratie uit de geschriften van de Vlaamse mystici. In De Verloren Zoon zoekt de beeldhouwer als het ware een plastisch equivalent voor de extase waarvan Ruusbroec en Hadewijch getuigen. De figuur van de zoon gaat volledig op in die van de vader, zoals de mysticus zich verliest in God.`
    },
    {
      _id: 35,
      image: `1982-B`,
      painter: `George Minne`,
      name: `Fontein der geknielden`,
      period: `1905`,
      city: `Gent`,
      lon: 51.0827681,
      lat: 3.5744025,
      country: `BE`,
      desc: `Ter nagedachtenis van de in 1898 gestorven Franstalige Gentse dichter Georges Rodenbach ontwierp George Minne in opdracht van de Société des Artistes et Ecrivains Français een herdenkingsmonument. Het Rodenbach gedenkteken droeg aanvankelijk de titel Bruges-la-Morte, naar de gelijknamige roman van de dichter. De uiteindelijke versie bevindt zich in het Groot Begijnhof in Gent. Het hier getoonde gipsontwerp uit 1899 is afkomstig uit de verzameling van de symbolistische dichter en kunstcriticus Karel van de Woestijne. Het toont een liggende vrouwenfiguur die de aarde waarin ze ligt, langzaam lijkt te ontstijgen. De ingetogenheid en vereenvoudigde, uitgepuurde vormentaal sluiten aan bij De fontein der geknielden.`
    },
    {
      _id: 36,
      image: `1937-A`,
      painter: `Gerard Horenbout`,
      name: `Portret van Lieven van Pottelsberghe en Livina van Steelant`,
      period: `15e eeuw`,
      city: `Gent`,
      lon: 51.0827681,
      lat: 3.5744025,
      country: `BE`,
      desc: `Deze portretten van een Gentse patriciërsfamilie vormden mogelijk de buitenpanelen van een drieluik, waarvan het middenpaneel verdwenen is. Wie hier is geportretteerd weten we door de wapenschilden en -spreuken in de geopende getijdeboeken. Man en vrouw zijn voorgesteld samen met hun kinderen. De kinderen met een kruisje tussen hun gevouwen handen waren bij de uitvoering van het schilderij al overleden. Achter hen staat een beschermengel. De Gentse miniaturist en paneelschilder Gerard Horenbout aan wie deze portretten worden toegeschreven werkte aan het hof van Margaretha van Oostenrijk. Het uiterst verfijnde naturalisme en de hoge technische kwaliteit herinneren aan het werk van Gerard David.`
    },
    {
      _id: 37,
      image: `S-52`,
      painter: `Maarten van Heemskerck`,
      name: `De calvarieberg`,
      period: `16e eeuw`,
      city: `Gent`,
      lon: 51.0827681,
      lat: 3.5744025,
      country: `BE`,
      desc: `De Calvarieberg van Maarten van Heemskerck is afkomstig uit het klooster der rijke klaren in Gent. Verscheidene elementen uit het Lijdensverhaal  zijn hier in één tafereel samengebracht. Tussen de goede en de slechte moordenaar hangt de gekruisigde Christus, hoog verheven boven de massa. Een soldaat steekt een met azijn doordrenkte spons omhoog om Jezus’ dorst te lessen, een ander blikt met ontzag omhoog naar de stervende. Op de voorgrond rechts dobbelen soldaten om Jezus’ kleren. Links zien we de bezwijming van zijn moeder Maria in de armen van de apostel Johannes. Aan de voeten van het kruis kijkt Maria Magdalena door smart overmand naar de Messias op. De opdrachtgever, gekleed in het koorhemd van een priester, zit geknield onderaan links. Zijn identiteit is niet bekend. De virtuoos geschilderde paarden in de achtergrond gaan niet terug op natuurstudies, maar op schetsen die Maarten van Heemskerck in Italië naar antieke voorbeelden maakte. Hij verbleef er van 1532 tot 1535.`
    },
    {
      _id: 38,
      image: `S-53`,
      painter: `Maarten van Heemskerck`,
      name: `Man van Smarten`,
      period: `16e eeuw`,
      city: `Gent`,
      lon: 51.0827681,
      lat: 3.5744025,
      country: `BE`,
      desc: `Het thema van Christus die zijn wonden toont, omgeven door twee engelen, was in de middeleeuwen en renaissance bijzonder geliefd. Doorgaans speelt de scène zich af bij het graf. Hier zit Christus echter op een wolk, wat mogelijk verwijst naar zijn Hemelvaart. Het ongewoon felle koloriet op de achtergrond, de complex gedraaide houdingen en de verkortingen in het monumentale lichaam van Christus verlenen het tafereel een sterke dramatische expressie. In een plaquette boven Jezus’s hoofd lezen we een citaat uit het Johannesevangelie: ECCE REX VESTER (Ziedaar uw koning). Daaronder staat het monogram van de schilder MH en het jaartal 1532. Het paneel is afkomstig uit de Sint-Corneliskerk in Machelen.`
    },
    {
      _id: 39,
      image: `1954-S`,
      painter: `Rogier Van der Weyden`,
      name: `De Madonna met de anjer`,
      period: `15e eeuw`,
      city: `Gent`,
      lon: 51.0827681,
      lat: 3.5744025,
      country: `BE`,
      desc: `De voorstelling van de Madonna met de anjer gaat terug op een verloren gegaan werk van Rogier van der Weyden, de Madonna voor de rozenhaag, waarvan een kopie in het Louvre in Parijs wordt bewaard. Gezien de hoge kwaliteit – een waarachtige psychologische expressie en een verfijnde zin voor stofdifferentiatie – is het Gentse paneel vermoedelijk in de onmiddellijke omgeving van de meester ontstaan. Het relatief kleine formaat en het intieme karakter wekken de indruk dat het gaat om een devotiestuk voor particulier gebruik. De rode kleur van Maria’s gewaad en de rode anjer, vanouds symbool van de echtelijke liefde, verwijzen hier naar de Passie van Christus en naar zijn goddelijke liefde.`
    },
    {
      _id: 40,
      image: `1898-B`,
      painter: `Frans Hals`,
      name: `Portret van een vrouw`,
      period: `1640`,
      city: `Haarlem`,
      lon: 52.3838233,
      lat: 4.5728392,
      country: `NL`,
      desc: `Frans Hals beeldde de vrouw ten halve lijve af tegen een grijze achtergrond, binnen een ovale stenen omraming. Een dergelijke ‘lijst in de lijst’ geeft aan een schilderij een bijzonder trompe-l’oeil-effect. Haar kledij beantwoordt aan de calvinistische voorschriften: zwart (satijn of fluweel) en wit (linnen of kant) zonder verdere franjes. Hals’ schilderijen zijn op virtuoze wijze met een losse en brede penseelstreek geschilderd. Hij werkte ‘alla prima’: zonder voortekening direct op doek. Een ruwe schets in grijze verf volstond. Circa 1620-1630 schilderde hij drukke portretten; in de jaren 1640 werkte hij bezadigder en was zijn kleurenpalet bescheidener. Dit Portret van een vrouw staat aan het begin van deze nieuwe fase.`
    },
    {
      _id: 41,
      image: `1979-C`,
      painter: `Théo van Rysselberghe`,
      name: `Portret van Marguerite van Mons`,
      period: `1886`,
      city: `Hannover`,
      lon: 52.3795836,
      lat: 9.6213892,
      country: `DU`,
      desc: `Met een dromerige en afwezige blik staart Marguerite Van Mons de toeschouwer aan. Théo Van Rysselberghe portretteerde het meisje korte tijd na het overlijden van haar moeder. De somberheid van de jurk staat in fel contrast met haar bleke gelaat en het teerblauwe van het deurpaneel met vergulde profielen. Het meisje is frontaal afgebeeld en staat met haar rug tegen de deur. Haar rechterhand houdt de deurknop vast alsof ze de kamer zopas is binnengekomen of die juist wil verlaten. Het is dit dubbelzinnig gebaar en de algemene melancholische sfeer die aan dit portret een symbolistisch karakter verlenen. De invloed van de portretkunst van James Abbott McNeill Whistler is duidelijk voelbaar. Zijn werk leerde Van Rysselberghe kennen op de salons van Les Vingt. De schilder droeg het portret op aan Emile Van Mons, de vader van Marguerite.`
    },
    {
      _id: 42,
      image: `1923-E`,
      painter: `Alessandro Magnasco`,
      name: `Biddende monniken`,
      period: `18e eeuw`,
      city: `Italië`,
      lon: 41.2135182,
      lat: 8.0842083,
      country: `IT`,
      desc: `Snelle verfstreken en dramatische licht-donker contrasten zijn kenmerkend voor de zeer persoonlijke stijl van Alessandro Magnasco’s schilderijen. Tot op zekere hoogte geldt dat ook voor zijn tekeningen. In deze schets van een knielende heremiet worden zwaar aangezette penseelstreken afgewisseld door brede, krachtige wassingen. Het blad is vermoedelijk een voorstudie voor een van de monniken die Magnasco’s vroege landschappen uit het begin van de 18de eeuw bevolken. Die schilderijen brengen de verleidingen in beeld waaraan deze in afzondering levende mannen waren blootgesteld. Dergelijke thema’s hebben bij Magnasco soms een kritische, ironische of komische inslag, die mogelijk is terug te voeren op de toen in Noord-Italië opkomende protesten tegen corrupte kloosterordes en religieuze intolerantie. Volgens het opschrift linksonder stamt de <I>Biddende monnik<I> uit de collectie van Santo Varni (1807-1885). Deze Genuese beeldhouwer, archeoloog en kunsthistoricus had niet minder dan 21 tekeningen van Magnasco in zijn bezit. Daarvan zijn er nu nog zeven te traceren. Een tekening van een monnik in vrijwel dezelfde houding, die ook stilistische overeenkomsten vertoont, bevindt zich in het British Museum te Londen. Charles Dumas Snelle verfstreken en dramatische licht-donker contrasten zijn kenmerkend voor de zeer persoonlijke stijl van Alessandro Magnasco’s schilderijen. Tot op zekere hoogte geldt dat ook voor zijn tekeningen. In deze schets van een knielende heremiet worden zwaar aangezette penseelstreken afgewisseld door brede, krachtige wassingen. Het blad is vermoedelijk een voorstudie voor een van de monniken die Magnasco’s vroege landschappen uit het begin van de 18de eeuw bevolken. Die schilderijen brengen de verleidingen in beeld waaraan deze in afzondering levende mannen waren blootgesteld. Dergelijke thema’s hebben bij Magnasco soms een kritische, ironische of komische inslag, die mogelijk is terug te voeren op de toen in Noord-Italië opkomende protesten tegen corrupte kloosterordes en religieuze intolerantie. Volgens het opschrift linksonder stamt de <I>Biddende monnik<I> uit de collectie van Santo Varni (1807-1885). Deze Genuese beeldhouwer, archeoloog en kunsthistoricus had niet minder dan 21 tekeningen van Magnasco in zijn bezit. Daarvan zijn er nu nog zeven te traceren. Een tekening van een monnik in vrijwel dezelfde houding, die ook stilistische overeenkomsten vertoont, bevindt zich in het British Museum te Londen.`
    },
    {
      _id: 43,
      image: `1961-X`,
      painter: `Constant Permeke`,
      name: `Liggende boer`,
      period: `1928`,
      city: `Jabbeke`,
      lon: 51.1912234,
      lat: 3.0308954,
      country: `BE`,
      desc: `Extreem vereenvoudigen en de dingen vervormen om het wezenlijke van het onderwerp in beeld te brengen: dat is wat de expressionist Constant Permeke hier met enkele geraffineerde, trefzekere lijnen doet. Dat boeren werkers en wroeters zijn, en geen denkers, laat hij zien door de handen van de man groter te maken dan zijn hoofd. Er is verder geen decor en de hoekige, slapende boer is als het ware op het blad geprangd. Permeke schilderde veel dergelijke monumentale,beeldvullende figuren. Hij vestigde zich rond zijn veertigste in Jabbeke, in de West-Vlaamse polderstreek. Het boerenleven was zijn belangrijkste thema.`
    },
    {
      _id: 44,
      image: `1953-P`,
      painter: `Roelant Savery`,
      name: `Landschap met dieren`,
      period: `17e eeuw`,
      city: `Kortrijk`,
      lon: 50.8028926,
      lat: 3.2097454,
      country: `BE`,
      desc: `Na zijn terugkeer naar Nederland bleef Savery gemaniëreerde fantasielandschappen maken. Om dieptewerking te creëren, gebruikte hij vaak drie achter elkaar liggende zones: een aardkleurige voorgrond met geboomte, een doorkijk in het midden en een blauwe achtergrond. De verhogingen links en rechts werken als coulissen en versterken de dieptewerking. Centraal wordt een struisvogel aangevallen door een steltvogel. De struisvogel is omringd door twee zwanen, een pelikaan, een haan en een gans. Links heerst een onrustige sfeer terwijl de edelherten rechts het gebeuren in alle kalmte gadeslaan.`
    },
    {
      _id: 45,
      image: `1958-O`,
      painter: `Gustave Van de Woestyne`,
      name: `Portret van Prudence De Schepper`,
      period: `1910`,
      city: `Sint-Martens-Latem`,
      lon: 51.0084855,
      lat: 3.5881917,
      country: `BE`,
      desc: `Omwille van de fotografische nauwkeurigheid waarmee hij zijn modellen weergaf werd Gustave Van de Woestyne een veel gevraagd portretschilder. Hier zien we Roos Van Wijnendaele, de grootmoeder langs moederskant van de kunstenaar Edgar Gevaert. Op het moment dat Van de Woestyne haar portretteerde was ze bijna 100 jaar oud. Opvallend in de meeste van Van de Woestyne’s portretten is, zoals ook hier,  de haarscherpe weergave van het gezicht en de handen terwijl de kleding minder in detail is uitgewerkt. De bleke, lege achtergrond waarop de figuur zich duidelijk aftekent is eveneens een werkwijze die de kunstenaar geregeld toepaste.`
    },
    {
      _id: 46,
      image: `1985-F`,
      painter: `Gustave Van de Woestyne`,
      name: `Christus in de woestijn`,
      period: `1939`,
      city: `Sint-Martens-Latem`,
      lon: 51.0084855,
      lat: 3.5881917,
      country: `BE`,
      desc: `Gustave Van de Woestyne evolueerde na de Eerste Wereldoorlog naar het expressionisme. De dynamische schilderwijze van de meeste expressionisten bleef hem echter vreemd. Ondanks vervormingen en vereenvoudigingen behield Van de Woestyne een voorkeur voor een duidelijke omtreklijn, een nauwgezette weergave van de werkelijkheid en een gladde schildertechniek. Hierdoor is zijn werk uit die periode verwantmet het neorealisme en de Neue Sachlichkeit in Duitsland. Zijn mystieke belangstelling, zo kenmerkend voor zijn symbolistische periode, komt in zijn later werk tot uiting in een aantal schilderijen met een expliciete religieuze thematiek, zoals Christus in de woestijn. De compositie is uiterst sober en beperkt tot enkele kleurvlakken. Alleen het gelaat en de handen zijn gedetailleerd weergegeven. Opmerkelijk is het verschil in kleur en uitvoering van beide handen. Dat verschil beklemtoont het rituele gebaar.`
    },
    {
      _id: 47,
      image: `1904-X`,
      painter: `Emile Claus`,
      name: `Zonnige dag`,
      period: `1900`,
      city: `Leiestreek`,
      lon: 50.8061458,
      lat: 3.2651938,
      country: `BE`,
      desc: `Emile Claus’ oeuvre geeft ons een beeld van het alledaagse leven in de Leiestreek rond de eeuwwisseling van 1900. Een schilderij als Zonnige dag, dat precies in dat jaar ontstond, staat model voor zijn verhalende impressionisme. Het doek vertoont merkwaardige parallellen met het werk van een geroutineerd fotograaf. Het wekt immers de schijn op van een momentopname, en is als het ware een venster op de realiteit. De abrupte afsnijdingen op de voorgrond accentueren het levensechte van de voorstelling. Tegelijk is het een weldoordachte en uitgebalanceerde compositie, waarbij de verschillende componenten van de voorstelling door het unificerende licht en contrastarme koloriet worden samengebracht. Typerend voor deze periode in Claus’ werk is ook het zachte schaduwspel, waarbij een doorgaans onzichtbaar bladerdek het harde zomerse zonlicht filtert en licht en schaduw over de voorstelling tovert.`
    },
    {
      _id: 48,
      image: ``,
      painter: `James Whistler`,
      name: `The little Lagoon`,
      period: `1878`,
      city: `Londen`,
      lon: 51.5287718,
      lat: - 0.2417007,
      country: `GB`,
      desc: `In front, at the left, are two posts set in the lagoon. Farther away, at the right, a boatman is rowing his gondola. Beyond, in the center, lies a boat with to masts, near which a number of gondolas are in motion. In the distance, at the left, are buildings on a beach, in front of which lie a ship and a second boat with two masts. Faintly outlined on the horizon are suggestions of Venice, under a cloudy sky. The butterfly, shaded, is near the right lower corner of the plate. Signature: Hand-signed in pencil with the artist’s butterfly monogram on a tab below the platemark lower left, also annotated “imp.” on the tab indicating that the impression was printed by Whistler himself, also signed in the plate with the butterfly monogram lower right.`
    },
    {
      _id: 49,
      image: ``,
      painter: `William Hogarth`,
      name: `Portret van een jonge vrouw`,
      period: `18e eeuw`,
      city: `Londen`,
      lon: 51.5287718,
      lat: - 0.2417007,
      country: `GB`,
      desc: `William Hogarth is vooral gekend om zijn verhalende, satirische en moraliserende prenten en schilderijen. In zijn tijd was hij eveneens een vermaarde portrettist. Aanvankelijk concentreerde de kunstenaar zich op het portretteren van de aristocraten, later, vanaf 1740, op welgestelde burgers. Dat was op dat moment nieuw in de Engelse portretkunst. Als vernieuwer van het Engelse portret en waarnemer van de society van zijn tijd tekende Hogarth hier scherp de trekken en de geest van een vrouw, gestoken in een witzijden japon met zilveren weerglans. De houding wijst op een rijzende sociale klasse. De delicate en spontane penseelvoering is typisch rococo.`
    },
    {
      _id: 50,
      image: `1910-Y`,
      painter: `Gustave Courbet`,
      name: `De rotsen van de Loue`,
      period: `19e eeuw`,
      city: `Loue`,
      lon: 48.0035021,
      lat: - 0.1722385,
      country: `FR`,
      desc: `Rond 1850 maakte Gustave Courbet ophef met controversiële schilderijen van boeren en arbeiders op het formaat van monumentale historiestukken, waarin hij zijn politieke en sociale standpunten accentueerde. Daarnaast was hij echter als landschapschilder actief, vooral op het einde van de jaren 1850 en in de jaren 1860. De Franche-Comté, zijn geboortestreek, genoot daarbij zijn voorkeur, en hij schilderde vaak de rivier de Loue en de grot waar zij ontspringt. Uit De rotsen van de Loue blijkt Courbets voorkeur voor een donkere en ruige natuur. Om deze ruwheid te benadrukken en de tastbaarheid van de natuurelementen te suggereren maakte de kunstenaar gebruik van het paletmes. De verf bracht hij in dikke en zware lagen aan. Uit Courbets’ diepdonkere kleurgebruik blijkt ook zijn voorliefde voor Hollandse en Spaanse schilders als Rembrandt en Velazquez.`
    },
    {
      _id: 51,
      image: `1950-U`,
      painter: `Paul Delvaux`,
      name: `De trap`,
      period: `1946`,
      city: `Luik`,
      lon: 50.624728,
      lat: 5.5290505,
      country: `BE`,
      desc: `Vanaf het midden van de jaren 1930 begon Paul Delvaux onder invloed van het werk van Giorgio De Chirico met decor en perspectief te experimenteren. Dezelfde motieven komen vanaf die periode dikwijls in zijn werk terug: uitdrukkingsloze figuren, verstard in theatrale bewegingen, tempels uit de klassieke oudheid of de renaissance, met een expliciet, soms ingewikkeld perspectief en badend in een onnatuurlijk licht. Het decor in grijstinten met slechts enkele kleuraccenten verhoogt de irreële sfeer die in een schilderij als De trap wordt opgeroepen. Ironie – toch een typisch kenmerk van het surrealisme – vinden we bij Delvaux niet terug. Zijn plechtige en wat onderkoelde kunst is eerder verwant met het magisch realisme van de Nederlandse kunstenaar Albert Carel Willink.`
    },
    {
      _id: 52,
      image: `2003-K`,
      painter: `François-Joseph Navez`,
      name: `De heilige Veronica`,
      period: `19e eeuw`,
      city: `Milaan`,
      lon: 45.4628328,
      lat: 9.1076925,
      country: `IT`,
      desc: `De heilige Veronica werd geboren in Binasco, nabij Milaan, in 1445. Ze groeide op in een arm maar devoot landbouwersgezin. Nadat de Heilige Maagd aan haar verscheen besloot ze het passieverhaal van Christus dagelijks te herleven door boetedoening en zelfgeseling. Later werd ze opgenomen door de Augustinessen bij wie ze zich onderscheidde door haar opmerkelijke deugdzaamheid alsook door haar nooit opdrogende tranen. Veronica stierf in 1497. Dit schilderij ontstond het jaar nadat François-Joseph Navez Parijs had verlaten om zijn meester Jacques-Louis David te volgen naar Brussel. Beide kunstenaars respecteerden elkaar en wisselden onderling artistieke ideeën uit. In dit jeugdwerk zijn onmiskenbaar invloeden aanwezig van Davids latere stijl die werd gekenmerkt door een mix van realisme en idealisme en een grotere aandacht voor de expressies van de gezichten.`
    },
    {
      _id: 53,
      image: `1988-B`,
      painter: `Oskar Kokoschka`,
      name: `Portret van Ludwig Adler`,
      period: `1914`,
      city: `Montreux`,
      lon: 46.4537145,
      lat: 6.8997396,
      country: `CHE`,
      desc: `Ludwig Adler was arts en, op het moment dat Oskar Kokoschka hem portretteerde, assistent aan de eerste academische vrouwenkliniek in Wenen. Adler behoorde, voor zover gekend, niet tot de kennissenkring van de kunstenaar. Vermoedelijk is het portret dan ook in opdracht geschilderd. Het behoort tot een duidelijk afgebakende groep portretten uit de jaren 1913-1914, waarin Kokoschka op vrij groot formaat werkte, met een dynamische factuur en een donker kleurgebruik. In Kokoschka’s geschilderd oeuvre vormen de portretten het hoofdbestanddeel. De innerlijke wereld van de geportretteerde trachtte hij tot uiting te brengen door de weergave van de typische fysionomie en lichaamstaal van zijn model. Hierin werd hij geïnspireerd door Sigmund Freud, die rond 1900 met zijn psychoanalyse een omwenteling in de visie op de menselijke psyche had teweeg gebracht.`
    },
    {
      _id: 54,
      image: `2011-GQ`,
      painter: `Théo van Rysselberghe`,
      name: `De vallei van de Samber`,
      period: `19e eeuw`,
      city: `Namen`,
      lon: 50.4593883,
      lat: 4.7834004,
      country: `BE`,
      desc: `In het oeuvre van Van Rysselberghe is De vallei van de Samber een van de vroegst bekende voorbeelden van een volledig gepointilleerd landschap. Waar hij de natuur voordien op een impressionistische, gevoelsmatige wijze in beeld bracht, ging hij het landschap nu op een bijna wetenschappelijke manier analyseren. De kunstenaar herleidt de natuur hier tot een bijna geabstraheerde compositie waarin de onvermengde kleuren in stippen naast elkaar zijn aangebracht. Het schilderij behoorde oorspronkelijk toe aan Sylvie Descamps, de schoonmoeder van de kunstenaar en Brusselse uitgeefster van onder meer Georges Eekhoud en Emile Verhaeren. Ze bezat een zomerhuis in Thuin (Henegouwen) aan de oevers van de Samber. De schilder en zijn echtgenote Maria Monnom verbleven er regelmatig in de zomermaanden. Van Rysselberghe was er ook in 1890, het jaar na zijn huwelijk, en schilderde er dit werk. `
    },
    {
      _id: 55,
      image: `1950-AF`,
      painter: `Georges Rouault`,
      name: `Nazareth`,
      period: `1946`,
      city: `Nazareth`,
      lon: 50.9583539,
      lat: 3.5735346,
      country: `BE`,
      desc: `Georges Rouault wordt beschouwd als een van de belangrijkste Franse expressionisten. Als veertienjarige volgde hij een opleiding van glazenier, later werd hij leerling van de symbolistische schilder Gustave Moreau. Na de dood van Moreau in 1898 ontwikkelde Rouault geleidelijk een geheel eigen expressionistische stijl. Zijn schilderijen tonen dan een zekere gelijkenis met glasramen: brede, zwarte omtrekslijnen en rijke, donkere kleurvlakken in een zware en pasteuze verfmassa. In Nazareth zien we op de voorgrond Maria en Jozef met het kind Jezus. Het sacrale karakter van het werk is hier niet zozeer ontleend aan het onderwerp, maar aan de behandeling van het landschap: het licht lijkt van achter het schilderij te komen, vooral in het opvallend rood- en blauwcontrast, wat aan het werk een warme gloed en luminositeit verleent.`
    },
    {
      _id: 56,
      image: `1957-I`,
      painter: `Constant Permeke`,
      name: `De wiedster`,
      period: `1923`,
      city: `Oostende`,
      lon: 51.2141885,
      lat: 2.8867436,
      country: `BE`,
      desc: `Constant Permeke was in de eerste plaats de schilder van het boerenleven. Net als zijn vrienden Gustave De Smet en Frits Van den Berghe evolueerde hij na de Eerste Wereldoorlog naar het expressionisme. Expressieve vervormingen en kubistische elementen benadrukken de monumentaliteit van zijn figuren die vaak het gehele beeldvlak vullen. De Wiedster is daarvan een goed voorbeeld. De ruw en zwaar aangebrachte verf en de donkere aardekleuren beklemtonen de directe verbondenheid van de vrouw met de aarde. De schematisering en vervormingen leiden niet tot een karikaturale weergave. Wat Permeke beoogde was de uitdrukking van de oerkracht van het leven zelf.`
    },
    {
      _id: 57,
      image: `1969-B`,
      painter: `James Ensor`,
      name: `De oude dame met maskers`,
      period: `1889`,
      city: `Oostende`,
      lon: 51.2141885,
      lat: 2.8867436,
      country: `BE`,
      desc: `Oude dame met maskers is geschilderd op het hoogtepunt van James Ensors zogeheten fantastische periode, ook wel zijn maskerperiode genoemd. Oorspronkelijk voerde de kunstenaar het portret in opdracht uit. Nadat het schilderij werd geweigerd, toverde Ensor het om tot een overvolle maskerade waarin de korte perspectief en de opeenstapeling van figuren de dramatische spanning versterken. De geportretteerde is vermoedelijk Neel Doff, de Nederlandse dichteres en publiciste. De zachte uitstraling van de oudere dame contrasteert fel met de grimmige maskers en het sinistere doodshoofd die zich rond haar verdringen. Het agressieve, contrastrijke koloriet van felle roden en groenen beklemtonen het dreigende karakter van de spottende maskers.`
    },
    {
      _id: 58,
      image: `2008-B`,
      painter: `James Ensor`,
      name: `Kinderen aan het ochtendtoilet`,
      period: `1886`,
      city: `Oostende`,
      lon: 51.2141885,
      lat: 2.8867436,
      country: `BE`,
      desc: `Kinderen aan het ochtendtoilet toont een tafereel in het ouderlijke huis van James Ensor. Oorspronkelijk bevond zich een waterkom bij de voeten van de linkerfiguur, die de kunstenaar achteraf overschilderde. Ontdaan van dit realistische detail, kreeg het werk meer kracht als symbolistische sfeerschepping. Daar was het de kunstenaar om te doen, want hij zag dit werk op de eerste plaats als een ‘studie van het licht’. Ensor beschouwde dit schilderij als een mijlpaal in zijn oeuvre. Het vormt de slotsom van zijn vroege huiselijke taferelen en illustreert zijn toenemende belangstelling voor het licht en voor het fantastische. De voorstelling van het jeugdige naakt vormt een uitzondering in het werk van de kunstenaar. Ze verwijst naar latere interpretaties van hetzelfde thema bij de symbolisten en expressionisten.`
    },
    {
      _id: 59,
      image: ``,
      painter: `James Ensor`,
      name: `De intrede in Jeruzalem`,
      period: `1885`,
      city: `Oostende`,
      lon: 51.2141885,
      lat: 2.8867436,
      country: `BE`,
      desc: `Zoals "Christus getoond aan het volk (Museum voor Schone Kunsten Gent, inv. 1988-C), maakt De intrede van Christus in Jeruzalem deel uit van de reeks Aureolen van Christus . De aureolen illustreren zes episodes uit het leven van Christus. Wanneer men de reeks vanuit deze thematiek beschouwt, is het opvallend dat Ensor de etappes uit het leven van Jezus eerder intuïtief heeft gekozen. De volgorde strookt immers niet met het evangelie. Maar het is dan ook niet het religieuze verhaal dan wel het symbolische en zuiver plastische opzet dat primeert. In de figuur van Christus vindt Ensor een symbool van onschuld, vervolgde waarheid en van onderworpen goedheid aan de aanvallen van een vijandige massa. Voor de kunstenaar is de reeks dan ook een aanleiding om zijn eigen conflictrijke verhouding met de samenleving tot uiting te brengen. Vanaf deze reeks blijft de Christusthematiek zeer belangrijk in het werk van Ensor en in sommige werken is duidelijk dat hij zich met de Christusfiguur identificeert. De belangstelling voor de figuur van Christus is op zichzelf niet uitzonderlijk in deze periode. Net zoals vele generatiegenoten werd Ensor geboeid door de Christusfiguur als revolutionair of als anarchist.`
    },
    {
      _id: 60,
      image: `1954-O`,
      painter: `Leon Spilliaert`,
      name: `Silhouet van de schilder`,
      period: `1907`,
      city: `Oostende`,
      lon: 51.2141885,
      lat: 2.8867436,
      country: `BE`,
      desc: `Vanaf eind 1904 stuurt Spilliaert aan op een breuk met het literaire symbolisme vertolkt door zijn tijdgenoten Fernand Khnopff, William Degouve de Nuncques en Jean Delville. Hij kan pas volledig loskomen van deze kunstvorm via het louterende proces van een diepe zelfanalyse, in een uitzonderlijke reeks zelfportretten, die tussen midden 1907 en november 1908 tot stand komt. Het schetsboek dat Spilliaert in 1907 in gebruik nam, bevat verschillende voorbereidende studies en tekeningen. Van de zelfportretten ontstaan er een tiental in 1907, waaronder Silhouet van de schilder, en een negental in 1908. In de voorstellingswijze van het onderwerp is er een duidelijke compositorische evolutie. De eerste portretten uit 1907 zijn hoofdzakelijk met penseel en pen in Oost-Indische inkt uitgevoerd. De figuur van de kunstenaar is voor een neutrale of monochrome achtergrond opgesteld. Silhouet van de schilder breekt voor het eerst met deze sobere benadering. Door de figuur in een interieur te situeren, roept Spilliaert de burgerlijke fin de siècle interieurs voor de geest. Het plaatsen van een figuur in tegenlicht, om zo het contrast met het felle zonlicht van een zomerse dag te benadrukken, is een stijlelement dat Spilliaert aan illustrerende tijdgenoten zoals Edvard Münch en James Ensor heeft ontleend`
    },
    {
      _id: 61,
      image: ``,
      painter: `Henri Le Sidaner`,
      name: `De tafel in de witte tuin te Gerberoy`,
      period: `1906`,
      city: `Orne`,
      lon: 48.5757591,
      lat: - 0.5024133,
      country: `FR`,
      desc: `Henri Le Sidaner behoort tot de tweede generatie Franse impressionisten. In 1901 kocht hij een huis in Gerberoy, een dorp, gelegen ten noordwesten van Beauvais in Frankrijk. Het sobere en eenvoudige leven in die omgeving pasten bij de beschouwende gevoeligheid van de kunstenaar. De Tafel in de witte tuin te Gerberoy uit 1906 is een van de talrijke intimistische taferelen met gedekte tafels en bloemen, binnenshuis of in de tuin, die Le Sidaner er schilderde. De menselijke figuur verdween uit zijn werk en zijn voorkeur ging uit naar de schemerige avonduren en naar nachtelijke taferelen bij maanlicht. In bewondering voor het werk van Le Sidaner schreef de dichter Emile Verhaeren: Deze kunstenaar slaagt erin de stilte op te roepen en wellicht daarom houden zijn doeken onze aandacht vast.`
    },
    {
      _id: 62,
      image: `2001-Q`,
      painter: `Alfred Stevens`,
      name: `Maria Magdalena`,
      period: `1887`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Alfred Stevens, schilder van het mondaine leven in Parijs, ontmoette de actrice Sarah Bernhardt rond 1887. Hij maakte meerdere portretten van haar. In een aantal ervan poseerde zij als een personage uit de geschiedenis of de literatuur. Hier zien we haar als Maria Magdalena, de courtisane uit het evangelie die zich later bekeerde en zich als kluizenares terugtrok. De lange haren, het doodshoofd vanitas-symbool bij uitstek en het desolate landschap op de achtergrond sluiten aan bij een iconografische traditie die tot in de middeleeuwen teruggaat. Typerend voor de negentiende eeuw is de uitdrukkelijke sensualiteit en de melancholische, bijna hallucinerende blik, waarmee Maria Magdalena de toeschouwer aankijkt. Daardoor vervaagt de religieuze context van het personage. Het schilderij werd besteld door de Parijse handelaar Georges Petit. Het uitdagende karakter van het werk, nochtans volledig in overeenstemming met de figuur van Maria Magdalena, choqueerde het grote publiek dat haar liever zag uitgebeeld als de berouwvolle boetelinge.`
    },
    {
      _id: 63,
      image: `1895-G`,
      painter: `Anders Zorn`,
      name: `Met moeder`,
      period: `1895`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Anders Zorn was een van de vele Scandinavische kunstenaars die zich in de late jaren 1880 in Parijs vestigde. Daar onderging hij de invloed van het impressionisme. Zorn debuteerde als aquarellist, wat later in zijn brede, virtuoze schildertechniek nog te merken is. Hij verwierf internationale bekendheid met portretten, huiselijke taferelen en naakten. Nieuw voor die tijd was zijn praktijk om de naakten, niet alleen in het atelier maar ook in open lucht te schilderen. Hier zien we een moeder, beschermend gebogen over haar kind dat angstig en onzeker zijn eerste stapjes in de zee zet. Opmerkelijk is de sensualiteit waarmee de figuren zijn geschilderd. Met een krachtige maar toch vloeiende penseelstreek in een ritmische afwisseling tussen blauw en roze slaagde Zorn erin de golvende beweging van het water weer te geven.`
    },
    {
      _id: 64,
      image: ``,
      painter: `Édouard Manet`,
      name: `De zigeuners`,
      period: `1862`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Ets in zwart op chine collé op velijnpapier.`
    },
    {
      _id: 65,
      image: `1892-A`,
      painter: `Emile Claus`,
      name: `IJsvogels`,
      period: `1891`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Rond 1889 kwam Emile Claus in de ban van het Franse impressionisme en verbleef gedurende drie winters in Parijs. De ijsvogels ontstond in die periode. Het schilderij kan dan ook beschouwd worden als een overgangswerk tussen zijn naturalistische periode en het op Franse leest geschoeide impressionisme dat hij vanaf de jaren 1890 toepaste. Een echo van het naturalisme is te zien in de waarheidsgetrouwe weergave van de kinderen, die hun spel hebben afgebroken en met hun ijsstoel de oever op klauteren. Het rozige avondlicht en de bredere toets kondigen dan weer het Belgische luminisme aan, waarvan Claus in de volgende decennia een van de leidende figuren werd.`
    },
    {
      _id: 66,
      image: `1914-AG`,
      painter: `Eugène Boudin`,
      name: `Koeien in een weide`,
      period: `19e eeuw`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Eugène Boudin is geboren in 1824, het jaar dat op het Salon van Parijs de tentoonstelling wordt gehouden die van grote betekenis zal zijn voor de bewustwording van de School van Barbizon. Op dit Salon worden Franse romantische kunstenaars als Eugène Delacroix en Théodore Géricault en Engelse landschapsschilders als Richard Parkes Bonington en John Constable geëxposeerd. Deze bevestigen de Barbizon-schilders in hun nieuwe visie op de landschapsschilderkunst en confirmeren de breuk tussen de klassieken en de modernen. Boudin begint dus zijn carrière als schilder in een tijd dat de moderne landschapsschilders reeds hun stempel op de Franse schilderkunst hebben gedrukt. Hun invloed is groot en ook Boudin ondergaat de inspirerende werking van deze kunstenaars. Boudin zette zijn schildersezel vaak neer aan de oevers van de rivier La Touquet om er o.m. de runderen te bestuderen. Een voorbeeld hiervan is Koeien in een wei. Hoe verder verwijderd van de toeschouwer, hoe meer de contouren van de vormen oplossen en hoe minder precies het volume zich aftekent. Deze suggestieve, bijna tachistische penseelvoering komt zeer modern over en het werk lijkt vooral een oefening in het schilderen te zijn dat, met uitzondering van de duidelijker weergegeven koe op de voorgrond, oogt als een bijna abstracte verzameling van vlekken en streken.`
    },
    {
      _id: 67,
      image: `1960-O`,
      painter: `Georges Rouault`,
      name: `Christus`,
      period: `20e eeuw`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Het heilige aanschijn toont ons het gelaat van Christus, afgebeeld op het doek van Veronica. Volgens de overlevering zou een vrouw tijdens de kruisweg het zweet en bloed van Christus’ gelaat hebben gewist. De afdruk die op het doek achterbleef gold als de enige en ware afbeelding van Christus. De vrouw kreeg pas later de naam Veronica, een verbastering van het Latijns-Griekse ‘vera eikon’, wat ware afbeelding betekent. Om het menselijk lijden en het onrecht in de wereld uit te drukken vond de Franse schilder Georges Rouault zowel inspiratie in bijbelse verhalen als in eigentijdse gebeurtenissen. Christus als de verpersoonlijking van dat menselijk lijden komt in zijn oeuvre herhaaldelijk terug.`
    },
    {
      _id: 68,
      image: `1898-I`,
      painter: `Henri Evenepoel`,
      name: `De Spanjaard in Parijs`,
      period: `1899`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Na een opleiding aan de Brusselse academie trok Henri Evenepoel in 1892 naar Parijs. Zoals vele andere kunstenaars was hij geboeid door de ontwikkelingen in de Franse kunst. Zijn meest voldragen werken ontstonden in de volgende jaren, zoals dit portret van zijn vriend, de Spaanse schilder Francisco Iturrino. De monumentale, sombere figuur, gehuld in een wijde cape, is op natuurlijke grootte voorgesteld op de Place Blanche. Het bovenste gedeelte van zijn lichaam tekent zich af tegen een geanimeerde achtergrond, waarin de Moulin Rouge in fel rood de aandacht trekt. De kleurenharmonie, de vastberaden stijl, de soberheid en de gedurfde mise-en-scène, die de figuur afscheidt van de massa, verlenen aan de voorgestelde man een grootse voornaamheid. In het atelier genomen foto’s bewijzen dat de figuur eerder werd geschilderd dan de achtergrond. Dit schilderij is het enige dat Evenepoel tijdens zijn leven aan een museum verkocht heeft. Het werd verworven ter gelegenheid van het Gentse Salon van 1899.`
    },
    {
      _id: 69,
      image: `1914-BB`,
      painter: `Henri Fantin-Latour`,
      name: `Portret van een jonge vrouw`,
      period: `1873`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `In tegenstelling tot de Franse impressionisten die tijdgenoten en goede vrienden waren was Henri Fantin-Latour een solitaire kunstenaar die een teruggetrokken bestaan leidde. Zijn thema’s bleven dan ook grotendeels beperkt tot zijn directe omgeving. Dit schilderij stelt zijn latere echtgenote Victoria Dubourg voor, maar is niet echt een portret. De schilder zelf beschouwde het als een studiewerk; hij bracht het opschrift ‘Etude’ aan op de achterzijde van het doek. De studiefase van het schilderij blijkt uit de schetsmatige techniek. Daarnaast illustreert het ingetogen kleurgebruik, de psychologische afstand en de afwezigheid van elke vorm van anekdotiek de eigenheid van Fantin-Latour als portretschilder.`
    },
    {
      _id: 70,
      image: ``,
      painter: `Honoré Daumier`,
      name: `De verzamelaars van prenten`,
      period: `1824`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Honoré Daumier is voornamelijk bekend als tekenaar en lithograaf. Er zijn bijna vierduizend prenten van hem bekend. Daarin hekelde hij de bourgeoisie van zijn tijd of bekeek hij de verdrukten van de maatschappij met milde spot. Schilderen met olieverf ervoer Daumier als tijdrovend en vele van zijn schilderijen bleven onafgewerkt. Tot zijn geliefkoosde onderwerpen behoren taferelen uit het dagelijkse leven en portretten van kunstenaars en advocaten. Ook Verzamelaars van prenten is een thema dat Daumier meermaals behandelde. De Gentse studie wordt gesitueerd omstreeks 1870-1873, een periode waarin de kunstenaar een vluchtige penseelvoering en theatrale lichteffecten hanteerde. De aandacht ging naar de expressieve houding van de liefhebbers.`
    },
    {
      _id: 71,
      image: ``,
      painter: `Maurice Denis`,
      name: `Amour`,
      period: `19e eeuw`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Maurice Denis's suite van dertien kleurenlithografen, Amour, is een van de geweldige printalbums die in de jaren 1890 in Parijs werden geproduceerd. De verhoogde kleuren, reductieve vorm en emotionele inhoud van de afdrukken zijn kenmerkend voor Denis's kunst uit de jaren 1890 en onthullen zijn betrokkenheid bij symbolistische ideeën. Denis werd algemeen beschouwd als het leidende lid van de groep Nabis in Parijs in de jaren 1890, een groep die ook Pierre Bonnard en Édouard Vuillard omvatte. Beïnvloed door de radicale, anti-naturalistische stijl van Paul Gauguin, trachten deze kunstenaars hun modernistische artistieke bezorgdheid in schilderijen, afdrukken, interieur en decoratieve kunst.`
    },
    {
      _id: 72,
      image: ``,
      painter: `Philippe de Champaigne`,
      name: `De Emmaüsgangers`,
      period: `1664`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Op negentienjarige leeftijd vergezelt Philippe de Champaigne (1602-1674) Peter Paul Rubens naar Parijs voor de decoratie van het Palais du Luxembourg. Na de terugreis van Rubens blijft De Champaigne, die van Franse afkomst is, in Parijs. Vrij spoedig wordt hij er tot hofschilder benoemd. De Champaigne slaagt erin een perfecte synthese te maken van de Vlaams realistische traditie en het opkomende classicisme in Frankrijk. Vanaf omstreeks 1643 werkt De Champaigne vaak voor de jansenisten van Port-Royal. Hij voelt zich verwant aan de contemplatieve strengheid en het spirituele klimaat van dit klooster. Zijn beste en meest authentieke werken dateren van deze periode. Het bijbels geïnspireerde historiestuk De Emmaüsgangers dateert van 1664. De Champaigne maakt verschillende versies van dit onderwerp. De versie uit het museum van Gent is een van de meest indrukwekkende. Het is mogelijk door het klooster van Port-Royal besteld. Een zacht clair-obscur omgeeft de monumentale, levensgrote figuren. Kenmerkend voor De Champaigne is de zachtmoedige ingetogenheid en eenvoud in de gelaatsuitdrukkingen en gebaren. De evangelist Lucas verhaalt hoe twee leerlingen van Jezus hem een dag na zijn verrijzenis op weg naar het dorp Emmaüs ontmoeten. Pas wanneer Jezus in de herberg het brood breekt, herkennen ze hem. De zoutpiramide op de tafel geldt als symbool voor gastvrijheid. De kat belichaamt van oudsher de onsterfelijkheid.`
    },
    {
      _id: 73,
      image: ``,
      painter: `Théodore Géricault`,
      name: `Portret van een kleptomaan`,
      period: `1820`,
      city: `Parijs`,
      lon: 48.8589507,
      lat: 2.2775172,
      country: `FR`,
      desc: `Rond 1820 schilderde Théodore Géricault (1791-1824) het Portret van de kleptomaan. Het werk maakt deel uit van een reeks van tien portretten van waanzinnigen, waarvan er slechts vijf bewaard zijn gebleven. De kunstenaar was in die tijd bevriend met de geneesheer Etienne-Jean Georget, die behoorde tot een groep verlichte artsen, de zogenaamde aliënisten. Zij beschouwden waanzin niet langer als een goddelijke straf, maar als een te behandelen ziekte of afwijking. De alinisten geloofden dat de galaatstrekken van de waanzinnige zijn afwijking verraadden. Zij introduceerden de term monomanie voor een psychische stoornis die zich uit in een welbepaalde obsessie of een enkel waandenkbeeld. In hun onderzoek hebben zij alle mogelijke bestaande middelen om expressies weer te geven benut, zoals gietvormen, bustes, tekeningen en gravures. Géricault was ongetwijfeld door hen beïnvloed. Zijn portretten verraadden zijn wetenschappelijke belangstelling voor krankzinnigen. Ongewoon voor die tijd zijn de waardigheid waarmee hij de krankzinnige heeft uitbeeld en de romantische inleving in de zieke geest van de patiënt. De soepele en suggestieve schilderwijze die Géricault in Portret van een kleptomaan hanteerde, relativeert het begrip voltooid schilderij en verleent het kunstwerk als studie een nieuwe eigenwaarde.`
    },
    {
      _id: 74,
      image: ``,
      painter: `Filippo Della Valle`,
      name: `Borstbeeld van Paus Clemens XII`,
      period: `18e eeuw`,
      city: `Rome`,
      lon: 41.9102415,
      lat: 12.3959142,
      country: `IT`,
      desc: `Filippo della Valle maakte carrière als beeldhouwer te Rome. Op vraag van Clemens XII sculpteerde hij de Gematigheid met twee putti voor de Corsini kapel van Sint-Jan van Lateranen. Geboren als prins Lorenzo Corsini in 1652 regeert hij als paus Clemens XII van 173 tot aan zijn dood in 1740. De blik van de geportretteerde maakt duidelijk dat Clemens XII blind geworden was. Het saneren van de financiën en het inrichten van een publiek loterij behoren tot zijn belangrijkste pauselijke verwezenlijkingen. De opbrengsten investeerde hij in wetenschappen en kunsten. Hij liet de Trevi fontein bouwen. Della Valle ontwierp de allegorische figuren voor Overvloed en Gezondheid, die de zeegod Neptunus flankeren.`
    },
    {
      _id: 75,
      image: `1906-R`,
      painter: `Théo van Rysselberghe`,
      name: `De lezing door Emile Verhaeren`,
      period: `1903`,
      city: `Saint-Cloud `,
      lon: 48.8440404,
      lat: 2.1851084,
      country: `GB`,
      desc: `Op een denkbeeldige bijeenkomst in zijn appartement in Saint-Cloud leest Emile Verhaeren voor uit eigen werk. De toehoorders zijn Franse en Belgische vrienden van Verhaeren en Théo Van Rysselberghe. Van links naar rechts herkennen we Félix Le Dantec, Francis Vielé-Griffin, Félix Fénéon, Henri Ghéon, André Gide, Maurice Maeterlinck, en, op de rug gezien, Henri-Edmond Cross, de enige schilder van het gezelschap. Het decor vult het litteraire en artistieke karakter van het groepsportret aan: een welgevulde boekenkast, een beeldje van Auguste Rodin, een reproductie van het Portret van Thomas Carlyle van James Abbott McNeill Whistler en een Geknielde van George Minne. De lezing is het hoogtepunt van de portretkunst e compositietechniek van Van Rysselberghe. Met zijn nadrukkelijke verftoetsen en opgevoerde koloriet vormt zijn stijl een persoonlijke variant op het neo-impressionisme. Tegelijk leest het doek als een historische getuigenis van de culturele banden tussen Frankrijk en België rond de eeuwwisseling.\n`
    },
    {
      _id: 76,
      image: `1924-N`,
      painter: `Paul De Vigne`,
      name: `Psyche`,
      period: `19e eeuw`,
      city: `Schaarbeek`,
      lon: 50.8621948,
      lat: 4.3500406,
      country: `BE`,
      desc: `Van Paul De Vigne bezit het museum een rijke beeldenverzameling. De Gentse kunstenaar behoorde tot de realistische strekking onder de Belgische beeldhouwers die inspiratie vonden bij de Italiaanse renaissancesculptuur en bij Jean-Baptiste Carpeaux, een Franse beeldhouwer die in België veel invloed had. In portretten en allegorische figuren, zoals hier bij deze Psyche, combineerde De Vigne een zeker classicisme met een verrassende natuurlijkheid. Het hoofd van het meisje staat lichtjes schuin, de hals is uitgerekt en de huid tot in de details weergegeven. De tegenstelling tussen haar ernstige blik en haar jeugdige leeftijd geeft haar een bijzondere kracht. Het beeld is uitgewerkt in ivoor, een geliefd materiaal bij beeldhouwers op het einde van de negentiende eeuw. Het Grieks ‘psyche’ betekent zowel ‘ziel’ als ‘vlinder’. Vandaar de vlindervleugels op haar rug. In de oudheid verwijst de vlinder naar de dood, in de christelijke traditie naar de opstanding. In relatie met de libel op de sokkel, zinnebeeld van elegantie en lichtheid, maar ook van zonde, wordt hier mogelijks  verwezen naar de strijd tussen goed en kwaad. `
    },
    {
      _id: 77,
      image: `1957-AG`,
      painter: `Léon De Smet`,
      name: `De verliefden`,
      period: `1911`,
      city: `Sint-Martens-Latem`,
      lon: 51.0084855,
      lat: 3.5881917,
      country: `BE`,
      desc: `Binnen het oeuvre van Leon de Smet is Interieur, ook wel De verliefden genoemd, zonder twijfel een hoogtepunt waarin de verstilde poëzie, die eigen is aan zijn werk, treffend tot uiting komt. Opmerkelijk zijn hier het geraffineerde kleurenpalet, de impressionistische toets en de uitgebalanceerde compositie, waarmee de kunstenaar een atmosferische weergave van ruimte en licht creëert. Zoals wel vaker gebeurde, integreerde Leon de Smet in Interieur twee van zijn eigen doeken. Ook George Minne is prominent aanwezig met De kleine reliekdrager op de schoorsteenmantel, een van zijn bekendste beelden, dat ook op andere schilderijen van Leon de Smet voorkomt.`
    },
    {
      _id: 78,
      image: `1902-T`,
      painter: `Henri Martin`,
      name: `Vallei in de avondschemering`,
      period: `1902`,
      city: `Toulouse`,
      lon: 43.6008029,
      lat: 1.3628012,
      country: `FR`,
      desc: `De vallei in de avondschemering van de Franse kunstenaar Henri Martin sluit schildertechnisch aan bij de neo-impressionistische stippeltechniek. Het intimistische tafereel overstijgt echter de loutere waarneming. De kunstenaar besteedt meer aandacht aan het schemerige licht, dat alle elementen verbindt, dan aan de ruimtelijke constructie. Het is alsof de natuur evenzeer beluisterd als bekeken wordt, alsof er meer sprake is van beleving dan van observatie. De gebalde compositie en de gouden glans van de ondergaande zon visualiseren de eenwording van mens en natuur. De twee personages op de voorgrond worden als het ware opgenomen door de akker die ze bewerken.`
    },
    {
      _id: 79,
      image: `1915-D`,
      painter: `Felice Casorati`,
      name: `Het meisje op het rode tapijt`,
      period: `1912`,
      city: `Turijn`,
      lon: 45.0702388,
      lat: 7.6000494,
      country: `IT`,
      desc: `Voor dit schilderij stond Ada Trentini model. Ze was de oudste dochter van Casorati's vriend Attilio Trentini, zelf een bekend schilder in die tijd. Er is een foto bewaard waarop Ada in een gelijkaardige houding op de grond ligt. Ongetwijfeld liet Casorati zich erdoor inspireren. Rond het meisje spreidde Casorati een aantal voorwerpen uit met een onmiskenbare symbolische betekenis. Ze verwijzen zowel naar de kindertijd die voorbij is, als naar de volwassenheid, een voor het jonge meisje nog onbestemde en vage toekomst. Heimwee en droom zijn hier onlosmakelijk met elkaar vervlochten. De vogelperspectief benadrukt de afstand tussen de toeschouwer en het meisje, dat zich in haar eigen wereldje heeft teruggetrokken. Op subtiele wijze wordt de buitenwereld door het binnenvallend zonlicht op het tapijt gesuggereerd. Ook de bevreemdende combinatie van rood en blauw-violet draagt bij tot het symbolistisch karakter van het schilderij.`
    },
    {
      _id: 80,
      image: ``,
      painter: `Tintoretto`,
      name: `Portret van Giovanni Paolo Cornaro`,
      period: `1561`,
      city: `Venetië`,
      lon: 45.405819,
      lat: 12.2416593,
      country: `IT`,
      desc: `In Italië beleeft de portretschilderkunst vanaf de 16de eeuw een hoge bloei. Het Portret van Paolo Cornaro Hermolai, op de leeftijd van tweeëndertig jaar, dateert van 1561 en is een voorbeeld van een statusportret. Stilistisch behoort het werk tot de officiële richting in de Venetiaanse portretschilderkunst, waarbij de figuren statisch tegen een donkere achtergrond worden voorgesteld. Het werk is van de hand van de Venetiaan Jacopo Robusto, genaamd Il Tintoretto (1518-1594). De hier geportretteerde is een kenner van de antieken en behoort tot de gezaghebbende Venetiaanse familie Cornaro, waarvan verscheidene leden bekendheid genieten als humanist en kunstenaar.`
    },
    {
      _id: 81,
      image: `1902-H`,
      painter: `Jheronimus Bosch`,
      name: `De kruisdraging`,
      period: `15e eeuw`,
      city: `Wenen`,
      lon: 48.2208286,
      lat: 16.2399769,
      country: `AT`,
      desc: `De Kruisdraging behoort tot de late werken van Jheronimus Bosch en is een van de meest intrigerende composities in de westerse kunst. Elk gevoel van ruimte is hier weggelaten. Een chaotische massa van boosaardige tronies omstuwt het hoofd van Christus. De opbouw van het schilderij is echter vrij streng. Het hoofd van Christus ligt precies op de kruising van twee diagonalen. De balk van het kruis vormt de ene diagonaal, met links boven de figuur van Simon van Cyrene en rechts onder de slechte moordenaar. De andere diagonaal verbindt de afdruk van het gelaat van Christus op de zweetdoek van Veronica onderaan links met de goede moordenaar bovenaan rechts. Die wordt belaagd door een gemene kwakzalver of farizeeër en een boosaardige monnik. Met deze laatste alludeerde Bosch op het godsdienstfanatisme van zijn tijd. De groteske koppen herinneren aan de maskers die gebruikt werden tijdens de passiespelen, maar ook aan de karikaturen van Leonardo da Vinci. Het zacht gemodelleerde gelaat van Christus daarentegen drukt een grote sereniteit uit. Hij is de Lijdende, die, door iedereen verlaten, het kwade van de wereld overwint. Die voorstelling past volledig bij het gedachtegoed van de lekenbroederschappen, waartoe ook Bosch behoorde.`
    },
    {
      _id: 82,
      image: `1908-H`,
      painter: `Jheronimus Bosch`,
      name: `De Heilige Hiëronymus in gebed`,
      period: `15e eeuw`,
      city: `Wenen`,
      lon: 48.2208286,
      lat: 16.2399769,
      country: `AT`,
      desc: `Het werk van Jheronimus Bosch kwam tot stand in een religieuze context in volle ontwikkeling. De vijftiende en zestiende eeuw werden gekenmerkt door de beweging van de moderne devotie en het burgerlijk humanisme. Essentieel in de moderne devotie is de tendens om de religie te herleiden tot de leer van Christus. De heiligeniconografie was meestal tot één type beperkt: de eenzame, gekwelde kluizenaar die het kwaad overwint. Bosch schiep een buitengewoon en universeel oeuvre, waarin het gevecht tussen goed en kwaad het centrale thema vormt. Vaak hanteerde hij een visionaire beeldtaal die zijn wortels heeft in de verbeeldingswereld en de taal van het volk. \nHiëronymus leefde in de vierde eeuw en was een van de vier westerse kerkvaders. Op achtendertigjarige leeftijd trok hij zich terug uit het openbare leven van Rome om in Palestina een ascetisch leven te leiden. Te midden van een chaos van vreemdsoortige planten, boomstronken en gesteenten ligt Hiëronymus halfnaakt, in gebed verzonken, met het kruis tussen zijn armen. De leeuw, het attribuut van de heilige, is hier veranderd in een klein huisdier. Een volkse legende verhaalt hoe Hiëronymus een leeuw van een pijnlijke doorn in zijn poot bevrijdde en hem zo tot vriend maakte. Ook tal van andere dieren bevolken de vreemde wereld waarin de heilige zich heeft teruggetrokken.`
    },
    {
      _id: 83,
      image: ``,
      painter: `Alberto Giacometti`,
      name: `Landschap`,
      period: `20e eeuw`,
      city: `Zwitserland`,
      lon: 46.7912769,
      lat: 7.1031645,
      country: `CHE`,
      desc: `Studie naar het Lam Gods van Jan Van Eyck`
    }
  ]

  @action
  getTourById = _id => {
    return this.tours.find(t => t._id === parseInt(_id));
  }

  @action
  getArtworkById = _id => {
    return this.artworks.find(a => a._id === parseInt(_id));
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
