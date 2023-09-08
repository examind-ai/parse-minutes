const parseEstimatedTimeMinutes = require('./parseMinutes.js');

describe('Parses minutes', () => {
  it('0.5 minutes', () => {
    const sentence = '0.5 minutes';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(1);
  });

  it('1 minute.', () => {
    const sentence = '1 minute.';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(1);
  });

  it('10 minutes.', () => {
    const sentence = '10 minutes.';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(10);
  });

  it('Estimated time: 1 minute.', () => {
    const sentence = 'Estimated time: 1 minute.';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(1);
  });

  it('Estimated time to answer: 2 minutes.', () => {
    const sentence = 'Estimated time to answer: 2 minutes.';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(2);
  });

  it('1. 1 minute 2. What is the cost of the Honda Civic? A) $27,600 B) $35,000 C) $38,000 D) $80,000', () => {
    const sentence =
      '1. 1 minute 2. What is the cost of the Honda Civic? A) $27,600 B) $35,000 C) $38,000 D) $80,000';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(1);
  });
});

describe('Parses higher end of range in minutes ', () => {
  it('1-2 minutes.', () => {
    const sentence = '1-2 minutes.';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(2);
  });

  it('2-3 minutes.', () => {
    const sentence = '2-3 minutes.';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBe(3);
  });
});

describe('Returns null', () => {
  it('N/A (This is not a question that can be answered with an estimated time for solving', () => {
    const sentence =
      'N/A (This is not a question that can be answered with an estimated time for solving';
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBeNull();
  });

  it("I'm sorry, but this is not a question that can be answered with a specific time estimate as it is not a math or problem-solving question.", () => {
    const sentence =
      "I'm sorry, but this is not a question that can be answered with a specific time estimate as it is not a math or problem-solving question.";
    const result = parseEstimatedTimeMinutes(sentence);
    expect(result).toBeNull();
  });
});
