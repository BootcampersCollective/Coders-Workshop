import {validSentence} from './validSentence';

describe('Valid Sentences should work', () => {

  it('should return true for a valid sentence', (done) => {
    const actual = validSentence("Should be true!");
    expect(actual).toBe(true);
    done();
  }),

  it('should return false for a sentence without a terminal', (done) => {
    const actual = validSentence('Should be false');
    expect(actual).toEqual(false);
    done();
  }),

  it('should return false for a sentence with double spaces', (done) => {
    const actual = validSentence('Should be  false.');
    expect(actual).toEqual(false);
    done();
  }),

  it('should return false for a sentence that starts with a lower case', (done) => {
    const actual = validSentence('should be false.');
    expect(actual).toEqual(false);
    done();
  }),

  it('should return false for a sentence with an asterisk', (done) => {
    const actual = validSentence('Should be* false.');
    expect(actual).toEqual(false);
    done();
  }),

  it('should return true for a sentence with a rogue question mark in the middle', (done) => {
    const actual = validSentence('Should be? true?');
    expect(actual).toEqual(true);
    done();
  })
})