import { CssVarsThemeOptions } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface CssVarsThemeOptions {
    defaultColorScheme?: string;
  }
  interface CssVarsTheme {
    defaultColorScheme?: string;
  }
}
