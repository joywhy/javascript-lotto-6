import Input from './Input.js';

class LottoGame {
  #purchaseAmount;
  #lottoCount;
  #lottoNumbers;
  #winningLottery;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottoCount = 0;
    this.#lottoNumbers = [];
    this.#winningLottery = [];
  }

  async #init() {
    //구입금액을 입력받는다.
    // 사용자가 구매한 로또 번호와 당첨 번호를 구한다.

    //const {lottoNumbers ,winningLottery} = await Input();
    const purchaseAmout = await Input.getPurchaseAmount();

    //구입 금액에 맞게 로또수를 구한다.

    //로또수를 출력한다.
    //로또수에 맞게 로또번호를 구한다.
    //로또수에 맞는 로또 번호를 출력한다.

    //당첨 번호를 입력한다. (당첨번호 6자리+ 보너스번호)
  }
  async play() {
    //구입금액과 당첨번호를 입력받는다.
    await this.#init();
    //당첨내역을 계산한다.

    //수익률을 계산한다.
  }
}
export default LottoGame;