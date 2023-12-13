import { MissionUtils } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  print(string) {
    MissionUtils.Console.print(string);
  },

  printLottos() {},
});

export default OutputView;
