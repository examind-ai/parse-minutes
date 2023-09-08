/**
 * Parses the estimated time from a given text.
 * @param {string} sentence - The text to parse the estimated time from.
 * @returns {number|null} - The estimated time in minutes, rounded up to the highest integer, or null if no estimated time was found.
 */
function parseMinutes(sentence) {
  const regex = /(\d+(\.\d+)?)\s*-\s*(\d+(\.\d+)?)?\s*minute(s)?\.?/g;
  const match = regex.exec(sentence);
  if (match) {
    const maxMinutes = parseFloat(match[3]);
    return Math.ceil(maxMinutes);
  } else {
    const regex = /(\d+(\.\d+)?)\s*minute(s)?\.?/g;
    const match = regex.exec(sentence);
    if (match) {
      const minutes = parseFloat(match[1]);
      return Math.ceil(minutes);
    } else {
      return null;
    }
  }
}

module.exports = parseMinutes;
