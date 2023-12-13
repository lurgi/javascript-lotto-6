import LottoControler from './model/LottoControler';
import InputView from './view/InputView';
import OutputView from './view/OutputVeiw';

class App {
  #lottoControler;

  async play() {
    this.#lottoControler = new LottoControler();

    await this.playAmountMoney();

    const LOTTOS = this.#lottoControler.getLottos();
    OutputView.printLottos(LOTTOS);

    await this.playWinNumbers();
  }

  async playAmountMoney() {
    try {
      const AMOUNT_MONEY = await InputView.readAmountMoney();
      this.#lottoControler.createLottos(AMOUNT_MONEY);
    } catch (error) {
      OutputView.print(error.message);
    }
  }

  async playWinNumbers() {
    try {
      const WIN_NUMBERS = await InputView.readWinNumbers();
      this.#lottoControler.setWinNumbers(WIN_NUMBERS);
    } catch (error) {
      OutputView.print(error.message);
    }
  }
}

export default App;
