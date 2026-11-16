// Works out which year of the PhD Jeffrey is in, so the site never says
// "first-year" when it should say "second-year".
import { person } from "../content/site.js";

const WORDS = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"];

/**
 * PhD year as a number (1 = first year). A new year starts every 12 months
 * after the start month.
 * @param {{year: number, month: number}} start  month is 1-12
 * @param {Date} now
 */
export function phdYearNumber(start = person.phdStart, now = new Date()) {
  const monthsElapsed =
    (now.getFullYear() - start.year) * 12 + (now.getMonth() + 1 - start.month);
  return Math.max(1, Math.floor(monthsElapsed / 12) + 1);
}

/** PhD year as a word: "first", "second", ... (falls back to "8th"). */
export function phdYearWord(start = person.phdStart, now = new Date()) {
  const n = phdYearNumber(start, now);
  return WORDS[n - 1] || `${n}th`;
}

/** Replaces every literal "{year}" in a content string with the year word. */
export function fillYear(text, now = new Date()) {
  return String(text).replaceAll("{year}", phdYearWord(person.phdStart, now));
}
