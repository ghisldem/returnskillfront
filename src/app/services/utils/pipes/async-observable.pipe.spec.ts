import { AsyncObservablePipe } from './async-observable.pipe';

describe('AsyncObservablePipe', () => {
  it('create an instance', () => {
    const pipe = new AsyncObservablePipe();
    expect(pipe).toBeTruthy();
  });
});
