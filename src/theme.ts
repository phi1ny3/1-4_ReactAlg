// Why: Mirror Android's semantic palette in MUI so web + Android share a brand language.
import { createTheme } from '@mui/material/styles';

// Optional: add a custom "tertiary" color to MUI's palette for parity with Android.
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    onTertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    onTertiary?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  // Why: Start in light; you can switch to system or dark later.
  palette: {
    mode: 'light',

    // Brand / Primary
    primary: {
      main: '#087400',           // @color/color_primary
      contrastText: '#FFFFFF',   // @color/color_on_primary
    },

    // Secondary / Accent
    secondary: {
      main: '#5051AC',           // @color/color_secondary
      contrastText: '#FFFFFF',   // @color/color_on_secondary
    },

    // Tertiary (custom slot to match Android's tertiary)
    tertiary: {
      main: '#7A5CF4',           // @color/color_tertiary
      contrastText: '#FFFFFF',   // @color/color_on_tertiary
    },

    // Surfaces / Background
    background: {
      default: '#FFF8F4',        // @color/color_background
      paper:   '#FFFFFF',        // @color/color_surface
    },
    text: {
      primary:   '#212121',      // @color/color_on_surface
      secondary: '#4A4A4A',      // @color/color_on_surface_variant
    },
    divider: '#9E9E9E',          // @color/color_outline

    // Errors
    error: {
      main: '#D32F2F',           // @color/color_error
      contrastText: '#FFFFFF',   // @color/color_on_error
    },
  },

  // Why: Small UI refinements for card paddings/rounded corners to match your style.
  shape: { borderRadius: 12 },
  components: {
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } } },
  },
});
