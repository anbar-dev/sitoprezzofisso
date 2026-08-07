import { partnerReferralConfig } from '../config/partner-referral';
import type { BaseSiteRequest, LeadSubmitResult } from './lead-adapter';

/**
 * Development adapter for the advanced-project funnel.
 * It intentionally does not email, persist, or forward any request.
 */
export async function submitAdvancedProjectRequest(_request: BaseSiteRequest): Promise<LeadSubmitResult> {
  await new Promise((resolve) => window.setTimeout(resolve, 250));

  return {
    ok: true,
    message: `Demo tecnica: nessun dato è stato inviato o inoltrato. Il flusso è predisposto per un massimo di ${partnerReferralConfig.maxPartners} preventivi, ma la configurazione partner è disattivata in development.`,
  };
}
