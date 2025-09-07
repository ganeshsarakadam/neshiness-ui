export const cssVariablesSelector = ':root';
export const defaultThemeAttr = 'data-theme';
export const defaultThemeName = 'orange-black';
export const availableThemes = ['orange-black', 'orange-light'] as const;
export const applyTheme = (name = defaultThemeName, attr = defaultThemeAttr) => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute(attr, name);
};
export default applyTheme;
