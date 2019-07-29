let points = [60,100,80,80,70,80];
let number = points.length;

const judgement = () => {

  const get_achievement = () => {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += points[i];
    }
    //console.log(sum);
    if (sum >= number * 100 * 0.8) {
      return "A";
    } else if (sum >= number * 100 * 0.6) {
      return "B";
    } else if (sum >= number * 100 * 0.4) {
      return "C";
    } else {
      return "D";
    }
  }
  //console.log(get_achievement());
  const achievement = get_achievement();

  const get_pass_or_failure = () => {
    let judge = "合格";
    for (let i = 0; i < number; i++) {
      if (points[i] < 60) {
        judge = "不合格";
        break;
      }
    }
    return judge;
  };
  //console.log(get_pass_or_failure());
  const pass_or_failure = get_pass_or_failure();

  return (get_achievement === "A" && pass_or_failure === "合格") ? "最高です！" : `あなたの成績は${achievement}です。${pass_or_failure}です`;
}
console.log(judgement());

//# sourceMappingURL=maps/reviewJudgement02.js.map
