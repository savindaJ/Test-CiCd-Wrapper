import { greet } from './greet';

describe('greet', () => {
  it('returns a greeting for a valid name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('throws when name is empty', () => {
    expect(() => greet('   ')).toThrow('Name cannot be empty');
  });
});
