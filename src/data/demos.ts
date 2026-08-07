export interface DemoSite {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  verticalPath: string;
  verticalLabel: string;
}

export const demoSites: DemoSite[] = [
  {
    slug: 'idraulico',
    title: 'Idraulico',
    summary: 'Servizi, interventi, zona coperta e richiesta di sopralluogo.',
    image: '/images/demo-idraulico/idraulico-intervento.jpg',
    imageAlt: 'Tecnico al lavoro su un impianto idraulico in bagno',
    verticalPath: '/sito-web-idraulico/',
    verticalLabel: 'Scopri il modello per idraulici',
  },
  {
    slug: 'imbianchino',
    title: 'Imbianchino',
    summary: 'Lavori, finiture, preparazione degli ambienti e contatti.',
    image: '/images/demo-imbianchino/imbianchino-hero.webp',
    imageAlt: 'Imbianchino al lavoro in un ambiente interno',
    verticalPath: '/sito-web-imbianchino/',
    verticalLabel: 'Scopri il modello per imbianchini',
  },
  {
    slug: 'elettricista',
    title: 'Elettricista',
    summary: 'Installazioni, illuminazione, impianti e richiesta di intervento.',
    image: '/images/demo-elettricista/elettricista-hero.webp',
    imageAlt: 'Elettricista al lavoro su un impianto',
    verticalPath: '/sito-web-elettricista/',
    verticalLabel: 'Scopri il modello per elettricisti',
  },
  {
    slug: 'giardiniere',
    title: 'Giardiniere',
    summary: 'Manutenzione, irrigazione, progettazione e zone servite.',
    image: '/images/demo-giardiniere/giardiniere-hero.webp',
    imageAlt: 'Giardiniere al lavoro in un giardino',
    verticalPath: '/sito-web-giardiniere/',
    verticalLabel: 'Scopri il modello per giardinieri',
  },
  {
    slug: 'impresa-edile',
    title: 'Impresa edile',
    summary: 'Ristrutturazioni, opere murarie, finiture e sopralluoghi.',
    image: '/images/demo-impresa-edile/impresa-edile-hero.webp',
    imageAlt: 'Operaio con casco che controlla una parete durante una ristrutturazione',
    verticalPath: '/sito-web-impresa-edile/',
    verticalLabel: 'Scopri il modello per imprese edili',
  },
];
