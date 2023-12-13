import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

const CONSTANT = Object.freeze({
  lottoPrice: 1_000,
});

class LottoControler {
  #lottos;

  #winNumbers;

  createLottos(money) {
    this.#validMoney(money);
    const LOTTO_CNT = money / CONSTANT.lottoPrice;
    this.#lottos = Array.from({ length: LOTTO_CNT }, () => {
      const RANDOM_NUMBERS = this.#randomeSixNumber();
      return new Lotto(RANDOM_NUMBERS);
    });
  }

  #validMoney(money) {
    if (money < CONSTANT.lottoPrice) {
      throw new Error('[ERROR]');
    }
    if (money % CONSTANT.lottoPrice !== 0) {
      throw new Error('[ERROR]');
    }
  }

  #randomeSixNumber() {
    MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  setWinNumbers(winNumbers) {
    const WIN_NUMBERS = winNumbers.split(',').map(Number);
    this.#validWinNumbers(WIN_NUMBERS);
    this.#winNumbers = WIN_NUMBERS;
  }

  #validWinNumbers(winNumbers) {
    if (new Set(winNumbers).size !== 6 || winNumbers.length !== 6) {
      throw new Error('[ERROR]');
    }
    winNumbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error('[ERROR]');
      }
      if (number < 1 || number > 45) {
        throw new Error('[ERROR]');
      }
    });
  }
}

export default LottoControler;
