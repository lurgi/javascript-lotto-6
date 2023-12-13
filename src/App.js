import LottoControler from './model/LottoControler';
import InputView from './view/InputView';
import OutputView from './view/OutputVeiw';

class App {
  #lottoControler;

  async play() {
    this.#lottoControler = new LottoControler();

    await this.playAmountMoney();
    this.handleLottoInfo();
    await this.playWinNumbers();
    await this.playBonusNumber();
    this.handleLottoResults();
    this.handleRateOfIncome();
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

  handleLottoInfo() {
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

  handleLottoResults() {
    const LOTTO_RESULTS = this.#lottoControler.getLottoResults();
    OutputView.printLottoResults(LOTTO_RESULTS);
  }

  handleRateOfIncome() {
    const RATE_INCOME = this.#lottoControler.getRateIncome();
    OutputView.printRateIncome(RATE_INCOME);
  }
}

export default App;
