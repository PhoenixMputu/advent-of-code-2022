const fs = require("fs");

const parseSectionRange = (input) => {
  return input.split("-").map(Number);
};

const sectionsContains = (a, b) => {
  return sectionContains(a, b) || sectionContains(b, a);
};

const sectionContains = ([alo, ahi], [blo, bhi]) => {
  return alo <= blo && bhi <= ahi;
};

const data = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .map((text) => text.split(",").map(parseSectionRange));

// Part one
const numberSectionContainer = data.filter(([a, b]) => sectionsContains(a, b));
console.log(numberSectionContainer.length);

// Part two
const sectionsOverlap = ([alo, ahi], [blo, bhi]) => {
  return alo <= bhi && ahi >= blo;
};

console.log(data.filter(([a,b])=>sectionsOverlap(a, b)).length);