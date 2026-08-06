# AGENTS.md — Sito Prezzo Fisso

Leggi sempre `VISION.md`, `ROADMAP.md` e `docs/SEO_STRATEGY.md` prima di lavori significativi.

## Stack

- Astro
- output statico
- GitHub Pages
- GitHub Actions
- HTML semantico
- CSS semplice e mantenibile
- JavaScript client-side minimo

Non introdurre framework frontend pesanti senza una ragione concreta.

## Regole di sviluppo

- Riutilizza componenti.
- Mantieni contenuti e dati separati dalla presentazione quando è utile.
- Evita duplicazioni.
- Non aggiungere dipendenze senza necessità.
- Non fare refactoring non collegati al task.
- Non inserire secret, token, password o chiavi API nel repository.
- Mantieni il progetto semplice da far gestire a Codex.
- Se esiste una soluzione statica semplice, preferiscila.

## Git e deploy

- Una feature logicamente completa = un commit.
- Usa commit descrittivi.
- Prima del commit esegui sempre la build.
- Se hai autorizzazione e il repository è configurato, esegui anche il push.
- Il push su `main` deve attivare il deploy automatico GitHub Pages.
- Non considerare concluso un task se la build fallisce.

## SEO

Ogni pagina indicizzabile deve avere:
- title unico;
- meta description unica;
- canonical corretto;
- heading coerenti;
- internal linking utile;
- contenuto realmente specifico.

Non creare:
- doorway pages;
- location pages con semplice sostituzione del nome città;
- pagine professione × città in massa;
- keyword stuffing;
- testi gonfiati senza valore;
- fake recensioni;
- fake clienti;
- fake sedi;
- fake Google Business Profile;
- claim non verificabili;
- promesse di prima posizione su Google.

Le nuove pagine SEO devono soddisfare un intento distinto.

## Design

Il sito deve sembrare:
- moderno;
- professionale;
- semplice;
- affidabile;
- rapido.

Non deve sembrare:
- una landing dropshipping;
- un sito AI generico;
- una web agency anni 2010;
- un servizio scadente perché economico.

Evita:
- animazioni inutili;
- gradienti vistosi senza motivo;
- effetti grafici che peggiorano performance o leggibilità.

## Offerta

L'offerta base è **399 €**.

Non cambiare prezzo, scope o condizioni commerciali senza una richiesta esplicita.

Il secondo funnel è:
> progetto avanzato → richiesta fino a 2 preventivi da partner.

Non inventare partner.

## Privacy

- Nessuna checkbox preselezionata.
- Consenso esplicito per l'eventuale inoltro ai partner.
- Minimizzazione dei dati.
- Nessun tracking non necessario di default.
- I testi legali devono contenere TODO chiari dove serve personalizzazione professionale.
- Non presentare testi generati come consulenza legale definitiva.

## Prima di completare ogni task

1. Leggi i file di progetto rilevanti.
2. Esegui il lavoro richiesto.
3. Esegui `npm run build`.
4. Controlla eventuali errori.
5. Se pertinente, controlla:
   - broken link;
   - duplicazioni;
   - title/meta duplicati;
   - responsive;
   - accessibilità;
   - performance.
6. Aggiorna `ROADMAP.md`.
7. Riassumi modifiche e rischi residui.
8. Crea commit descrittivo.
9. Esegui push se possibile e autorizzato.

## Regola finale

Non fare più lavoro del necessario.

Se il task chiede una singola pagina modello, non generare automaticamente altre 20 pagine.
