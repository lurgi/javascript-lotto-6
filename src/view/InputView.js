import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_MESSAGES = {
  money: '\n구입금액을 입력해 주세요.',
  winNumbers: '\n당첨 번호를 입력해 주세요.',
  bonusNumber: '\n보너스 번호를 입력해 주세요.',
};

const ERROR_MESSAGES = {
  notValid: '[ERROR] 입력하지 않으셨습니다.',
};

const InputView = Object.freeze({
  async readAmountMoney() {
    const INPUT = await this.readLineAsync(INPUT_MESSAGES.money);
    this.inputValid(INPUT);

    return Number(INPUT);
  },

  inputValid(input) {
    if (!input) throw new Error(ERROR_MESSAGES.notValid);
  },

  async readWinNumbers() {
    const INPUT = await this.readLineAsync(INPUT_MESSAGES.winNumbers);
    this.inputValid(INPUT);

    return INPUT.split(',').map(Number);
  },

  readLineAsync(string) {
    return MissionUtils.Console.readLineAsync(string);
  },

  async readBonusNumbers() {
    const INPUT = await this.readLineAsync(INPUT_MESSAGES.bonusNumber);
    this.inputValid(INPUT);

    return Number(INPUT);
  },
});

export default InputView;
