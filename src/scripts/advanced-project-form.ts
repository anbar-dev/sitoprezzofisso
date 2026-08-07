import { submitAdvancedProjectRequest } from '../lib/advanced-project-adapter';
import { setupProgressiveForm } from './progressive-form';

const form = document.querySelector<HTMLFormElement>('[data-progressive-form="advanced"]');

if (form) setupProgressiveForm(form, submitAdvancedProjectRequest);
