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
 * @type {{button: {hover: string, default: string}, alert: {default: string, light: string}, bg: {default: string}, link: {hover: string, default: string}, warning: {default: string, light: string}, text: {default: string, light: string}, base: {default: string}}}
 */
export const COLOR = {
  text: {
    default: 'var(--color-theme1)',
  },
  button: {
    dark: {
      normal: {
        bg: 'var(--color-theme5)',
        text: 'var(--color2)',
      },
      hover: {
        bg: 'var(--color-theme6)',
        text: 'var(--color2)',
      },
    },
    light: {
      normal: {
        bg: 'var(--color-theme7)',
        text: 'var(--color-theme9)',
      },
      hover: {
        bg: 'var(--color-theme8)',
        text: 'var(--color-theme9)',
      },
    },
    alert: {
      normal: {
        bg: 'var(--color23)',
        text: 'var(--color-theme10)',
      },
      hover: {
        bg: 'var(--color24)',
        text: 'var(--color-theme10)',
      },
    },
    warning: {
      normal: {
        bg: 'var(--color19)',
        text: 'var(--color1)',
      },
      hover: {
        bg: 'var(--color20)',
        text: 'var(--color1)',
      },
    },
    default: {
      normal: {
        bg: 'var(--color-theme11)',
        text: 'var(--color-theme12)',
      },
      hover: {
        bg: 'var(--color5)',
        text: 'var(--color-theme12)',
      },
    },
  },
  bg: {
    default: 'var(--color-theme2)',
  },
  base: {
    default: 'var(--color-theme3)',
  },
};
