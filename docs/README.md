# 🎱로또 게임 기능 구현 목록

## ❗요구 사항

- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.

## ❗요구 사항 기능 목록

### 로또 (Lotto.js)

- [x] 당첨은 1등부터 5등까지 있다

### 컴퓨터 (App.js)

- [ ] 로또 번호의 범위는 1~45의 중복되지 않는 6개의 숫자 선택
- [ ] (로또 구입 금액 입력시) 금액 만큼 로또 발행 (로또 번호는 오름차순으로 정렬하여 보여준다.)
- [ ] 로또 1장의 가격은 1,000원이다
- [ ] 당첨 내역출력
- [ ] 수익률을 출력하고 게임 종료 (수익률은 소수점 둘째 자리에서 반올림한다)

### 유저 입력 (Input.js)

- [ ] 로또 구입 금액 입력
  - [x] (에러) 
    1. 숫자가 아닌 경우 재입력 (공백은 앞,뒤만 허용) 1️⃣
    2. 금액을 입력하지 않을 경우 재입력 ("" 입력시) 2️⃣
    3. 1,000원으로 나누어 떨어지지 않는 경우 예외 처리후 재입력
- [ ] 당첨 번호를 입력받는다 (번호는 쉼표(,)를 기준으로 구분한다.)
  - [x] (에러) 
    1. 숫자가 아닌 경우 재입력 (공백은 앞,뒤만 허용) 1️⃣
    2. 금액을 입력하지 않을 경우 재입력 ("" 입력시) 2️⃣
    3. 숫자 범위가 1 ~ 45가 아닌 경우 3️⃣
    4. 중복이 있을 경우 재입력 4️⃣
- [ ] 보너스 번호를 입력받는다
  - [x] (에러)
    1. 숫자가 아닌 경우 재입력 (공백은 앞,뒤만 허용) 1️⃣
    2. 금액을 입력하지 않을 경우 재입력 ("" 입력시) 2️⃣
    3. 숫자 범위가 1 ~ 45가 아닌 경우 3️⃣
    4. 중복이 있을 경우 재입력 4️⃣

## ❗테스트 리스트 목록

### 유저 입력 (Input.js)

- [ ] 로또 금액 입력
  - [x] 에러 테스트
- [ ] 당첨 번호 입력
  - [x] 에러 테스트
- [ ] 보너스 번호 입력
  - [x] 에러 테스트

### 로또 (Lotto.js)

- [x] 입력받은 값을 통해 1~5등인지 확인

### 컴퓨터 (App.js)

- [ ] 중복되지 않는 무작위 번호 6개 선택
- [ ] 금액 만큼 로또를 발행
- [ ] 당첨 내역 출력
- [ ] 수익률 계산 및 출력