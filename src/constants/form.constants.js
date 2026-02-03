export const FORM_TOPICS = [
  { value: 'digitalization', label: 'Digitalisierungsberatung / Strategie' },
  { value: 'development', label: 'Individuelle Anwendung / Softwareentwicklung' },
  { value: 'visualization', label: 'Datenvisualisierung / Dashboards' },
  { value: 'engineering', label: 'Data Engineering / Schnittstellen / APIs' },
  { value: 'workshop', label: 'Workshop / Audit / Sparring' },
  { value: 'other', label: 'Sonstiges' },
];

export const VALIDATION_RULES = {
  REQUIRED: (value) => !!value || 'Dieses Feld ist erforderlich',
  EMAIL: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
  },
  PHONE: (value) => {
    if (!value) return true;
    const pattern = /^[\d\s+()-]+$/;
    return pattern.test(value) || 'Bitte geben Sie eine gültige Telefonnummer ein';
  },
  MIN_LENGTH: (min) => (value) =>
    (value && value.length >= min) || `Mindestens ${min} Zeichen erforderlich`,
  MAX_LENGTH: (max) => (value) =>
    !value || value.length <= max || `Maximal ${max} Zeichen erlaubt`,
};

export const FORM_MESSAGES = {
  SUCCESS: 'Danke! Wir melden uns i. d. R. innerhalb von 1–2 Werktagen.',
  ERROR: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
  REQUIRED_FIELDS: 'Bitte füllen Sie alle Pflichtfelder aus.',
};
