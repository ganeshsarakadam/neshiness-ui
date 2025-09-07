"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  applyTheme: () => applyTheme,
  availableThemes: () => availableThemes,
  cssVariablesSelector: () => cssVariablesSelector,
  default: () => index_default,
  defaultThemeAttr: () => defaultThemeAttr,
  defaultThemeName: () => defaultThemeName
});
module.exports = __toCommonJS(index_exports);
var cssVariablesSelector = ":root";
var defaultThemeAttr = "data-theme";
var defaultThemeName = "orange-black";
var availableThemes = ["orange-black", "orange-light"];
var applyTheme = (name = defaultThemeName, attr = defaultThemeAttr) => {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute(attr, name);
};
var index_default = applyTheme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  applyTheme,
  availableThemes,
  cssVariablesSelector,
  defaultThemeAttr,
  defaultThemeName
});
