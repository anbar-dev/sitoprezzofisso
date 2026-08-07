# Guida operativa per sales page e demo verticali

Questa guida definisce come creare una nuova pagina commerciale dedicata a un’attività specifica e il relativo sito dimostrativo. L’obiettivo è mantenere qualità, chiarezza e coerenza senza produrre pagine identiche con parole sostituite.

## 1. Parti dall’intento

Prima di scrivere codice, chiarisci:

- quale tipo di richiesta deve generare la pagina;
- quali problemi concreti porta il visitatore;
- quali servizi vuole presentare l’attività;
- in quale area lavora davvero;
- quali informazioni servono per essere ricontattati;
- quali funzioni restano fuori dall’offerta base.

La pagina deve avere un intento riconoscibile. Se una nuova pagina non aggiunge esigenze, contenuti, CTA e FAQ specifiche, non va creata.

## 2. Struttura della sales page

La sales page deve spiegare l’offerta in modo rapido e accompagnare alla richiesta.

### Hero

Inserisci:

- titolo concreto, legato al lavoro dell’attività;
- breve spiegazione di cosa deve capire il cliente;
- CTA verso il form dell’offerta;
- link evidente al sito dimostrativo;
- richiamo all’offerta base e al suo perimetro.

### Problemi e bisogni

Descrivi i dubbi che impediscono una richiesta utile: servizio poco chiaro, zona non indicata, contatto difficile, informazioni mancanti. Usa situazioni reali e comprensibili, non linguaggio da agenzia.

### Servizi

Mostra un elenco selezionato di servizi pertinenti. Ogni voce deve chiarire cosa viene richiesto, installato, riparato, controllato o valutato. Evita categorie vaghe e descrizioni intercambiabili.

### Come viene usato il sito

Spiega come il sito aiuta il cliente finale: capire il servizio, verificare la zona, inviare i dati utili e sapere cosa succede dopo. Non descrivere il lavoro interno di progettazione come se fosse contenuto della pagina cliente.

### Immagini

Usa fotografie pertinenti, locali nel progetto e con licenza verificabile. Salvale nel repository con nomi leggibili, testo alternativo descrittivo e attribuzione quando necessaria. Non usare immagini decorative senza rapporto con il servizio.

### FAQ e CTA finale

Le FAQ devono rispondere a dubbi specifici della richiesta. Chiudi con una CTA verso il form e, se esiste, con il link al percorso avanzato quando il progetto supera il perimetro base.

## 3. Struttura del sito dimostrativo

La demo deve sembrare un sito che un’attività potrebbe davvero usare, pur restando chiaramente dichiarata come esempio.

Deve avere:

- una barra superiore che dichiari che è un sito dimostrativo;
- un’identità visiva distinta dal sito principale;
- navigazione interna semplice;
- titolo, servizi, zona, modalità di lavoro e interventi;
- fotografie e didascalie pertinenti;
- FAQ utili al cliente finale;
- blocco contatti in fondo alla pagina;
- tasti fissi sempre visibili per tornare alla sales page e richiedere un sito.

I pulsanti della demo devono seguire due flussi distinti:

1. le CTA rivolte al cliente dell’attività portano al blocco contatti della demo;
2. i pulsanti rivolti a chi sta valutando il servizio portano alla sales page o al form reale.

I recapiti della demo devono essere chiaramente fittizi e non devono creare l’impressione di un’attività reale, una sede reale o una disponibilità garantita.

## 4. Contenuti da evitare

Non inserire:

- recensioni, clienti o risultati inventati;
- promesse di reperibilità, prezzi o tempi non verificati;
- spiegazioni rivolte al designer dentro il sito cliente;
- frasi come “questa sezione serve a…” o “la gallery deve…”;
- riempitivi generici per allungare la pagina;
- pagine ottenute sostituendo solo il nome dell’attività;
- keyword ripetute senza valore informativo.

## 5. Dati e implementazione

Quando la struttura si ripete, separa i dati dalla presentazione. Mantieni in componenti o oggetti condivisi:

- nome e slug della pagina;
- titolo e meta description;
- elenco servizi;
- zona indicativa;
- FAQ;
- immagini e attribuzioni;
- testi delle CTA.

Usa Astro e CSS semplice. Aggiungi JavaScript solo per interazioni necessarie, come carousel, form progressivi o menu mobile. Mantieni i link interni assoluti al sito statico e verifica gli anchor link della demo.

## 6. SEO, accessibilità e responsive

Ogni pagina indicizzabile deve avere title, meta description, canonical, un solo h1, heading ordinati e collegamenti interni utili. Le demo dimostrative devono restare non indicizzabili se non hanno un intento autonomo.

Controlla sempre:

- contrasto testo/sfondo;
- focus visibile da tastiera;
- label associate ai campi;
- alt text delle immagini;
- CTA comprensibili senza contesto tecnico;
- layout a 320 px, mobile, tablet e desktop;
- tasti fissi che non coprano contenuti o controlli;
- assenza di sovrapposizioni tra titoli e paragrafi.

## 7. Verifica prima del commit

1. Cerca nel codice eventuali testi tecnici rimasti visibili.
2. Controlla che tutte le immagini esistano e siano referenziate correttamente.
3. Verifica tutti i link della sales page, della demo e del form.
4. Prova da tastiera navigazione, carousel, CTA e form.
5. Esegui `npm run build`.
6. Esegui `git diff --check`.
7. Aggiorna `ROADMAP.md` se la nuova verticale è stata completata.
8. Crea un commit dedicato e fai push solo quando autorizzato.
