export const partnerReferralConfig = {
  enabled: false,
  environment: 'development' as const,
  maxPartners: 2,
  partners: [] as const,
  fieldsAllowedForReferral: [
    'tipologia',
    'descrizione',
    'sito-esistente',
    'tempistiche',
    'budget',
    'nome',
    'email',
    'telefono',
  ],
};
