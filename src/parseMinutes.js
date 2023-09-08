const parseTimeRange = sentence => {
  const regex = /(\d+(\.\d+)?)\s*-\s*(\d+(\.\d+)?)?\s*minute(s)?\.?/g;
  const match = regex.exec(sentence);

  if (!match) return null;

  const maxMinutes = parseFloat(match[3]);
  return Math.ceil(maxMinutes);
};

const parseSingleTime = sentence => {
  const regex = /(\d+(\.\d+)?)\s*minute(s)?\.?/g;
  const match = regex.exec(sentence);

  if (!match) return null;

  const minutes = parseFloat(match[1]);
  return Math.ceil(minutes);
};

/**
 * Parses the estimated time from a given text.
 * @param {string} sentence - The text to parse the estimated time from.
 * @returns {number|null} - The estimated time in minutes, rounded up to the highest integer, or null if no estimated time was found.
 */
const parseMinutes = sentence =>
  parseTimeRange(sentence) ?? parseSingleTime(sentence);

module.exports = parseMinutes;
