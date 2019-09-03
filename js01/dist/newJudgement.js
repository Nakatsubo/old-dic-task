const points = [60,100,80,80,70,80];
const number = points.length;

const get_achievement = (points) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += points[i];
  }
  //console.log(sum);

  if (sum >= 100*number*0.8) {
    return "A";
  } else if (sum >= 100*number*0.6) {
    return "B";
  } else if (sum >= 100*number*0.4) {
    return "C";
  } else {
    return "D";
  }
}
//console.log(get_achievement(points));
const achievement = get_achievement(points);

const get_pass_or_failure = (points) => {
  let judge = "合格";
  for (let i = 0; i < number; i++) {
    if (points[i] < 60) {
      judge = "不合格";
      break;
    }
  }
  return judge;
}
//console.log(get_pass_or_failure(points));
const pass_or_failure = get_pass_or_failure(points);

const judgement = () => {
  return achievement === "A" &&  pass_or_failure === "合格" ? "最高です！" : `あなたの成績は${achievement}です。${pass_or_failure}です!`;
}
console.log(judgement());

//# sourceMappingURL=maps/newJudgement.js.map
