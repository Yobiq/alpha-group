import type { Language } from "./translations"

// Content blocks for a legal document section.
export type LegalBlock = { type: "p"; text: string } | { type: "list"; items: string[] }

export type LegalSection = {
  heading?: string
  blocks: LegalBlock[]
}

export type LegalDoc = {
  title: string
  updatedLabel: string
  updated: string
  intro?: LegalBlock[]
  sections: LegalSection[]
}

// Documents are the legal source of truth in Dutch. English is a courtesy
// translation. Spanish/Chinese fall back to Dutch (handled by getLegalDoc).
type DocKey = "goteam-terms" | "goteam-privacy" | "alphabouw-terms" | "alphabouw-privacy"

type LegalContent = Record<"nl" | "en", Record<DocKey, LegalDoc>>

const content: LegalContent = {
  nl: {
    "goteam-terms": {
      title: "Algemene voorwaarden – GOTEAM",
      updatedLabel: "Laatst bijgewerkt",
      updated: "2025",
      intro: [
        {
          type: "p",
          text: "De uitzendverhouding kent drie partijen: de opdrachtgever, de uitzendkracht en de uitzendonderneming.",
        },
        {
          type: "p",
          text: "De uitzendovereenkomst tussen de uitzendkracht en de uitzendonderneming is gedefinieerd in artikel 7:690 van het Burgerlijk Wetboek. Dit houdt in dat de uitzendkracht in dienst is van de uitzendonderneming en onder leiding en toezicht van de opdrachtgever werkt.",
        },
        { type: "p", text: "GOTEAM stelt uitzendkrachten ter beschikking aan opdrachtgevers. Er bestaat:" },
        {
          type: "list",
          items: [
            "een arbeidsovereenkomst tussen GOTEAM en de uitzendkracht",
            "een overeenkomst tussen GOTEAM en de opdrachtgever",
          ],
        },
        { type: "p", text: "De opdrachtgever is verantwoordelijk voor:" },
        { type: "list", items: ["begeleiding", "werkomstandigheden", "veiligheid"] },
        { type: "p", text: "GOTEAM zorgt voor:" },
        { type: "list", items: ["werving", "selectie", "verloning"] },
      ],
      sections: [
        {
          heading: "Bedrijfsgegevens",
          blocks: [
            {
              type: "list",
              items: [
                "GOTEAM",
                "Marktplein 36, 7311 LR Apeldoorn, Nederland",
                "Telefoon: +31 85 401 5937",
                "E-mail: info@alpgr.com",
                "KvK: [invullen]",
              ],
            },
          ],
        },
        {
          heading: "Artikel 1 – Toepasselijkheid",
          blocks: [
            {
              type: "p",
              text: "Deze voorwaarden zijn van toepassing op alle aanbiedingen, opdrachten en overeenkomsten van GOTEAM met betrekking tot het ter beschikking stellen van uitzendkrachten.",
            },
            { type: "p", text: "Afwijkingen zijn alleen geldig indien schriftelijk bevestigd door GOTEAM." },
          ],
        },
        {
          heading: "Artikel 2 – Definities",
          blocks: [
            {
              type: "list",
              items: [
                "Opdracht: overeenkomst tussen opdrachtgever en GOTEAM",
                "Uitzendkracht: werknemer van GOTEAM",
                "Terbeschikkingstelling: inzet van uitzendkracht bij opdrachtgever",
                "Opdrachtgevertarief: afgesproken tarief per uur",
                "CAO: CAO voor Uitzendkrachten",
              ],
            },
          ],
        },
        {
          heading: "Artikel 3 – Opdracht en duur",
          blocks: [
            { type: "p", text: "Opdrachten kunnen zijn:" },
            { type: "list", items: ["bepaalde tijd (vast)", "onbepaalde tijd (flexibel)"] },
            { type: "p", text: "Opzegtermijn: minimaal 14 dagen, tenzij anders afgesproken." },
            { type: "p", text: "GOTEAM mag:" },
            { type: "list", items: ["uitzendkracht vervangen", "opdracht beëindigen bij geldige reden"] },
          ],
        },
        {
          heading: "Artikel 4 – In dienst nemen uitzendkracht",
          blocks: [
            { type: "p", text: "Opdrachtgever mag een uitzendkracht niet zomaar overnemen." },
            { type: "p", text: "Bij overname geldt een vergoeding (indicatief):" },
            { type: "list", items: ["binnen 10 weken: 20%", "10–19 weken: 15%", "19–27 weken: 10%"] },
            { type: "p", text: "Dit voorkomt dat jouw investering verloren gaat." },
          ],
        },
        {
          heading: "Artikel 5 – Opschorting werk",
          blocks: [
            {
              type: "p",
              text: "Opdrachtgever mag werk niet zomaar stilleggen. Indien geen werk → betaling blijft meestal verplicht.",
            },
          ],
        },
        {
          heading: "Artikel 6 – Werk en werktijden",
          blocks: [
            { type: "p", text: "Opdrachtgever bepaalt:" },
            { type: "list", items: ["werktijden", "werkzaamheden"] },
            { type: "p", text: "Moet zich houden aan:" },
            { type: "list", items: ["wet", "CAO"] },
          ],
        },
        {
          heading: "Artikel 7 – Goed opdrachtgeverschap",
          blocks: [
            { type: "p", text: "Opdrachtgever moet uitzendkracht behandelen als eigen personeel." },
            { type: "p", text: "Niet toegestaan:" },
            { type: "list", items: ["doorlenen aan andere bedrijven"] },
          ],
        },
        {
          heading: "Artikel 8 – Veiligheid en aansprakelijkheid",
          blocks: [
            { type: "p", text: "Opdrachtgever is verantwoordelijk voor:" },
            { type: "list", items: ["veilige werkplek", "instructies", "naleving Arbowet"] },
            { type: "p", text: "Opdrachtgever vrijwaart GOTEAM voor schadeclaims van uitzendkracht." },
          ],
        },
        {
          heading: "Artikel 9 – Aansprakelijkheid",
          blocks: [
            { type: "p", text: "GOTEAM is niet aansprakelijk voor:" },
            { type: "list", items: ["schade veroorzaakt door uitzendkracht", "fouten van uitzendkracht"] },
            { type: "p", text: "Opdrachtgever moet hiervoor verzekerd zijn." },
          ],
        },
        {
          heading: "Artikel 10 – Tarieven",
          blocks: [
            { type: "p", text: "Opdrachtgever betaalt:" },
            { type: "list", items: ["uurloon + marge"] },
            { type: "p", text: "Tarief kan stijgen door:" },
            { type: "list", items: ["cao wijzigingen", "loonsverhogingen", "wetgeving"] },
          ],
        },
        {
          heading: "Artikel 11 – Betaling",
          blocks: [
            {
              type: "list",
              items: ["Betaling binnen 14 dagen", "Bij te laat betalen: rente + kosten", "Geen opschorting toegestaan"],
            },
          ],
        },
        {
          heading: "Artikel 12 – Urenregistratie",
          blocks: [
            { type: "p", text: "Uren worden geregistreerd en goedgekeurd door opdrachtgever." },
            { type: "p", text: "Bij verschil → administratie GOTEAM leidend." },
          ],
        },
        {
          heading: "Artikel 13 – Aansprakelijkheid GOTEAM",
          blocks: [
            { type: "p", text: "Aansprakelijkheid beperkt tot:" },
            { type: "list", items: ["max. 20% van opdrachtwaarde (tot 26 weken)"] },
            { type: "p", text: "Geen aansprakelijkheid voor:" },
            { type: "list", items: ["indirecte schade", "gemiste winst"] },
          ],
        },
        {
          heading: "Artikel 14 – Discriminatie",
          blocks: [
            { type: "p", text: "Geen onderscheid op basis van:" },
            { type: "list", items: ["afkomst", "geslacht", "religie", "etc."] },
          ],
        },
        {
          heading: "Artikel 15 – Geheimhouding",
          blocks: [{ type: "p", text: "Uitzendkracht kan verplicht worden tot geheimhouding." }],
        },
        {
          heading: "Artikel 16 – Overmacht",
          blocks: [
            { type: "p", text: "Bij overmacht (ziekte, storing, etc.):" },
            { type: "list", items: ["geen verplichting tot nakoming", "geen schadevergoeding"] },
          ],
        },
        {
          heading: "Artikel 17 – Geschillen",
          blocks: [{ type: "list", items: ["Nederlands recht van toepassing", "bevoegde rechter in Nederland"] }],
        },
      ],
    },

    "alphabouw-terms": {
      title: "Algemene Voorwaarden – Alpha Bouw",
      updatedLabel: "Laatst bijgewerkt",
      updated: "2025",
      sections: [
        {
          heading: "Artikel 1 – Definities",
          blocks: [
            {
              type: "p",
              text: "In deze algemene voorwaarden worden de hierna volgende termen in de navolgende betekenis gebruikt:",
            },
            {
              type: "list",
              items: [
                "Aannemer: Alpha Bouw",
                "Opdrachtgever: de wederpartij van aannemer",
                "Overeenkomst: de overeenkomst tussen aannemer en opdrachtgever",
                "Algemene voorwaarden: de algemene voorwaarden van aannemer",
                "Schriftelijk: in geschrift of via een elektronisch communicatiemedium",
                "Elektronisch communicatiemedium: e-mail, WhatsApp, SMS, het contactformulier via de website",
                "Website: de website van aannemer",
                "Werkdag: maandag t/m vrijdag, met uitzondering van feestdagen en collectieve vrije dagen",
              ],
            },
          ],
        },
        {
          heading: "Artikel 2 – Algemeen",
          blocks: [
            {
              type: "list",
              items: [
                "Deze voorwaarden gelden voor iedere offerte en overeenkomst van Alpha Bouw, tenzij schriftelijk anders overeengekomen.",
                "Ook van toepassing bij inzet van derden.",
                "Ongeldige bepalingen laten de rest van de voorwaarden in stand.",
                "Opdrachtgever kan een gemachtigde aanwijzen, mits schriftelijk gemeld.",
                "Gebruik van elektronische communicatie is voor risico van opdrachtgever.",
              ],
            },
          ],
        },
        {
          heading: "Artikel 3 – Overeenkomst en offertes",
          blocks: [
            {
              type: "list",
              items: [
                "Offertes zijn vrijblijvend en alleen schriftelijk geldig.",
                "Geldigheid offerte: 1 maand.",
                "Deelopdrachten verplichten niet tot gedeeltelijke uitvoering tegen deelprijs.",
              ],
            },
          ],
        },
        {
          heading: "Artikel 4 – Verplichtingen opdrachtgever",
          blocks: [
            { type: "p", text: "Opdrachtgever zorgt tijdig voor:" },
            {
              type: "list",
              items: [
                "juiste informatie",
                "toegang tot werkplek",
                "vergunningen",
                "KLIC-melding (indien nodig)",
                "benodigde middelen (zoals machines indien afgesproken)",
              ],
            },
            {
              type: "p",
              text: "Bij vertraging mogen kosten worden doorberekend en wordt oplevering uitgesteld.",
            },
            { type: "p", text: "Opdrachtgever:" },
            {
              type: "list",
              items: [
                "is verantwoordelijk voor aangeleverde materialen",
                "vrijwaart aannemer voor claims van derden",
                "zorgt dat werkzaamheden ongehinderd kunnen plaatsvinden",
              ],
            },
          ],
        },
        {
          heading: "Artikel 5 – Verplichtingen aannemer",
          blocks: [
            {
              type: "list",
              items: [
                "Alpha Bouw voert werk uit volgens goed vakmanschap.",
                "Mag derden inschakelen.",
                "Is niet aansprakelijk voor fouten door verkeerde info opdrachtgever.",
                "Mag werk ter goedkeuring voorleggen.",
                "Beperkt overlast en schade waar mogelijk.",
              ],
            },
          ],
        },
        {
          heading: "Artikel 6 – Vergunningen en bodem",
          blocks: [
            {
              type: "list",
              items: [
                "Indien afgesproken regelt aannemer vergunningen, met medewerking opdrachtgever.",
                "Bij problemen met vergunning kan overeenkomst aangepast of ontbonden worden.",
                "Asbest of vervuiling = meerwerk.",
              ],
            },
          ],
        },
        {
          heading: "Artikel 7 – Termijnen",
          blocks: [{ type: "list", items: ["Termijnen zijn indicatief.", "Aanspraken vervallen na 1 jaar."] }],
        },
        {
          heading: "Artikel 8 – Afwijkingen",
          blocks: [
            { type: "p", text: "Kleine afwijkingen geven geen recht op:" },
            { type: "list", items: ["afkeuring", "korting", "schadevergoeding"] },
            { type: "p", text: "Goederen moeten binnen 24 uur gecontroleerd worden." },
          ],
        },
        {
          heading: "Artikel 9 – Prijzen en facturatie",
          blocks: [
            {
              type: "list",
              items: [
                "Alle prijzen excl. btw",
                "Extra kosten kunnen worden doorberekend",
                "Facturatie in termijnen mogelijk",
                "Prijsstijgingen mogen worden doorgevoerd bij kostenstijging",
              ],
            },
          ],
        },
        {
          heading: "Artikel 10 – Wijzigingen",
          blocks: [
            { type: "p", text: "Wijzigingen kunnen:" },
            { type: "list", items: ["meerwerk opleveren", "planning beïnvloeden", "prijs aanpassen"] },
            { type: "p", text: "Aannemer mag wijziging weigeren indien onredelijk." },
          ],
        },
        {
          heading: "Artikel 11 – Betaling",
          blocks: [
            {
              type: "list",
              items: [
                "Betaling binnen 14 dagen",
                "Bij te laat betalen: rente + incassokosten",
                "Werk kan worden stilgelegd bij wanbetaling",
              ],
            },
          ],
        },
        {
          heading: "Artikel 12 – Oplevering",
          blocks: [
            { type: "p", text: "Werk is opgeleverd wanneer:" },
            { type: "list", items: ["opdrachtgever goedkeurt", "werk in gebruik wordt genomen", "geen reactie binnen 8 dagen"] },
            { type: "p", text: "Kleine gebreken blokkeren oplevering niet." },
          ],
        },
        {
          heading: "Artikel 13 – Eigendomsvoorbehoud",
          blocks: [{ type: "p", text: "Materialen blijven eigendom van Alpha Bouw tot volledige betaling." }],
        },
        {
          heading: "Artikel 14 – Opschorting en ontbinding",
          blocks: [
            { type: "p", text: "Alpha Bouw mag werk stoppen bij:" },
            { type: "list", items: ["wanbetaling", "risico op niet-betalen"] },
            { type: "p", text: "Bij opzegging door opdrachtgever:" },
            {
              type: "list",
              items: ["betaling reeds uitgevoerd werk", "+ 10% van resterende opdracht", "+ gemaakte kosten"],
            },
          ],
        },
        {
          heading: "Artikel 15 – Aansprakelijkheid",
          blocks: [
            {
              type: "list",
              items: [
                "Beperkt tot verzekeringsuitkering",
                "Maximaal €5.000 indien niet verzekerd",
                "Geen aansprakelijkheid voor indirecte schade",
              ],
            },
          ],
        },
        {
          heading: "Artikel 16 – Overmacht",
          blocks: [
            { type: "p", text: "Bij overmacht (zoals slecht weer, staking, etc.):" },
            { type: "list", items: ["verplichtingen worden opgeschort", "geen schadevergoeding"] },
          ],
        },
        {
          heading: "Artikel 17 – Intellectueel eigendom",
          blocks: [{ type: "p", text: "Alle ontwerpen en documenten blijven eigendom van Alpha Bouw." }],
        },
        {
          heading: "Artikel 18 – Geschillen",
          blocks: [{ type: "list", items: ["Nederlands recht van toepassing", "Nederlandse rechter bevoegd"] }],
        },
        {
          heading: "Bedrijfsgegevens",
          blocks: [
            {
              type: "list",
              items: [
                "Alpha Bouw",
                "Marktplein 36, 7311 LR Apeldoorn, Nederland",
                "Telefoon: +31 85 401 5937",
                "E-mail: [invullen]",
                "KvK: [invullen]",
              ],
            },
          ],
        },
      ],
    },

    "goteam-privacy": {
      title: "Privacyverklaring GoTeam B.V.",
      updatedLabel: "Laatst bijgewerkt",
      updated: "2025",
      intro: [
        {
          type: "p",
          text: "Bij GoTeam B.V. hechten wij veel waarde aan de bescherming van de persoonsgegevens van onze klanten, medewerkers en bezoekers van onze website. In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen, hoe wij deze gebruiken, en welke rechten u heeft.",
        },
        {
          type: "p",
          text: "GoTeam B.V. verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).",
        },
      ],
      sections: [
        {
          heading: "1. Wie is verantwoordelijk voor uw gegevens?",
          blocks: [
            {
              type: "p",
              text: "GoTeam B.V. is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.",
            },
            { type: "p", text: "Contactgegevens:" },
            {
              type: "list",
              items: [
                "Bedrijfsnaam: GoTeam B.V.",
                "Adres: [Vul hier uw adres in]",
                "E-mail: [Vul hier uw e-mailadres in]",
                "Telefoon: [Vul hier uw telefoonnummer in]",
              ],
            },
          ],
        },
        {
          heading: "2. Welke gegevens verzamelen wij?",
          blocks: [
            {
              type: "p",
              text: "Wij verzamelen persoonsgegevens die nodig zijn om onze diensten aan te bieden en onze wettelijke verplichtingen na te komen. Hieronder vallen onder andere:",
            },
            {
              type: "list",
              items: [
                "Naam, adres, woonplaats, e-mailadres en telefoonnummer",
                "Gebruikersnaam en wachtwoord bij online diensten",
                "Financiële gegevens, zoals facturatie- en betalingsinformatie",
                "Eventuele gegevens die u vrijwillig verstrekt bij communicatie met ons",
              ],
            },
          ],
        },
        {
          heading: "3. Doeleinden van verwerking",
          blocks: [
            { type: "p", text: "Wij verwerken uw persoonsgegevens voor de volgende doeleinden:" },
            {
              type: "list",
              items: [
                "Het leveren van onze diensten en producten",
                "Het beheren van contracten en opdrachten",
                "Het uitvoeren van financiële administratie en facturatie",
                "Het informeren over onze diensten, aanbiedingen of wijzigingen",
                "Het voldoen aan wettelijke verplichtingen",
              ],
            },
          ],
        },
        {
          heading: "4. Rechtsgrond voor verwerking",
          blocks: [
            {
              type: "p",
              text: "De verwerking van persoonsgegevens door GoTeam B.V. is gebaseerd op een of meer van de volgende rechtsgronden:",
            },
            {
              type: "list",
              items: [
                "Uitvoering van een overeenkomst",
                "Wettelijke verplichting",
                "Gerechtvaardigd belang, bijvoorbeeld voor administratie en communicatie",
                "Toestemming van de betrokkene (indien vereist)",
              ],
            },
          ],
        },
        {
          heading: "5. Delen van gegevens met derden",
          blocks: [
            {
              type: "p",
              text: "Uw gegevens worden uitsluitend gedeeld met derden als dit noodzakelijk is voor de uitvoering van onze dienstverlening of om te voldoen aan wettelijke verplichtingen. Voorbeelden zijn:",
            },
            {
              type: "list",
              items: [
                "Financiële instellingen en accountants",
                "Softwareleveranciers voor boekhouding en planning",
                "Overheidsinstanties, wanneer wettelijk verplicht",
              ],
            },
          ],
        },
        {
          heading: "6. Bewaartermijn",
          blocks: [
            {
              type: "p",
              text: "Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of zolang als wettelijk verplicht is. Na het verstrijken van de bewaartermijn worden gegevens veilig verwijderd.",
            },
          ],
        },
        {
          heading: "7. Beveiliging van gegevens",
          blocks: [
            {
              type: "p",
              text: "GoTeam B.V. neemt passende technische en organisatorische maatregelen om persoonsgegevens te beveiligen tegen verlies, diefstal en onbevoegde toegang.",
            },
          ],
        },
        {
          heading: "8. Uw rechten",
          blocks: [
            { type: "p", text: "U heeft rechten met betrekking tot uw persoonsgegevens:" },
            {
              type: "list",
              items: [
                "Recht op inzage en kopie van uw gegevens",
                "Recht op rectificatie van onjuiste gegevens",
                "Recht op gegevenswissing (indien toegestaan)",
                "Recht op beperking van verwerking",
                "Recht op bezwaar tegen verwerking",
                "Recht op gegevensoverdraagbaarheid",
              ],
            },
            {
              type: "p",
              text: "Verzoeken kunt u richten aan privacy@goteam.nl of via de contactgegevens bovenaan deze verklaring.",
            },
          ],
        },
        {
          heading: "9. Wijzigingen",
          blocks: [
            {
              type: "p",
              text: "GoTeam B.V. behoudt zich het recht voor deze privacyverklaring te wijzigen. Wij adviseren onze klanten en bezoekers om regelmatig deze verklaring te controleren op eventuele wijzigingen.",
            },
          ],
        },
      ],
    },

    "alphabouw-privacy": {
      title: "Privacyverklaring – Alpha Bouw",
      updatedLabel: "Laatst bijgewerkt",
      updated: "2025",
      intro: [
        {
          type: "p",
          text: "Alpha Bouw, gevestigd aan Marktplein 36, 7311 LR Apeldoorn, Nederland, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.",
        },
        {
          type: "p",
          text: "Contactgegevens: Marktplein 36, 7311 LR Apeldoorn, Nederland. Telefoon: +31 85 401 5937. E-mail: [hier invullen]. KvK-nummer: [hier invullen].",
        },
      ],
      sections: [
        {
          heading: "Persoonsgegevens die wij verwerken",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw verwerkt je persoonsgegevens doordat je gebruik maakt van onze diensten en/of omdat je deze gegevens zelf aan ons verstrekt.",
            },
            { type: "p", text: "Hieronder vind je een overzicht van de persoonsgegevens die wij verwerken:" },
            {
              type: "list",
              items: [
                "Voor- en achternaam",
                "Telefoonnummer",
                "E-mailadres",
                "Gegevens over jouw activiteiten op onze website",
              ],
            },
          ],
        },
        {
          heading: "Bijzondere en/of gevoelige persoonsgegevens die wij verwerken",
          blocks: [
            {
              type: "p",
              text: "Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar, tenzij zij toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is.",
            },
            {
              type: "p",
              text: "Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming.",
            },
            {
              type: "p",
              text: "Als je ervan overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op via [e-mail invullen], dan verwijderen wij deze informatie.",
            },
          ],
        },
        {
          heading: "Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken",
          blocks: [
            { type: "p", text: "Alpha Bouw verwerkt jouw persoonsgegevens voor de volgende doelen:" },
            {
              type: "list",
              items: [
                "Je te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren",
                "Alpha Bouw analyseert jouw gedrag op de website om daarmee de website te verbeteren en het aanbod van producten en diensten af te stemmen op jouw voorkeuren",
              ],
            },
          ],
        },
        {
          heading: "Hoe lang we persoonsgegevens bewaren",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw bewaart je persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor je gegevens worden verzameld.",
            },
            {
              type: "p",
              text: "Wij bewaren uw gegevens zolang u klant bij ons bent. Dit betekent dat wij uw klantprofiel bewaren totdat u aangeeft dat u niet langer van onze diensten gebruik wenst te maken.",
            },
            {
              type: "p",
              text: "Als u dit bij ons aangeeft, zullen wij dit tevens opvatten als een verzoek tot verwijdering. Op grond van administratieve verplichtingen dienen wij facturen met uw (persoons)gegevens te bewaren. Deze gegevens bewaren wij zolang de wettelijke termijn loopt.",
            },
            {
              type: "p",
              text: "Medewerkers hebben geen toegang meer tot uw cliëntprofiel en documenten die wij naar aanleiding van uw opdracht hebben vervaardigd.",
            },
          ],
        },
        {
          heading: "Delen van persoonsgegevens met derden",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw verkoopt jouw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst of om te voldoen aan een wettelijke verplichting.",
            },
            {
              type: "p",
              text: "Met bedrijven die jouw gegevens verwerken in onze opdracht, sluiten wij een verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid. Alpha Bouw blijft verantwoordelijk voor deze verwerkingen.",
            },
          ],
        },
        {
          heading: "Cookies, of vergelijkbare technieken, die wij gebruiken",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw gebruikt alleen technische en functionele cookies en analytische cookies die geen inbreuk maken op je privacy.",
            },
            {
              type: "p",
              text: "Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op jouw apparaat. Deze cookies zijn noodzakelijk voor de technische werking van de website en jouw gebruiksgemak.",
            },
            {
              type: "p",
              text: "Je kunt je afmelden voor cookies via de instellingen van je browser en eerder opgeslagen gegevens verwijderen.",
            },
          ],
        },
        {
          heading: "Gegevens inzien, aanpassen of verwijderen",
          blocks: [
            {
              type: "p",
              text: "Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te verwijderen.",
            },
            { type: "p", text: "Daarnaast heb je het recht om:" },
            {
              type: "list",
              items: ["Je toestemming in te trekken", "Bezwaar te maken tegen verwerking", "Gegevens over te laten dragen"],
            },
            { type: "p", text: "Je kunt een verzoek sturen naar: [e-mail invullen]" },
            { type: "p", text: "Wij reageren zo snel mogelijk, maar uiterlijk binnen vier weken." },
          ],
        },
        {
          heading: "Klacht indienen",
          blocks: [
            {
              type: "p",
              text: "Je hebt het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens. Dit kan via: https://autoriteitpersoonsgegevens.nl/",
            },
          ],
        },
        {
          heading: "Hoe wij persoonsgegevens beveiligen",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw neemt de bescherming van jouw gegevens serieus en neemt passende maatregelen tegen misbruik, verlies of onbevoegde toegang.",
            },
            {
              type: "p",
              text: "Als je denkt dat jouw gegevens niet goed beveiligd zijn, neem dan contact met ons op via [e-mail invullen].",
            },
          ],
        },
        {
          heading: "Contactgegevens",
          blocks: [
            {
              type: "list",
              items: ["Alpha Bouw", "Marktplein 36, 7311 LR Apeldoorn, Nederland", "Telefoon: +31 85 401 5937"],
            },
          ],
        },
      ],
    },
  },

  en: {
    "goteam-terms": {
      title: "Terms & Conditions – GOTEAM",
      updatedLabel: "Last updated",
      updated: "2025",
      intro: [
        {
          type: "p",
          text: "The temporary employment relationship involves three parties: the client, the temporary worker and the staffing company.",
        },
        {
          type: "p",
          text: "The employment contract between the temporary worker and the staffing company is defined in Article 7:690 of the Dutch Civil Code. This means the temporary worker is employed by the staffing company and works under the direction and supervision of the client.",
        },
        { type: "p", text: "GOTEAM makes temporary workers available to clients. There is:" },
        {
          type: "list",
          items: [
            "an employment contract between GOTEAM and the temporary worker",
            "an agreement between GOTEAM and the client",
          ],
        },
        { type: "p", text: "The client is responsible for:" },
        { type: "list", items: ["supervision", "working conditions", "safety"] },
        { type: "p", text: "GOTEAM takes care of:" },
        { type: "list", items: ["recruitment", "selection", "payroll"] },
      ],
      sections: [
        {
          heading: "Company details",
          blocks: [
            {
              type: "list",
              items: [
                "GOTEAM",
                "Marktplein 36, 7311 LR Apeldoorn, Netherlands",
                "Phone: +31 85 401 5937",
                "Email: info@alpgr.com",
                "Chamber of Commerce (KvK): [to be completed]",
              ],
            },
          ],
        },
        {
          heading: "Article 1 – Applicability",
          blocks: [
            {
              type: "p",
              text: "These terms apply to all offers, assignments and agreements of GOTEAM regarding the provision of temporary workers.",
            },
            { type: "p", text: "Deviations are only valid if confirmed in writing by GOTEAM." },
          ],
        },
        {
          heading: "Article 2 – Definitions",
          blocks: [
            {
              type: "list",
              items: [
                "Assignment: agreement between client and GOTEAM",
                "Temporary worker: employee of GOTEAM",
                "Provision: deployment of a temporary worker at the client",
                "Client rate: agreed hourly rate",
                "CAO: Collective Labour Agreement for Temporary Workers",
              ],
            },
          ],
        },
        {
          heading: "Article 3 – Assignment and duration",
          blocks: [
            { type: "p", text: "Assignments can be:" },
            { type: "list", items: ["fixed term (fixed)", "indefinite term (flexible)"] },
            { type: "p", text: "Notice period: at least 14 days, unless agreed otherwise." },
            { type: "p", text: "GOTEAM may:" },
            { type: "list", items: ["replace the temporary worker", "end the assignment for a valid reason"] },
          ],
        },
        {
          heading: "Article 4 – Taking on a temporary worker",
          blocks: [
            { type: "p", text: "The client may not simply take over a temporary worker." },
            { type: "p", text: "On takeover, a fee applies (indicative):" },
            { type: "list", items: ["within 10 weeks: 20%", "10–19 weeks: 15%", "19–27 weeks: 10%"] },
            { type: "p", text: "This prevents your investment from being lost." },
          ],
        },
        {
          heading: "Article 5 – Suspension of work",
          blocks: [
            {
              type: "p",
              text: "The client may not simply halt work. If there is no work → payment usually remains due.",
            },
          ],
        },
        {
          heading: "Article 6 – Work and working hours",
          blocks: [
            { type: "p", text: "The client determines:" },
            { type: "list", items: ["working hours", "activities"] },
            { type: "p", text: "Must comply with:" },
            { type: "list", items: ["the law", "the CAO"] },
          ],
        },
        {
          heading: "Article 7 – Good client conduct",
          blocks: [
            { type: "p", text: "The client must treat the temporary worker as its own staff." },
            { type: "p", text: "Not permitted:" },
            { type: "list", items: ["lending the worker on to other companies"] },
          ],
        },
        {
          heading: "Article 8 – Safety and liability",
          blocks: [
            { type: "p", text: "The client is responsible for:" },
            { type: "list", items: ["a safe workplace", "instructions", "compliance with the Working Conditions Act (Arbowet)"] },
            { type: "p", text: "The client indemnifies GOTEAM against damage claims by the temporary worker." },
          ],
        },
        {
          heading: "Article 9 – Liability",
          blocks: [
            { type: "p", text: "GOTEAM is not liable for:" },
            { type: "list", items: ["damage caused by the temporary worker", "mistakes by the temporary worker"] },
            { type: "p", text: "The client must be insured for this." },
          ],
        },
        {
          heading: "Article 10 – Rates",
          blocks: [
            { type: "p", text: "The client pays:" },
            { type: "list", items: ["hourly wage + margin"] },
            { type: "p", text: "The rate may increase due to:" },
            { type: "list", items: ["CAO changes", "wage increases", "legislation"] },
          ],
        },
        {
          heading: "Article 11 – Payment",
          blocks: [
            {
              type: "list",
              items: ["Payment within 14 days", "Late payment: interest + costs", "No suspension permitted"],
            },
          ],
        },
        {
          heading: "Article 12 – Time registration",
          blocks: [
            { type: "p", text: "Hours are registered and approved by the client." },
            { type: "p", text: "In case of a discrepancy → GOTEAM's records are decisive." },
          ],
        },
        {
          heading: "Article 13 – GOTEAM's liability",
          blocks: [
            { type: "p", text: "Liability is limited to:" },
            { type: "list", items: ["max. 20% of the assignment value (up to 26 weeks)"] },
            { type: "p", text: "No liability for:" },
            { type: "list", items: ["indirect damage", "lost profit"] },
          ],
        },
        {
          heading: "Article 14 – Discrimination",
          blocks: [
            { type: "p", text: "No distinction is made on the basis of:" },
            { type: "list", items: ["origin", "gender", "religion", "etc."] },
          ],
        },
        {
          heading: "Article 15 – Confidentiality",
          blocks: [{ type: "p", text: "The temporary worker may be required to maintain confidentiality." }],
        },
        {
          heading: "Article 16 – Force majeure",
          blocks: [
            { type: "p", text: "In the event of force majeure (illness, breakdown, etc.):" },
            { type: "list", items: ["no obligation to perform", "no compensation"] },
          ],
        },
        {
          heading: "Article 17 – Disputes",
          blocks: [{ type: "list", items: ["Dutch law applies", "the competent court in the Netherlands"] }],
        },
      ],
    },

    "alphabouw-terms": {
      title: "Terms & Conditions – Alpha Bouw",
      updatedLabel: "Last updated",
      updated: "2025",
      sections: [
        {
          heading: "Article 1 – Definitions",
          blocks: [
            { type: "p", text: "In these terms and conditions, the following terms have the meanings set out below:" },
            {
              type: "list",
              items: [
                "Contractor: Alpha Bouw",
                "Client: the counterparty of the contractor",
                "Agreement: the agreement between contractor and client",
                "Terms and conditions: the terms and conditions of the contractor",
                "In writing: in writing or via an electronic communication medium",
                "Electronic communication medium: email, WhatsApp, SMS, the contact form on the website",
                "Website: the website of the contractor",
                "Working day: Monday to Friday, excluding public holidays and collective days off",
              ],
            },
          ],
        },
        {
          heading: "Article 2 – General",
          blocks: [
            {
              type: "list",
              items: [
                "These terms apply to every quotation and agreement of Alpha Bouw, unless agreed otherwise in writing.",
                "Also applicable when third parties are engaged.",
                "Invalid provisions leave the rest of the terms intact.",
                "The client may appoint an authorised representative, provided this is reported in writing.",
                "Use of electronic communication is at the client's risk.",
              ],
            },
          ],
        },
        {
          heading: "Article 3 – Agreement and quotations",
          blocks: [
            {
              type: "list",
              items: [
                "Quotations are without obligation and only valid in writing.",
                "Validity of a quotation: 1 month.",
                "Partial assignments do not oblige partial performance at a partial price.",
              ],
            },
          ],
        },
        {
          heading: "Article 4 – Client's obligations",
          blocks: [
            { type: "p", text: "The client provides in good time:" },
            {
              type: "list",
              items: [
                "correct information",
                "access to the work site",
                "permits",
                "KLIC notification (if required)",
                "necessary resources (such as machinery if agreed)",
              ],
            },
            { type: "p", text: "In case of delay, costs may be passed on and completion is postponed." },
            { type: "p", text: "The client:" },
            {
              type: "list",
              items: [
                "is responsible for materials supplied",
                "indemnifies the contractor against third-party claims",
                "ensures that the work can take place without hindrance",
              ],
            },
          ],
        },
        {
          heading: "Article 5 – Contractor's obligations",
          blocks: [
            {
              type: "list",
              items: [
                "Alpha Bouw performs work with good craftsmanship.",
                "May engage third parties.",
                "Is not liable for errors caused by incorrect information from the client.",
                "May submit work for approval.",
                "Limits nuisance and damage where possible.",
              ],
            },
          ],
        },
        {
          heading: "Article 6 – Permits and soil",
          blocks: [
            {
              type: "list",
              items: [
                "If agreed, the contractor arranges permits, with the client's cooperation.",
                "In case of permit problems, the agreement may be amended or dissolved.",
                "Asbestos or contamination = additional work.",
              ],
            },
          ],
        },
        {
          heading: "Article 7 – Deadlines",
          blocks: [{ type: "list", items: ["Deadlines are indicative.", "Claims lapse after 1 year."] }],
        },
        {
          heading: "Article 8 – Deviations",
          blocks: [
            { type: "p", text: "Minor deviations do not give rise to:" },
            { type: "list", items: ["rejection", "discount", "compensation"] },
            { type: "p", text: "Goods must be checked within 24 hours." },
          ],
        },
        {
          heading: "Article 9 – Prices and invoicing",
          blocks: [
            {
              type: "list",
              items: [
                "All prices exclude VAT",
                "Extra costs may be passed on",
                "Invoicing in instalments is possible",
                "Price increases may be applied in case of cost increases",
              ],
            },
          ],
        },
        {
          heading: "Article 10 – Changes",
          blocks: [
            { type: "p", text: "Changes may:" },
            { type: "list", items: ["result in additional work", "affect the schedule", "adjust the price"] },
            { type: "p", text: "The contractor may refuse a change if unreasonable." },
          ],
        },
        {
          heading: "Article 11 – Payment",
          blocks: [
            {
              type: "list",
              items: [
                "Payment within 14 days",
                "Late payment: interest + collection costs",
                "Work may be halted in case of non-payment",
              ],
            },
          ],
        },
        {
          heading: "Article 12 – Completion",
          blocks: [
            { type: "p", text: "Work is considered completed when:" },
            { type: "list", items: ["the client approves", "the work is put into use", "there is no response within 8 days"] },
            { type: "p", text: "Minor defects do not block completion." },
          ],
        },
        {
          heading: "Article 13 – Retention of title",
          blocks: [{ type: "p", text: "Materials remain the property of Alpha Bouw until full payment." }],
        },
        {
          heading: "Article 14 – Suspension and dissolution",
          blocks: [
            { type: "p", text: "Alpha Bouw may stop work in case of:" },
            { type: "list", items: ["non-payment", "risk of non-payment"] },
            { type: "p", text: "In case of termination by the client:" },
            {
              type: "list",
              items: ["payment for work already performed", "+ 10% of the remaining assignment", "+ costs incurred"],
            },
          ],
        },
        {
          heading: "Article 15 – Liability",
          blocks: [
            {
              type: "list",
              items: [
                "Limited to the insurance payout",
                "Maximum €5,000 if not insured",
                "No liability for indirect damage",
              ],
            },
          ],
        },
        {
          heading: "Article 16 – Force majeure",
          blocks: [
            { type: "p", text: "In the event of force majeure (such as bad weather, strikes, etc.):" },
            { type: "list", items: ["obligations are suspended", "no compensation"] },
          ],
        },
        {
          heading: "Article 17 – Intellectual property",
          blocks: [{ type: "p", text: "All designs and documents remain the property of Alpha Bouw." }],
        },
        {
          heading: "Article 18 – Disputes",
          blocks: [{ type: "list", items: ["Dutch law applies", "the Dutch court is competent"] }],
        },
        {
          heading: "Company details",
          blocks: [
            {
              type: "list",
              items: [
                "Alpha Bouw",
                "Marktplein 36, 7311 LR Apeldoorn, Netherlands",
                "Phone: +31 85 401 5937",
                "Email: [to be completed]",
                "Chamber of Commerce (KvK): [to be completed]",
              ],
            },
          ],
        },
      ],
    },

    "goteam-privacy": {
      title: "Privacy Statement GoTeam B.V.",
      updatedLabel: "Last updated",
      updated: "2025",
      intro: [
        {
          type: "p",
          text: "At GoTeam B.V. we attach great importance to protecting the personal data of our customers, employees and website visitors. In this privacy statement we explain which personal data we collect, how we use it, and what rights you have.",
        },
        {
          type: "p",
          text: "GoTeam B.V. processes personal data in accordance with the General Data Protection Regulation (GDPR).",
        },
      ],
      sections: [
        {
          heading: "1. Who is responsible for your data?",
          blocks: [
            {
              type: "p",
              text: "GoTeam B.V. is responsible for the processing of personal data as described in this privacy statement.",
            },
            { type: "p", text: "Contact details:" },
            {
              type: "list",
              items: [
                "Company name: GoTeam B.V.",
                "Address: [enter your address here]",
                "Email: [enter your email address here]",
                "Phone: [enter your phone number here]",
              ],
            },
          ],
        },
        {
          heading: "2. Which data do we collect?",
          blocks: [
            {
              type: "p",
              text: "We collect personal data needed to provide our services and to comply with our legal obligations. This includes, among other things:",
            },
            {
              type: "list",
              items: [
                "Name, address, place of residence, email address and phone number",
                "Username and password for online services",
                "Financial data, such as invoicing and payment information",
                "Any data you voluntarily provide when communicating with us",
              ],
            },
          ],
        },
        {
          heading: "3. Purposes of processing",
          blocks: [
            { type: "p", text: "We process your personal data for the following purposes:" },
            {
              type: "list",
              items: [
                "Providing our services and products",
                "Managing contracts and assignments",
                "Carrying out financial administration and invoicing",
                "Informing you about our services, offers or changes",
                "Complying with legal obligations",
              ],
            },
          ],
        },
        {
          heading: "4. Legal basis for processing",
          blocks: [
            {
              type: "p",
              text: "The processing of personal data by GoTeam B.V. is based on one or more of the following legal grounds:",
            },
            {
              type: "list",
              items: [
                "Performance of an agreement",
                "Legal obligation",
                "Legitimate interest, for example administration and communication",
                "Consent of the data subject (where required)",
              ],
            },
          ],
        },
        {
          heading: "5. Sharing data with third parties",
          blocks: [
            {
              type: "p",
              text: "Your data is only shared with third parties when necessary for the provision of our services or to comply with legal obligations. Examples are:",
            },
            {
              type: "list",
              items: [
                "Financial institutions and accountants",
                "Software suppliers for bookkeeping and planning",
                "Government authorities, when legally required",
              ],
            },
          ],
        },
        {
          heading: "6. Retention period",
          blocks: [
            {
              type: "p",
              text: "Personal data is not kept longer than necessary for the purposes for which it was collected, or for as long as legally required. After the retention period expires, data is securely deleted.",
            },
          ],
        },
        {
          heading: "7. Data security",
          blocks: [
            {
              type: "p",
              text: "GoTeam B.V. takes appropriate technical and organisational measures to secure personal data against loss, theft and unauthorised access.",
            },
          ],
        },
        {
          heading: "8. Your rights",
          blocks: [
            { type: "p", text: "You have rights regarding your personal data:" },
            {
              type: "list",
              items: [
                "The right to access and obtain a copy of your data",
                "The right to rectification of incorrect data",
                "The right to erasure (where permitted)",
                "The right to restriction of processing",
                "The right to object to processing",
                "The right to data portability",
              ],
            },
            {
              type: "p",
              text: "You can send requests to privacy@goteam.nl or via the contact details at the top of this statement.",
            },
          ],
        },
        {
          heading: "9. Changes",
          blocks: [
            {
              type: "p",
              text: "GoTeam B.V. reserves the right to amend this privacy statement. We advise our customers and visitors to check this statement regularly for any changes.",
            },
          ],
        },
      ],
    },

    "alphabouw-privacy": {
      title: "Privacy Statement – Alpha Bouw",
      updatedLabel: "Last updated",
      updated: "2025",
      intro: [
        {
          type: "p",
          text: "Alpha Bouw, located at Marktplein 36, 7311 LR Apeldoorn, Netherlands, is responsible for the processing of personal data as described in this privacy statement.",
        },
        {
          type: "p",
          text: "Contact details: Marktplein 36, 7311 LR Apeldoorn, Netherlands. Phone: +31 85 401 5937. Email: [to be completed]. Chamber of Commerce (KvK) number: [to be completed].",
        },
      ],
      sections: [
        {
          heading: "Personal data we process",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw processes your personal data because you use our services and/or because you provide this data to us yourself.",
            },
            { type: "p", text: "Below is an overview of the personal data we process:" },
            {
              type: "list",
              items: ["First and last name", "Phone number", "Email address", "Data about your activity on our website"],
            },
          ],
        },
        {
          heading: "Special and/or sensitive personal data we process",
          blocks: [
            {
              type: "p",
              text: "Our website and/or service does not intend to collect data about website visitors younger than 16, unless they have consent from a parent or guardian. However, we cannot verify whether a visitor is older than 16.",
            },
            {
              type: "p",
              text: "We therefore advise parents to be involved in their children's online activities, in order to prevent data about children being collected without parental consent.",
            },
            {
              type: "p",
              text: "If you are convinced that we have collected personal data about a minor without that consent, please contact us at [enter email], and we will delete this information.",
            },
          ],
        },
        {
          heading: "The purpose and basis on which we process personal data",
          blocks: [
            { type: "p", text: "Alpha Bouw processes your personal data for the following purposes:" },
            {
              type: "list",
              items: [
                "To be able to call or email you if necessary to carry out our services",
                "Alpha Bouw analyses your behaviour on the website in order to improve the website and tailor the range of products and services to your preferences",
              ],
            },
          ],
        },
        {
          heading: "How long we keep personal data",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw does not keep your personal data longer than strictly necessary to achieve the purposes for which your data is collected.",
            },
            {
              type: "p",
              text: "We keep your data for as long as you are a customer. This means we keep your customer profile until you indicate that you no longer wish to use our services.",
            },
            {
              type: "p",
              text: "If you indicate this to us, we will also regard it as a request for deletion. Due to administrative obligations, we must keep invoices containing your (personal) data. We keep this data for as long as the statutory period runs.",
            },
            {
              type: "p",
              text: "Employees no longer have access to your client profile and documents we produced in connection with your assignment.",
            },
          ],
        },
        {
          heading: "Sharing personal data with third parties",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw does not sell your data to third parties and only provides it if necessary to perform our agreement or to comply with a legal obligation.",
            },
            {
              type: "p",
              text: "With companies that process your data on our behalf, we conclude a data processing agreement to ensure the same level of security and confidentiality. Alpha Bouw remains responsible for these processing activities.",
            },
          ],
        },
        {
          heading: "Cookies, or similar techniques, we use",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw only uses technical and functional cookies and analytical cookies that do not infringe your privacy.",
            },
            {
              type: "p",
              text: "A cookie is a small text file that is stored on your device on your first visit to this website. These cookies are necessary for the technical functioning of the website and your ease of use.",
            },
            {
              type: "p",
              text: "You can opt out of cookies via your browser settings and delete previously stored data.",
            },
          ],
        },
        {
          heading: "Viewing, modifying or deleting data",
          blocks: [
            { type: "p", text: "You have the right to view, correct or delete your personal data." },
            { type: "p", text: "In addition, you have the right to:" },
            { type: "list", items: ["Withdraw your consent", "Object to processing", "Have data transferred"] },
            { type: "p", text: "You can send a request to: [enter email]" },
            { type: "p", text: "We will respond as quickly as possible, but no later than within four weeks." },
          ],
        },
        {
          heading: "Filing a complaint",
          blocks: [
            {
              type: "p",
              text: "You have the right to file a complaint with the Dutch Data Protection Authority. You can do so via: https://autoriteitpersoonsgegevens.nl/",
            },
          ],
        },
        {
          heading: "How we secure personal data",
          blocks: [
            {
              type: "p",
              text: "Alpha Bouw takes the protection of your data seriously and takes appropriate measures against misuse, loss or unauthorised access.",
            },
            {
              type: "p",
              text: "If you think your data is not properly secured, please contact us at [enter email].",
            },
          ],
        },
        {
          heading: "Contact details",
          blocks: [
            {
              type: "list",
              items: ["Alpha Bouw", "Marktplein 36, 7311 LR Apeldoorn, Netherlands", "Phone: +31 85 401 5937"],
            },
          ],
        },
      ],
    },
  },
}

export function getLegalDoc(doc: DocKey, language: Language): LegalDoc {
  // Documents exist in Dutch (source) and English. Other languages fall back
  // to Dutch, the authoritative version.
  const lang = language === "en" ? "en" : "nl"
  return content[lang][doc]
}

export type { DocKey }
