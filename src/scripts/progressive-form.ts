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
  const startedField = form.querySelector<HTMLInputElement>('[data-form-started]');
  let currentStep = 0;

  if (startedField) startedField.value = String(Date.now());

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
    if (nextButton) {
      nextButton.type = isLastStep ? 'submit' : 'button';
      nextButton.textContent = isLastStep ? 'Invia' : 'Avanti →';
    }

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

    if (currentStep < steps.length - 1) {
      if (validateCurrentStep()) updateStep(currentStep + 1);
      return;
    }

    if (!validateCurrentStep() || !status || !nextButton) return;

    const startedAt = Number(startedField?.value ?? Date.now());
    if (Date.now() - startedAt < 2500) {
      status.textContent = 'Controlla i dati inseriti prima di inviare la richiesta.';
      status.dataset.state = 'error';
      status.hidden = false;
      return;
    }

    nextButton.disabled = true;
    nextButton.textContent = 'Invio in corso…';
    status.hidden = true;

    const request = Object.fromEntries(new FormData(form).entries());
    const result = await submitRequest(request);

    status.textContent = result.message;
    status.dataset.state = result.ok ? 'success' : 'error';
    status.hidden = false;
    nextButton.disabled = false;
    nextButton.textContent = 'Invia';

    if (result.ok) {
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select, button').forEach((field) => {
        field.disabled = true;
      });
    }
  });

  updateStep(0);
}
