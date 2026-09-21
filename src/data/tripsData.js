/**
 * @file tripsData.js
 * @description Référentiel des villes de Côte d'Ivoire, gares et départs (Sections 3, 8 et 9 du cahier des charges).
 */

export const CITIES = [
  'Abidjan',
  'Bondoukou',
  'Bouaké',
  'Yamoussoukro',
  'Korhogo',
  'San-Pédro',
  'Man',
  'Daloa'
];

export const TRIPS_DATABASE = [
  {
    id: 'trip-abj-bdk',
    departureCity: 'Abidjan',
    arrivalCity: 'Bondoukou',
    distanceKm: 420,
    estimatedDuration: '7h 30min',
    departures: [
      {
        id: 'dep-abj-bdk-1',
        rankLabel: '1er Départ',
        time: '06h30',
        stationName: 'Gare Principale d\'Adjamé (Quai Nord)',
        stationAddress: 'Adjamé Liberté, à 100m du grand carrefour',
        directions: 'Emprunter le boulevard principal, quai n°3 réservé aux lignes de l\'Est (Bondoukou / Bouna). Présentation recommandée 30 minutes avant le départ.',
        busType: 'Car Grand Confort VIP (Climatisé, Wifi, Prises USB)',
        company: 'Compagnie Express du Zanzan',
        priceCfa: 7500,
        availableSeats: 18
      },
      {
        id: 'dep-abj-bdk-2',
        rankLabel: '2e Départ',
        time: '10h00',
        stationName: 'Gare Routière d\'Adjamé — Pôle Est',
        stationAddress: 'Boulevard Nangui Abrogoua, Face Pharmacie Centrale',
        directions: 'Accès direct par le couloir central des cars interurbains. Guichet d\'enregistrement et dépose bagages Quai 2.',
        busType: 'Car Standard 60 places (Climatisation active)',
        company: 'Compagnie Express du Zanzan',
        priceCfa: 7000,
        availableSeats: 24
      },
      {
        id: 'dep-abj-bdk-3',
        rankLabel: '3e Départ',
        time: '14h30',
        stationName: 'Gare de Yopougon Siporex',
        stationAddress: 'Carrefour Siporex, Terminus des lignes Est',
        directions: 'Point d\'embarquement côté autoroute du Nord avant bifurcation vers l\'Est. Parking voyageurs disponible.',
        busType: 'Car VIP Confort Plus (Climatisé, Écrans individuels)',
        company: 'Union des Transporteurs de l\'Est',
        priceCfa: 8000,
        availableSeats: 12
      }
    ]
  },
  {
    id: 'trip-abj-bke',
    departureCity: 'Abidjan',
    arrivalCity: 'Bouaké',
    distanceKm: 350,
    estimatedDuration: '4h 45min',
    departures: [
      {
        id: 'dep-abj-bke-1',
        rankLabel: '1er Départ',
        time: '07h00',
        stationName: 'Gare d\'Adjamé Renaissance',
        stationAddress: 'Boulevard de la Paix, Adjamé',
        directions: 'Quai réservé aux lignes Centre & Nord. Voie express directe autoroute.',
        busType: 'Car VIP Grand Tourisme',
        company: 'Société Nationale de Transport',
        priceCfa: 6000,
        availableSeats: 15
      },
      {
        id: 'dep-abj-bke-2',
        rankLabel: '2e Départ',
        time: '11h30',
        stationName: 'Gare de Yopougon Gesco',
        stationAddress: 'Sortie Autoroute du Nord, Gesco',
        directions: 'Embarquement rapide en bordure d\'autoroute, idéal pour les résidents de Yopougon.',
        busType: 'Car Standard Confort',
        company: 'Société Nationale de Transport',
        priceCfa: 5500,
        availableSeats: 28
      }
    ]
  },
  {
    id: 'trip-abj-yakro',
    departureCity: 'Abidjan',
    arrivalCity: 'Yamoussoukro',
    distanceKm: 240,
    estimatedDuration: '2h 45min',
    departures: [
      {
        id: 'dep-abj-yak-1',
        rankLabel: '1er Départ',
        time: '08h00',
        stationName: 'Gare Routière Internationale d\'Adjamé',
        stationAddress: 'Adjamé Cité Fairmont',
        directions: 'Hall départ direct autoroute de Yamoussoukro. Enregistrement quai A.',
        busType: 'Car Navette Express Directe',
        company: 'Capitale Express Transport',
        priceCfa: 4500,
        availableSeats: 30
      }
    ]
  },
  {
    id: 'trip-bdk-abj',
    departureCity: 'Bondoukou',
    arrivalCity: 'Abidjan',
    distanceKm: 420,
    estimatedDuration: '7h 30min',
    departures: [
      {
        id: 'dep-bdk-abj-1',
        rankLabel: '1er Départ',
        time: '06h00',
        stationName: 'Gare Centrale de Bondoukou',
        stationAddress: 'Quartier Zanzan, Face Grand Marché',
        directions: 'Présentation des voyageurs dès 05h30 pour l\'étiquetage des bagages et la validation du ticket en ligne.',
        busType: 'Car Grand Confort VIP',
        company: 'Compagnie Express du Zanzan',
        priceCfa: 7500,
        availableSeats: 20
      }
    ]
  }
];

/**
 * Recherche les trajets disponibles pour un couple départ / destination.
 * @param {string} from - Ville de départ.
 * @param {string} to - Ville d'arrivée.
 * @returns {Object|null} Trajet correspondant ou simulation dynamique.
 */
export function findTrip(from, to) {
  const match = TRIPS_DATABASE.find(
    (t) => t.departureCity.toLowerCase() === from.toLowerCase() && 
           t.arrivalCity.toLowerCase() === to.toLowerCase()
  );

  if (match) return match;

  // Si le trajet n'est pas codé en dur, génération dynamique cohérente
  return {
    id: `trip-${from.toLowerCase()}-${to.toLowerCase()}`,
    departureCity: from,
    arrivalCity: to,
    distanceKm: 320,
    estimatedDuration: '5h 00min',
    departures: [
      {
        id: `dep-${from.toLowerCase()}-1`,
        rankLabel: '1er Départ',
        time: '07h30',
        stationName: `Gare Centrale de ${from}`,
        stationAddress: `Boulevard principal de ${from}`,
        directions: `Se rendre au hall d'embarquement n°1 de ${from} avec la référence de réservation.`,
        busType: 'Car Confort Interurbain',
        company: 'Réseau National des Transporteurs',
        priceCfa: 6000,
        availableSeats: 22
      },
      {
        id: `dep-${from.toLowerCase()}-2`,
        rankLabel: '2e Départ',
        time: '13h00',
        stationName: `Gare Routière Sud de ${from}`,
        stationAddress: `Carrefour de la Paix, ${from}`,
        directions: `Embarquement direct voie B. Dépose des bagages 20 minutes avant le départ.`,
        busType: 'Car Confort Interurbain',
        company: 'Réseau National des Transporteurs',
        priceCfa: 6000,
        availableSeats: 16
      }
    ]
  };
}
