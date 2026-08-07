import { submitBaseSiteRequest } from '../lib/lead-adapter';
import { setupProgressiveForm } from './progressive-form';

const form = document.querySelector<HTMLFormElement>('[data-progressive-form="base"]');

if (form) setupProgressiveForm(form, submitBaseSiteRequest);
