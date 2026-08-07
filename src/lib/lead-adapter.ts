export interface BaseSiteRequest {
  [key: string]: FormDataEntryValue | undefined;
}

export interface LeadSubmitResult {
  ok: boolean;
  message: string;
}

/**
 * Local development adapter. It deliberately does not send or persist data.
 * A real transport can replace this module when the receiving workflow exists.
 */
export async function submitBaseSiteRequest(_request: BaseSiteRequest): Promise<LeadSubmitResult> {
  await new Promise((resolve) => window.setTimeout(resolve, 250));

  return {
    ok: true,
    message: 'Richiesta registrata in modalità demo. Ti contatteremo via email quando il modulo sarà collegato al servizio di ricezione.',
  };
}
