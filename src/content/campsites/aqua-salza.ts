import type { CampsiteConfig } from "../types";

const IMG = "/campsites/aqua-salza";

const aquaSalza: CampsiteConfig = {
  name: "Wohnmobil-Stellplatz Aqua Salza",
  shortName: "Aqua Salza",
  slug: "aqua-salza",
  ort: "Golling an der Salzach",
  region: "Salzburg",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Tennengau · Salzburger Land · Österreich",

  theme: "alpin",
  heroVariant: "left",

  claim: "Stellplatz mit Bad, Sauna & Bergblick",
  claimEmphasis: "Bad, Sauna & Bergblick",
  intro:
    "Mitten in Golling im Tennengau stehst du eben und asphaltiert — und gehst zum Baden, Saunieren und Essen einfach nebenan ins Aqua Salza. 365 Tage im Jahr, rund um die Uhr, ohne Voranmeldung.",

  logo: { src: `${IMG}/logo-67ad607aae.png`, alt: "Aqua Salza Logo" },

  statement: {
    text: "Vom Stellplatz sind es nur 75 Meter bis zum Haupteingang — Frühstück, Sauna und Wellness liegen direkt vor dem Vorzelt.",
    emphasis: "75 Meter",
  },

  pillars: [
    {
      title: "Dein Standplatz für Golling",
      text: "Knapp 340 m² asphaltierte Fläche mit 15 ebenen Einzelplätzen, je 9 × 5 m — der ideale Ausgangspunkt für Ausflüge und Wanderungen.",
      image: { src: `${IMG}/gallery-736d735b38.webp`, alt: "Wohnmobil-Stellplatz Aqua Salza vor der Gollinger Bergkulisse" },
    },
    {
      title: "Therme & Sauna nebenan",
      text: "Freizeitbad mit 25-Meter-Bahnen, sechs Saunen und Wellnessoase liegen direkt am Platz — als Stellplatzgast mit 10 % auf alle Eintritte.",
      image: { src: `${IMG}/amenity-acf6a5cbdb.webp`, alt: "Freizeitbad und Sauna Aqua Salza in Golling, Ansicht vom Feld" },
    },
    {
      title: "Genuss mit Panoramablick",
      text: "Frühstück, warme Küche und Kaffee & Kuchen auf der Dachterrasse mit Blick auf die Gollinger Bergwelt — auch ohne Badeintritt.",
      image: { src: `${IMG}/amenity-76e64c1279.webp`, alt: "Panoramaterrasse des Aqua Salza mit Bergblick" },
    },
  ],

  usps: [
    "Ab € 18,50 pro Nacht",
    "365 Tage · rund um die Uhr",
    "Nur für Wohnmobile",
    "10 % auf alle Eintritte",
    "Frisch- & Abwasser, Strom",
    "Ganztägig warme Küche",
  ],

  trust: {
    heading: "Warum Camper in Golling Station machen",
    headingEmphasis: "Station machen",
    intro:
      "Zentrale Lage an der A10, in 10–15 Minuten zu Fuß vom Bahnhof und alle 30 Minuten nach Salzburg — und nach dem Fahrtag warten Sauna, Massage und warme Küche gleich nebenan.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-5c932e6844.webp`, alt: "Wohnmobile am Stellplatz Aqua Salza vor den Bergen von Golling" },
  },

  breather: {
    image: { src: `${IMG}/gallery-bf1d50ba04.webp`, alt: "Whirlpool im Aqua Salza mit Blick auf die Gollinger Berge" },
    line: "Durchatmen mit Blick auf die Gollinger Bergwelt.",
  },

  camping: {
    heading: "Platz & Ausstattung",
    intro:
      "Asphaltierte Einzelplätze mit Versorgung — und das ganze Aqua Salza gleich daneben: Bad, Sauna, Wellness und Gastronomie gehören für Stellplatzgäste mit dazu.",
    features: [
      {
        title: "Asphaltierte Einzelplätze",
        text: "15 ebene Plätze à 9 × 5 m mit Frischwasser- und Stromversorgung, dazu eine Holiday-Clean-Station — Anreise rund um die Uhr per Parkautomat.",
        image: { src: `${IMG}/gallery-24ad452114.webp`, alt: "Wohnmobil auf einem Einzelstellplatz des Aqua Salza" },
      },
      {
        title: "Freizeitbad mit Panoramablick",
        text: "Hallenbad mit 25-Meter-Bahnen, Black-Hole-Rutsche und Whirlpool, große Glasfront mit Blick auf die Bergkulisse.",
        image: { src: `${IMG}/gallery-db5aca8b50.webp`, alt: "Freizeitbad Aqua Salza mit Panoramafenstern zur Bergwelt" },
      },
      {
        title: "Saunawelt & Saunagarten",
        text: "Sechs Saunen, Dampfbäder und Infrarotkabinen, dazu ein Saunagarten mit Panorama-Ruheräumen zum Durchatmen.",
        image: { src: `${IMG}/activity-9d356b39b0.webp`, alt: "Sauna-Berghütte im Saunagarten des Aqua Salza" },
      },
      {
        title: "Massagen & Wellness",
        text: "Von der klassischen Massage bis zum Verwöhnpaket — die Anwendungen sind auch ohne Eintritt in die Saunawelt buchbar.",
        image: { src: `${IMG}/amenity-1eb63598c6.webp`, alt: "Wellnessbereich des Aqua Salza" },
      },
      {
        title: "Frühstück & warme Küche",
        text: "Frühstück täglich ab 09:00 Uhr, ab 12:00 Uhr warme Küche bis in den Abend — Restaurant und Terrasse auch ohne Badeintritt.",
        image: { src: `${IMG}/amenity-c08b592a7e.webp`, alt: "Frühstückstisch im Restaurant des Aqua Salza" },
      },
      {
        title: "Whirlpool & Ruheoase",
        text: "Beheizter Außenpool, Whirlpool, Ruhepool und ruhige Liegebereiche laden zwischen den Saunagängen zum Verweilen ein.",
        image: { src: `${IMG}/amenity-b8be80fc3b.webp`, alt: "Whirlpool und Ruhebereich in der Wellnessoase des Aqua Salza" },
      },
    ],
  },

  kinder: {
    heading: "Wasserspaß für die Kleinen",
    intro:
      "Im Aqua Salza planschen Kinder im Waldbecken, erkunden die Black-Hole-Rutsche und lernen in der Schwimmschule schwimmen — Stellplatzgäste sind herzlich willkommen.",
    features: [
      {
        title: "Kinderbecken im Waldlook",
        text: "Das Kinderbecken mit Waldmotiv lädt zum Eintauchen und Spielen ein — flach und sicher für die Kleinsten.",
        image: { src: `${IMG}/gallery-686148d386.webp`, alt: "Kinderbecken mit Waldmotiv im Aqua Salza" },
      },
      {
        title: "Plantschen & Spielen",
        text: "Interaktive Wasserspielgeräte und jede Menge Platz zum Toben — hier wird der Badetag zum Abenteuer.",
        image: { src: `${IMG}/kids-4c64f3d0d6.webp`, alt: "Kinder beim Spielen im Wasser des Aqua Salza" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Golling",
    modes: [
      {
        title: "Mit dem Auto",
        text: "A10 Tauernautobahn, Abfahrt Golling, dann Richtung Ortszentrum in die Möslstraße — großer Hauptparkplatz mit E-Ladestation (2 Ladepunkte).",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Golling-Abtenau (S-Bahn, REX, IC), von dort rund 10–15 Minuten zu Fuß zum Aqua Salza.",
      },
      {
        title: "Öffentlich nach Salzburg",
        text: "Alle 30 Minuten in die Mozartstadt — mit dem Guest-Mobility-Ticket kostenfrei.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus dem Aqua Salza",
    headingEmphasis: "Aqua Salza",
    intro: "Bad, Sauna, Wellness und Genuss — ein paar Blicke auf das, was als Stellplatzgast gleich nebenan auf dich wartet.",
    tag: "Ganzjährig geöffnet",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-841fe63eb3.webp`, alt: "Frische Säfte auf der Terrasse des Aqua Salza" },
      { src: `${IMG}/amenity-9b73bdb9c3.webp`, alt: "Dampfbad in der Wellnessoase des Aqua Salza" },
      { src: `${IMG}/gallery-b8c20db397.webp`, alt: "25-Meter-Schwimmbecken im Freizeitbad Aqua Salza" },
      { src: `${IMG}/gallery-9bc8e8c9be.webp`, alt: "Kaffee und Kuchen auf der Panoramaterrasse des Aqua Salza" },
    ],
  },

  booking: {
    heading: "Stellplatz sichern in Golling",
    headingEmphasis: "in Golling",
    intro:
      "Du zahlst bequem am Parkautomat an der Einfahrt — keine Voranmeldung nötig. Schreib uns einfach, wenn du Fragen zum Platz hast.",
    pricesArePlaceholder: false,
    priceNote:
      "€ 18,50 pro Stellplatz und Nacht · Strom € 0,50/kWh, Wasser € 1,00 je 80 l, Entsorgung kostenlos · zzgl. Ortstaxe € 3,05 pro Person/Nacht · nur Wohnmobile",
    highlight: {
      title: "10 % auf alle Eintritte",
      text: "Als Stellplatzgast erhältst du auf alle Aqua-Salza-Tarife 10 % Rabatt.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnmobil-Stellplatz", perNight: 18.5 },
    ],
  },

  kontakt: {
    tel: "+43 6244 20040-0",
    telHref: "tel:+436244200400",
    mail: "info@aqua-salza.at",
    adresse: "Möslstraße 199 · 5440 Golling an der Salzach · Salzburg",
    coords: { lat: 47.59582, lng: 13.17167 },
  },

  languages: ["DE"],

  nav: [
    { label: "Platz & Ausstattung", href: "#camping", children: [
      { label: "Stellplatz", href: "#camping" },
      { label: "Bad & Sauna", href: "#camping" },
    ]},
    { label: "Kinder", href: "#kinder" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default aquaSalza;
