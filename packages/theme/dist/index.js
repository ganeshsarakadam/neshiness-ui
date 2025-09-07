// src/index.ts
var cssVariablesSelector = ":root";
var defaultThemeAttr = "data-theme";
var defaultThemeName = "orange-black";
var availableThemes = ["orange-black", "orange-light"];
var applyTheme = (name = defaultThemeName, attr = defaultThemeAttr) => {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute(attr, name);
};
var index_default = applyTheme;
export {
  applyTheme,
  availableThemes,
  cssVariablesSelector,
  index_default as default,
  defaultThemeAttr,
  defaultThemeName
};
