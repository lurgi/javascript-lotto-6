import LottoControler from './model/LottoControler';

class App {
  #lottoControler;

  async play() {
    /**
     * LottoControler 생성
     * 로또 구입 금액 입력
     * 구입 금액 만큼 로또 생성
     * LottoControler에 로또 할당
     */
    this.#lottoControler = new LottoControler();
  }
}

export default App;
