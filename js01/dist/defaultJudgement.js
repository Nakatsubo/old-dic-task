//点数を入力する
let exam = {
  japanese: 50,
  math: 60,
  science: 100
};
//成績を出力する
const judgement = () => {
  //点数を合計する
  const sums = (japanese, math, science) => {
    return japanese + math + science;
  };
  const sum = sums(exam.japanese, exam.math, exam.science);
  //成績判定をする
  const grades = () => {
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
  const grade = grades();
  //合否判定をする
  const judge = exam.japanese < 60 || exam.math < 60 || exam.science < 60 ? "不合格" : "合格";
  //成績を出力する
  console.log(`あなたの成績は${grade}です。${judge}です！`);
}
judgement();
//# sourceMappingURL=maps/defaultJudgement.js.map
