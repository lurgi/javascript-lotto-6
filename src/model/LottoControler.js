import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

const CONSTANT = Object.freeze({
  lottoPrice: 1_000,
});

class LottoControler {
  #lottos;

  createLottos(money) {
    this.#moneyValid(money);
    const LOTTO_CNT = money / CONSTANT.lottoPrice;
    this.#lottos = Array.from({ length: LOTTO_CNT }, () => {
      const RANDOM_NUMBERS = this.#randomeSixNumber();
      return new Lotto(RANDOM_NUMBERS);
    });
  }

  #moneyValid(money) {
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
}

export default LottoControler;
