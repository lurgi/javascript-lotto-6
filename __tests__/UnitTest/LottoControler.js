import LottoControler from '../../src/model/LottoControler';

/* eslint-disable */
describe('LottoControler 테스트', () => {
  test.each([500, 1500, 1233, 1111111, 0])(
    '구매 금액 예외 처리 테스트',
    (money) => {
      const LOTTO_CONTROLER = new LottoControler();
      expect(() => LOTTO_CONTROLER.createLottos(money)).toThrow('[ERROR]');
    },
  );

  test.each(['1,2,3,4,4,4', 'q,eqreakj,erjla', '123,4,5,6,7,8'])(
    '우승 번호 예외 처리 테스트',
    (numbers) => {
      const LOTTO_CONTROLER = new LottoControler();
      expect(() => LOTTO_CONTROLER.setWinNumbers(numbers)).toThrow('[ERROR]');
    },
  );

  test.each([NaN, 0, 46, 4])('보너스 번호 예외 처리 테스트', (number) => {
    const LOTTO_CONTROLER = new LottoControler();
    LOTTO_CONTROLER.setWinNumbers('1,2,3,4,5,6');
    expect(() => LOTTO_CONTROLER.setBonusNumber(number)).toThrow('[ERROR]');
  });
});
