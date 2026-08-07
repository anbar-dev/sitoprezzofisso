export interface BaseSiteRequest {
  [key: string]: FormDataEntryValue | undefined;
}

export interface LeadSubmitResult {
  ok: boolean;
  message: string;
}

const formSubmitEndpoint = 'https://formsubmit.co/ajax/andrea.baragiola@outlook.it';

async function submitToEmail(request: BaseSiteRequest): Promise<LeadSubmitResult> {
  if (request._honey) {
    return { ok: true, message: 'Richiesta inviata.' };
  }

  const payload: Record<string, string> = {};
  Object.entries(request).forEach(([key, value]) => {
    if (typeof value === 'string') payload[key] = value;
  });

  try {
    const response = await fetch(formSubmitEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`FormSubmit responded with ${response.status}`);

    return {
      ok: true,
      message: 'Richiesta inviata. Ti risponderò all’indirizzo email indicato.',
    };
  } catch {
    return {
      ok: false,
      message: 'Non è stato possibile inviare la richiesta. Riprova tra poco oppure scrivi direttamente a andrea.baragiola@outlook.it.',
    };
  }
}

export function submitBaseSiteRequest(request: BaseSiteRequest): Promise<LeadSubmitResult> {
  return submitToEmail(request);
}

export { submitToEmail };
