import { FrenchDaysPipe } from './pipe/french-days.pipe';

describe('FrenchDaysPipe', () => {
  it('create an instance', () => {
    const pipe = new FrenchDaysPipe();
    expect(pipe).toBeTruthy();
  });
});
