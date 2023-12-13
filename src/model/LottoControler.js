class LottoControler {
  createLottos(money) {
    this.#moneyValid(money);
  }

  #moneyValid(money) {
    if (money < 1_000) {
      throw new Error('[ERROR]');
    }
    if (money % 1_000 !== 0) {
      throw new Error('[ERROR]');
    }
  }
}

export default LottoControler;
