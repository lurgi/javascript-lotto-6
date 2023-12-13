import LottoControler from './model/LottoControler';
import InputView from './view/InputView';
import OutputView from './view/OutputVeiw';

class App {
  #lottoControler;

  async play() {
    this.#lottoControler = new LottoControler();

    await this.playAmountMoney();
  }

  async playAmountMoney() {
    try {
      const AMOUNT_MONEY = await InputView.readAmountMoney();
      this.#lottoControler.createLottos(AMOUNT_MONEY);
    } catch (error) {
      OutputView.print(error.message);
    }
  }
}

export default App;
