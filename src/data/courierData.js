/**
 * @file courierData.js
 * @description Référentiel des catégories de colis, barèmes tarifaires et simulateur de suivi pour le service courrier & fret.
 */

export const PACKAGE_CATEGORIES = [
  {
    id: 'doc',
    name: 'Document / Pli Express',
    icon: '📄',
    desc: 'Courrier, dossiers administratifs, passeports, diplômes (< 1 kg)',
    basePrice: 1500,
    maxWeight: 1
  },
  {
    id: 'small',
    name: 'Petit Colis',
    icon: '📦',
    desc: 'Vêtements, petits paquets, accessoires (1 à 5 kg)',
    basePrice: 2500,
    maxWeight: 5
  },
  {
    id: 'medium',
    name: 'Sac / Sacoche Moyenne',
    icon: '🧳',
    desc: 'Sacs de voyage, cartons moyens, pièces détachées (5 à 15 kg)',
    basePrice: 4000,
    maxWeight: 15
  },
  {
    id: 'large',
    name: 'Gros Carton / Vivres',
    icon: '📦📦',
    desc: 'Cartons d\'ignames, sacs de riz, marchandises en vrac (15 à 30 kg)',
    basePrice: 6000,
    maxWeight: 30
  },
  {
    id: 'heavy',
    name: 'Fret Lourd / Électroménager',
    icon: '📺',
    desc: 'Télévisions, moteurs, colis volumineux (30 à 50 kg)',
    basePrice: 9000,
    maxWeight: 50
  },
  {
    id: 'fresh',
    name: 'Denrées & Produits Frais',
    icon: '🧊',
    desc: 'Poissons fumés, attiéké, fruits avec priorité d\'embarquement',
    basePrice: 5000,
    maxWeight: 25
  }
];

/**
 * Calcule le tarif d'expédition d'un colis.
 * @param {string} categoryId - Identifiant de catégorie.
 * @param {number} weightKg - Poids en kg.
 * @param {Object} options - Options (assurance, fragile).
 * @returns {number} Prix en FCFA.
 */
export function calculateShippingFee(categoryId, weightKg = 2, options = {}) {
  const cat = PACKAGE_CATEGORIES.find((c) => c.id === categoryId) || PACKAGE_CATEGORIES[1];
  let price = cat.basePrice;

  // Supplément au kilo au-delà de 10 kg
  if (weightKg > 10) {
    price += (weightKg - 10) * 150;
  }

  if (options.isFragile) {
    price += 500;
  }

  if (options.isInsured) {
    price += 1000;
  }

  return Math.round(price);
}

/**
 * Génère un numéro de bordereau unique.
 * @param {string} from - Ville de départ.
 * @param {string} to - Ville d'arrivée.
 * @returns {string} Code de suivi (ex: COLIS-ABJ-BDK-749201).
 */
export function generateTrackingNumber(from, to) {
  const fromCode = (from || 'ABJ').slice(0, 3).toUpperCase();
  const toCode = (to || 'BDK').slice(0, 3).toUpperCase();
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `COLIS-${fromCode}-${toCode}-${rand}`;
}

/**
 * Génère un code PIN secret de retrait à 4 chiffres.
 * @returns {string}
 */
export function generateSecretPin() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}
