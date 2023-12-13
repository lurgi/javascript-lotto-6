import LottoControler from './model/LottoControler';
import InputView from './view/InputView';
import OutputView from './view/OutputVeiw';

class App {
  #lottoControler;

  async play() {
    this.#lottoControler = new LottoControler();

    await this.playAmountMoney();
    this.printLottoNumbers();
    await this.playWinNumbers();
    await this.playBonusNumber();
  }

  async playAmountMoney() {
    try {
      const AMOUNT_MONEY = await InputView.readAmountMoney();
      this.#lottoControler.createLottos(AMOUNT_MONEY);
    } catch (error) {
      OutputView.print(error.message);
      await this.playAmountMoney();
    }
  }

  printLottoNumbers() {
    const LOTTOS = this.#lottoControler.getLottos();
    OutputView.printLottos(LOTTOS);
  }

  async playWinNumbers() {
    try {
      const WIN_NUMBERS = await InputView.readWinNumbers();
      this.#lottoControler.setWinNumbers(WIN_NUMBERS);
    } catch (error) {
      OutputView.print(error.message);
      await this.playWinNumbers();
    }
  }

  async playBonusNumber() {
    try {
      const BONUS_NUMBER = await InputView.readBonusNumbers();
      this.#lottoControler.setBonusNumber(BONUS_NUMBER);
    } catch (error) {
      OutputView.print(error.message);
      await this.playBonusNumber();
    }
  }
}

export default App;
