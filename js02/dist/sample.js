window.addEventListener('DOMContentLoaded', () => {

  const judgementFunc = () => {
    let national_language = Number(document.getElementById('national_language').value);
    let english = Number(document.getElementById('english').value);
    let mathematics = Number(document.getElementById('mathematics').value);
    let science = Number(document.getElementById('science').value);
    let society = Number(document.getElementById('society').value);
    let subject_points = [
      national_language,
      english,
      mathematics,
      science,
      society
    ];

    const input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
      input[i].dataset.number = i;
      input[i].addEventListener('change', score_indicate, false);
    }
    function score_indicate(event) {
      subject_points[this.dataset.number] = Number(event.target.value);

      let sum = 0;
      let sum_indicate = document.getElementById('sum_indicate');
      let average_indicate = document.getElementById('average_indicate')
      for (let i = 0; i < subject_points.length; i++) {
        sum += subject_points[i];
      }

      let average = 0;
      sum_indicate.textContent = sum;
      average = sum / subject_points.length;
      average_indicate.textContent = average;

      const get_achievement = (average) => {
        const btnEvaluation = document.getElementById('btn-evaluation');
        const evaluation = document.getElementById('evaluation');
        let achievement = "";
        if (average >= 100 * 0.8) {
          achievement = "A";
        } else if (average >= 100 * 0.6) {
          achievement = "B";
        } else if (average >= 100 * 0.4) {
          achievement = "C";
        } else {
          achievement = "D";
        }

        btnEvaluation.addEventListener('click', () => {
          evaluation.textContent = achievement;
        }, false)
        return achievement;
      }
      const achievement = get_achievement(average);

      const get_pass_or_failure = (subject_points) => {
        const btnJudge = document.getElementById('btn-judge');
        const judge = document.getElementById('judge');
        let pass_or_failure = "合格";
        for (let i = 0; i < subject_points.length; i ++) {
          if (subject_points[i] < 60) {
            pass_or_failure = "不合格";
            break;
          }
        }
        btnJudge.addEventListener('click', () => {
          judge.textContent = pass_or_failure;
        }, false)
        return pass_or_failure;
      }
      const pass_or_failure = get_pass_or_failure(subject_points);

      const judgement = (achievement, pass_or_failure) => {
        const btnDeclaration = document.getElementById('btn-declaration');
        const declaration = document.getElementById('declaration');
        let result = `あなたの成績は${achievement}です。${pass_or_failure}です`
        btnDeclaration.addEventListener('click', () => {
          declaration.textContent = result;
          declaration.style.display = "inline-flex";
        }, false)
        return result;
      }
      judgement(achievement, pass_or_failure);
    }
  }
  judgementFunc();

}, false)
//# sourceMappingURL=maps/sample.js.map
