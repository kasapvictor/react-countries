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
  alert: {
    default: 'var(--color-alert)',
    hover: 'var(--color-alert-hover)',
  },

  alertLight: {
    default: 'var(--color-alert-light)',
    hover: 'var(--color-alert-hover)',
  },

  warning: {
    default: 'var(--color-warning)',
    hover: 'var(--color-warning-hover)',
  },

  warningLight: {
    default: 'var(--color-warning-light)',
    hover: 'var(--color-warning-light-hover)',
  },

  text: {
    default: 'var(--color-text)',
    dark: 'var(--color-text-dark)',
    light: 'var(--color-text-light)',
  },

  link: {
    default: 'var(--color-link)',
    hover: 'var(--color-link-hover)',
  },

  button: {
    default: {
      normal: {
        bg: 'var(--color-button)',
        text: 'var(--color-button-text)',
      },
      hover: {
        bg: 'var(--color-button-hover)',
        text: 'var(--color-button-text)',
      },
    },
    dark: {
      normal: {
        bg: 'var(--color-button-dark)',
        text: 'var(--color3)',
      },
      hover: {
        bg: 'var(--color-button-dark-hover)',
        text: 'var(--color3)',
      },
    },
    alert: {
      normal: {
        bg: 'var(--color-alert)',
        text: 'var(--color-button-text)',
      },
      hover: {
        bg: 'var(--color-alert-hover)',
        text: 'var(--color-button-text)',
      },
    },
    warning: {
      normal: {
        bg: 'var(--color-warning)',
        text: 'var(--color1)',
      },
      hover: {
        bg: 'var(--color-warning-hover)',
        text: 'var(--color1)',
      },
    },
    mute: {
      normal: {
        bg: 'var(--color-button-mute)',
        text: 'var(--color1)',
      },
      hover: {
        bg: 'var(--color-button-mute-hover)',
        text: 'var(--color1)',
      },
    },
  },

  bg: {
    default: 'var(--color-bg)',
  },

  icon: {
    dark: 'var(--color-icon)',
    light: 'var(--color-icon-light)',
  },

  base: {
    default: 'var(--color-base)',
  },
};
