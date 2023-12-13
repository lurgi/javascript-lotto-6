import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_MESSAGES = {
  money: '구입금액을 입력해 주세요.',
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

  async readWinNumbers() {},

  inputValid(input) {
    if (!input) throw new Error(ERROR_MESSAGES.notValid);
  },

  readLineAsync(string) {
    return MissionUtils.Console.readLineAsync(string);
  },
});

export default InputView;
