import { rowList } from '../lib/gameBasics';

describe('Row List', () => {
    it('has exactly 10 letters', () => expect(rowList.length).toBe(10))
})