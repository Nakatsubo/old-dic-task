// 成績の出力
const judgement = () => {
  // 点数の取得
  let points = [100,100,100,100,100,50]; // 点数は可変するので、letで記述する。
  let number = points.length;
  //console.log(points);

  // 成績の判定
  const get_achievement = () => {
    // 点数の合計
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += points[i];
    }
    //console.log(sum);
    if (sum > 100 * number * 0.8) {
      return judge = "A";
    } else if (sum > 100 * number * 0.6) {
      return judge = "B";
    } else if (sum > 100 * number * 0.4) {
      return judge = "C";
    } else {
      return judge = "D";
    }
  }
  //console.log(get_achievement());
  const achievement = get_achievement();

  // 合否の判定
  const get_pass_or_failure = () => {
    let judge = "合格";
    for (let i = 0; i < number; i++) {
      if (points[i] < 60) {
        judge = "不合格"; // returnすると一回で処理が終了してしまう
        break; // judge = "不合格";が成立したら処理を終了させる
      }
    }
    return judge;
  };
  //console.log(get_pass_or_failure());
  const pass_or_failure = get_pass_or_failure();

  return (achievement === "A" && pass_or_failure === "合格") ? console.log("最高です！") : console.log(`あなたの成績は${achievement}です。${pass_or_failure}です`);
}

judgement();

//# sourceMappingURL=maps/reviewJudgement.js.map
