import LottoControler from '../../src/model/LottoControler';

describe('LottoControler 테스트', () => {
  test.each([500, 1500, 1233, 1111111, 0])(
    '구매 금액 예외 처리 테스트',
    (money) => {
      const LOTTO_CONTROLER = new LottoControler();
      expect(() => LOTTO_CONTROLER.createLottos(money)).toThrow('[ERROR]');
    },
  );
});
