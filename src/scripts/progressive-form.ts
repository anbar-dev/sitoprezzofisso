import type { BaseSiteRequest, LeadSubmitResult } from '../lib/lead-adapter';

export function setupProgressiveForm(
  form: HTMLFormElement,
  submitRequest: (request: BaseSiteRequest) => Promise<LeadSubmitResult>,
) {
  const steps = Array.from(form.querySelectorAll<HTMLElement>('[data-form-step]'));
  const progress = form.querySelector<HTMLElement>('[data-form-progress]');
  const progressLabel = form.querySelector<HTMLElement>('[data-form-progress-label]');
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const previousButton = form.querySelector<HTMLButtonElement>('[data-form-previous]');
  const nextButton = form.querySelector<HTMLButtonElement>('[data-form-next]');
  const submitButton = form.querySelector<HTMLButtonElement>('[data-form-submit]');
  let currentStep = 0;

  const updateStep = (stepIndex: number) => {
    currentStep = stepIndex;
    steps.forEach((step, index) => {
      step.hidden = index !== currentStep;
    });

    const isLastStep = currentStep === steps.length - 1;
    const percentage = ((currentStep + 1) / steps.length) * 100;

    if (progress) progress.style.width = `${percentage}%`;
    if (progressLabel) progressLabel.textContent = `Passaggio ${currentStep + 1} di ${steps.length}`;
    if (previousButton) previousButton.hidden = currentStep === 0;
    if (nextButton) nextButton.hidden = isLastStep;
    if (submitButton) submitButton.hidden = !isLastStep;

    const firstField = steps[currentStep]?.querySelector<HTMLElement>('input, textarea, select');
    firstField?.focus();
  };

  const validateCurrentStep = () => {
    const fields = Array.from(steps[currentStep]?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]') ?? []);
    const invalidField = fields.find((field) => !field.checkValidity());
    if (invalidField) {
      invalidField.reportValidity();
      return false;
    }
    return true;
  };

  nextButton?.addEventListener('click', () => {
    if (validateCurrentStep() && currentStep < steps.length - 1) updateStep(currentStep + 1);
  });

  previousButton?.addEventListener('click', () => {
    if (currentStep > 0) updateStep(currentStep - 1);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!validateCurrentStep() || !status || !submitButton) return;

    submitButton.disabled = true;
    submitButton.textContent = 'Invio in corso…';
    status.hidden = true;

    const request = Object.fromEntries(new FormData(form).entries());
    const result = await submitRequest(request);

    status.textContent = result.message;
    status.dataset.state = result.ok ? 'success' : 'error';
    status.hidden = false;
    submitButton.disabled = false;
    submitButton.textContent = 'Invia la richiesta';

    if (result.ok) {
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select, button').forEach((field) => {
        if (field !== submitButton) field.disabled = true;
      });
    }
  });

  updateStep(0);
}
