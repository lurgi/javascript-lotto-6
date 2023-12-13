const RANK_OBJ = {
  6: 1,
  4: 4,
  3: 5,
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR]');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getLottoRank(winNumbers, bonusNumber) {
    const CNT = this.#getLottoSameCount(winNumbers);
    if (CNT < 3) return null;
    if (CNT === 5) {
      if (this.#numbers.includes(bonusNumber)) {
        return 2;
      }
      return 3;
    }
    return RANK_OBJ[CNT];
  }

  #getLottoSameCount(winNumbers) {
    let sameNumberCnt = 0;
    this.#numbers.forEach((number) => {
      if (winNumbers.includes(number)) {
        sameNumberCnt += 1;
      }
    });
    return sameNumberCnt;
  }
}

export default Lotto;
