import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

const CONSTANT = Object.freeze({
  lottoPrice: 1_000,
});

class LottoControler {
  #lottos;

  #winNumbers;

  #bonusNumber;

  getLottos() {
    return [...this.#lottos];
  }

  createLottos(money) {
    this.#validMoney(money);
    const LOTTO_CNT = Math.floor(money / CONSTANT.lottoPrice);
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
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  setWinNumbers(winNumbers) {
    this.#validWinNumbers(winNumbers);
    this.#winNumbers = winNumbers;
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

  setBonusNumber(bonusNumber) {
    this.#validBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validBonusNumber(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error('[ERROR]');
    }
    if (this.#winNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR]');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR]');
    }
  }
}

export default LottoControler;
