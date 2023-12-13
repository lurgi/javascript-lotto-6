import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

const CONSTANT = Object.freeze({
  lottoPrice: 1_000,
});

const RANK_PRICE = Object.freeze({
  1: 2_000_000_000,
  2: 30_000_000,
  3: 1_500_000,
  4: 50_000,
  5: 5_000,
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

  getLottoResults() {
    return this.#lottos.map((lotto) =>
      lotto.getLottoRank(this.#winNumbers, this.#bonusNumber),
    );
  }

  getRateIncome() {
    const LOTTO_RESULTS = this.getLottoResults();
    let income = 0;
    LOTTO_RESULTS.forEach((rank) => {
      if (RANK_PRICE[rank]) income += RANK_PRICE[rank];
    });
    const INPUT_MONEY = this.#lottos.length * CONSTANT.lottoPrice;
    const RATE_NUMBER = Math.round((income / INPUT_MONEY) * 1000) / 10;

    return RATE_NUMBER;
  }
}

export default LottoControler;
