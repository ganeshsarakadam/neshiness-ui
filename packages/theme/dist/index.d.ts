declare const cssVariablesSelector = ":root";
declare const defaultThemeAttr = "data-theme";
declare const defaultThemeName = "orange-black";
declare const availableThemes: readonly ["orange-black", "orange-light"];
declare const applyTheme: (name?: string, attr?: string) => void;

export { applyTheme, availableThemes, cssVariablesSelector, applyTheme as default, defaultThemeAttr, defaultThemeName };
