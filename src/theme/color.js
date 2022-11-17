/**
 *  alert: {
 *     default: '--color-alert',
 *     light: '--color-alert-light',
 *   },
 *
 *   warning: {
 *     default: '--color-warning',
 *     light: '--color-warning-light',
 *   },
 *
 *   text: {
 *     default: '--color-text',
 *   },
 *
 *   link: {
 *     default: '--color-link',
 *     hover: '--color-link-hover',
 *   },
 *
 *   bg: {
 *     default: '--color-bg',
 *   },
 *
 *   base: {
 *     default: '--color-base',
 *   },
 * @type {{hover: {bg: string, text: string, base: string}, default: {bg: string, text: string, base: string}, focus: {bg: string, text: string, base: string}, active: {bg: string, text: string, base: string}}}
 */
export const color = {
  alert: {
    default: 'var(--color-alert)',
    light: 'var(--color-alert-light)',
  },

  warning: {
    default: 'var(--color-warning)',
    light: 'var(--color-warning-light)',
  },

  text: {
    default: 'var(--color-text)',
    light: 'var(--color-text-light)',
  },

  link: {
    default: 'var(--color-link)',
    hover: 'var(--color-link-hover)',
  },

  button: {
    default: 'var(--color-button)',
    hover: 'var(--color-button-hover)',
  },

  bg: {
    default: 'var(--color-bg)',
  },

  base: {
    default: 'var(--color-base)',
  },
};
