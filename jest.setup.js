
//import "@testing-library/jest-dom";
// jest.setup.js
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
require("@testing-library/jest-dom");
//Silencia o warning do React sobre JSX transform antigo
const originalWarn = console.warn;
console.warn = (...args) => {
 if (
 typeof args[0] === "string" &&
 args[0].includes("using an outdated JSX transform")
 ) {
 return;
 }
 originalWarn(...args);
 // Corrige erro "TextEncoder is not defined"
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder; 
}; 
