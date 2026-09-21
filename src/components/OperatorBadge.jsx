/**
 * @file OperatorBadge.jsx
 * @description Badge visuel représentant un opérateur Mobile Money en Côte d'Ivoire (Wave, Orange, MTN, Moov).
 */

import React from 'react';

const OPERATOR_CONFIG = {
  wave: { label: 'WAVE', cssClass: 'operator-wave', name: 'Wave CI' },
  orange: { label: 'OM', cssClass: 'operator-orange', name: 'Orange Money' },
  mtn: { label: 'MOMO', cssClass: 'operator-mtn', name: 'MTN MoMo' },
  moov: { label: 'MOOV', cssClass: 'operator-moov', name: 'Moov Money' }
};

export function OperatorBadge({ operatorId, style = {}, className = '' }) {
  const op = OPERATOR_CONFIG[operatorId] || {
    label: operatorId ? operatorId.toUpperCase().slice(0, 4) : 'PAY',
    cssClass: 'operator-wave',
    name: 'Mobile Money'
  };

  return (
    <span
      className={`operator-icon-badge ${op.cssClass} ${className}`.trim()}
      style={style}
      title={op.name}
      aria-label={op.name}
    >
      {op.label}
    </span>
  );
}
