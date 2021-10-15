import { expect } from 'chai';
import { Province, sampleProvinceData } from '../main.js';

describe('province', () => {
  let asia;
  // 각 테스트에 독립적인 픽스쳐 생성을 위해서
  // + 내가 표준 픽스쳐를 사용한다는 사실을 알려주기 위해서
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  it('shortfall', () => {
    expect(asia.shortfall).equal(5);
  });

  it('profit', () => {
    expect(asia.profit).equal(230);
  });
});
