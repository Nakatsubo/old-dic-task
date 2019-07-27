const get_achievement = (x, y, z) => {
  const sum = x + y + z;
  if (sum >= 250 && sum <= 300) {
    return "A";
  } else if (sum >= 200 && sum <= 249) {
    return "B";
  } else if (sum >= 100 && sum <= 199) {
    return "C";
  } else {
    return "D";
  }
}
//console.log(get_achievement(60, 100, 40));
const achievement = get_achievement(60, 100, 40);

const get_pass_or_failure = (x,y,z) => {
  return x < 60 || y < 60 || z < 60 ? "不合格" : "合格";
}
//console.log(get_pass_or_failure(60, 100, 40));
const pass_or_failure = get_pass_or_failure(60, 100, 40);

const judgement = () => {
  return achievement === "A" &&  pass_or_failure === "合格" ? "最高です！" : `あなたの成績は${achievement}です。${pass_or_failure}です!`;
}
console.log(judgement());
//# sourceMappingURL=maps/judgement.js.map
