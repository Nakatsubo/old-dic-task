let points = [60,100,80,80,70,80];
let number = points.length;

const get_achievement = () => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += points[i];
  }
  console.log(sum);
}
get_achievement();
//# sourceMappingURL=maps/reviewJudgemen03.js.map
