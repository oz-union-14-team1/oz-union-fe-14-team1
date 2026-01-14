import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      /* ============================
       * COLORS (Semantic Tokens)
       * ============================ */
      colors: {
        /* Brand */
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-active': 'var(--color-primary-active)',

        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',

        /* Surface */
        surface: {
          DEFAULT: 'var(--color-surface-default)',
          elevated: 'var(--color-surface-elevated)',
          muted: 'var(--color-surface-muted)',
        },

        /* Text */
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          inverse: 'var(--color-text-inverse)',
        },

        /* Border */
        border: {
          DEFAULT: 'var(--color-border-default)',
          strong: 'var(--color-border-strong)',
        },

        /* Feedback */
        feedback: {
          success: 'var(--color-feedback-success)',
          warning: 'var(--color-feedback-warning)',
          error: 'var(--color-feedback-error)',
        },
      },

      /* ============================
       * RADIUS
       * ============================ */
      borderRadius: {
        sm: 'var(--radius-control)',
        lg: 'var(--radius-card)',
      },

      /* ============================
       * SPACING
       * ============================ */
      spacing: {
        mobile: 'var(--spacing-mobile)',
        tablet: 'var(--spacing-tablet)',
        desktop: 'var(--spacing-desktop)',
      },

      /* ============================
       * LAYOUT
       * ============================ */
      maxWidth: {
        container: 'var(--layout-container-width)',
      },

      /* ============================
       * TYPOGRAPHY
       * ============================ */
      fontFamily: {
        base: ['var(--font-body)'],
      },

      fontSize: {
        heading: 'var(--font-size-heading)',
        caption: 'var(--font-size-caption)',
      },

      /* ============================
       * GRADIENTS
       * ============================ */
      backgroundImage: {
        'gradient-main': 'var(--gradient-main)',
        'gradient-sub': 'var(--gradient-sub)',
      },

      /* ============================
       * SHADOW
       * ============================ */
      boxShadow: {
        inactive: 'var(--shadow-interactive-inactive)',
        active: 'var(--shadow-interactive-active)',
      },
    },
  },

  plugins: [],
}

export default config
