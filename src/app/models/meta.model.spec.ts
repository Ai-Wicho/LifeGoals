import { Meta } from './meta.model';

describe('Meta', () => {
  it('should accept a valid object', () => {
    const meta: Meta = {
      meta: 'Test Goal',
      id: '1'
    };
    expect(meta).toBeTruthy();
  });
});
