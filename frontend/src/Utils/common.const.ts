const FOCUSABLE_HTML_ELEMENT = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'textarea:not([disabled])',
  'button',
] as const;

export const FOCUSABLE_HTML_ELEMENT_STR = FOCUSABLE_HTML_ELEMENT.join(', ');
