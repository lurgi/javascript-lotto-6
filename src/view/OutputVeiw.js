import { MissionUtils } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  print(string) {
    MissionUtils.Console.print(string);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      this.print(`[${lotto.getNumbers().join(',')}]`);
    });
  },
});

export default OutputView;
