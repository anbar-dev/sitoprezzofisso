import type { BaseSiteRequest, LeadSubmitResult } from './lead-adapter';
import { submitToEmail } from './lead-adapter';

export function submitAdvancedProjectRequest(request: BaseSiteRequest): Promise<LeadSubmitResult> {
  return submitToEmail(request);
}
