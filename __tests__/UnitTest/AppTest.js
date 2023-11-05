import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../../src/App";
import Lotto from "../../src/Lotto";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

// eslint-disable-next-line
describe("App Unit Test", () => {
  const CASES = [
    [2000, 2],
    [3000, 3],
    [10000, 10],
  ];
  test.each(CASES)("금액 만큼 로또 생성", (money, expectedNumber) => {
    const LOTTOS = App.getLottoWithMoney(money);
    expect(LOTTOS.length).toBe(expectedNumber);
    LOTTOS.forEach((lotto) => {
      expect(lotto instanceof Lotto).toBeTruthy();
    });
  });

  const CAL_TEST = [
    [
      [
        new Lotto([8, 10, 11, 17, 32, 35]),
        new Lotto([9, 10, 14, 17, 28, 36]),
        new Lotto([8, 10, 11, 17, 32, 35]),
        new Lotto([8, 10, 11, 17, 32, 36]),
      ],
      [8, 10, 11, 17, 32, 36],
      35,
      [1, 2, 0, 0, 1],
    ],
    [
      [new Lotto([8, 10, 11, 17, 28, 35]), new Lotto([9, 10, 11, 17, 28, 35])],
      [7, 10, 11, 17, 28, 35],
      8,
      [0, 1, 1, 0, 0],
    ],
  ];
  test.each(CAL_TEST)(
    "당첨 내역 계산",
    (lottos, winNumbers, bonusNumber, expectedRsult) => {
      const lottoRanks = App.calculLottoResult({
        lottos,
        winNumbers,
        bonusNumber,
      });
      expect(lottoRanks).toStrictEqual(expectedRsult);
    }
  );

  test("당첨 내역 출력", () => {
    const logSpy = getLogSpy();
    App.printLottoResult([1, 1, 1, 1, 1]);
    const answers = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    answers.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("수익률 출력", () => {
    const logSpy = getLogSpy();
    App.printRateOfIncome([0, 0, 0, 0, 1], 8000);
    const answer = "총 수익률은 62.5%입니다.";
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer));
  });
});
