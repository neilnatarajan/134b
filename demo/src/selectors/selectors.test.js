import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'Geico', firstName: 'Geico', lastName: ''},
        {id: 'Statefarm',firstName: 'Statefarm',lastName: 'Inc'}
      ];

      const expected = [
        {value: 'Geico', text: 'Geico '},
        {value: 'Statefarm', text: 'Statefarm Inc'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
