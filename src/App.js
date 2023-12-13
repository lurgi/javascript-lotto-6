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
    /**
     * LottoControler 생성
     * 로또 구입 금액 입력
     * 구입 금액 만큼 로또 생성
     * LottoControler에 로또 할당
     */
    try {
      const AMOUNT_MONEY = await InputView.readAmountMoney();
      this.#lottoControler.createLottos(AMOUNT_MONEY);
    } catch (error) {
      OutputView.print(error.message);
    }
  }
}

export default App;
