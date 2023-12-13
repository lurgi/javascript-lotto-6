import Lotto from '../../src/model/Lotto';

/* eslint-disable */
describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 7, 1],
    [[1, 2, 4, 5, 6, 7], 3, 2],
    [[1, 2, 4, 5, 6, 7], 8, 3],
    [[7, 11, 30, 40, 42, 43], 8, null],
  ])('당첨 번호 테스트', (winNumbers, bonusNumber, rank) => {
    const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    const RANK = LOTTO.getLottoRank(winNumbers, bonusNumber);
    expect(RANK).toBe(rank);
  });
});
