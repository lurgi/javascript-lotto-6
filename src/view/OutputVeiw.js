import { MissionUtils } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGES = {
  numberOfLottos: (num) => `${num}개를 구매했습니다.`,
  results: (num) => ({
    1: `6개 일치 (2,000,000,000원) - ${num}개`,
    2: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
    3: ` 5개 일치 (1,500,000원) - ${num}개`,
    4: `4개 일치 (50,000원) - ${num}개`,
    5: ` 3개 일치 (5,000원) - ${num}개`,
  }),
};

const OutputView = Object.freeze({
  print(string) {
    MissionUtils.Console.print(string);
  },

  printLottos(lottos) {
    this.print(OUTPUT_MESSAGES.numberOfLottos(lottos.length));
    lottos.forEach((lotto) => {
      this.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },

  printLottoResults(lottoResults) {
    const RANK_NUMBERS = this.getRankNumbers(lottoResults);
    for (let index = 5; index >= 1; index -= 1) {
      this.print(OUTPUT_MESSAGES.results(RANK_NUMBERS[index])[index]);
    }
  },

  getRankNumbers(lottoResults) {
    const RANK_NUMBERS = Array(6).fill(0);
    lottoResults.forEach((rank) => {
      if (rank) {
        RANK_NUMBERS[rank] += 1;
      }
    });
    return RANK_NUMBERS;
  },
});

export default OutputView;
