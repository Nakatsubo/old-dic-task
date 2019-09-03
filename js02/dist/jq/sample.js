$(function() {
  $(function judgementFunc() {
    $(function score_indicate() {
      var subject_points = [
        Number($('#national_language').val()),
        Number($('#english').val()),
        Number($('#mathematics').val()),
        Number($('#science').val()),
        Number($('#society').val())
      ];

      var sum = 0;
      /*for (var i = 0; i < subject_points.length; i++) {
        sum += subject_points[i];
      };*/
      sum = subject_points.reduce(function(previous, current) {
        return previous + current;
      })
      $("#sum_indicate").text(sum);

      var average = 0;
      average = sum / subject_points.length;
      $("#average_indicate").text(average);

      $('#national_language, #english, #mathematics, #science, #society').change(function() {
        score_indicate();
      });

      var get_achievement = function() {
        var achievement = "";
        if (average >= 100 * 0.8) {
          achievement = "A";
        } else if (average >= 100 * 0.6) {
          achievement = "B";
        } else if (average >= 100 * 0.4) {
          achievement = "C";
        } else {
          achievement = "D";
        };
        $('#btn-evaluation').on('click', function() {
          $('#evaluation').text(achievement);
        });
        return achievement;
      };
      var achievement = get_achievement();

      var get_pass_or_failure = function() {
        var pass_or_failure = "合格";
        for (let i = 0; i < subject_points.length; i ++) {
          if (subject_points[i] < 60) {
            pass_or_failure = "不合格";
            break;
          };
        };
        $('#btn-judge').on('click', function() {
          $('#judge').text(pass_or_failure);
        });
        return pass_or_failure;
      };
      var pass_or_failure = get_pass_or_failure();

      $(function judgement() {
        let result = `あなたの成績は${achievement}です。${pass_or_failure}です`
        $('#btn-declaration').on('click', function() {
          $('#declaration')
          .text(result)
          .css('display', 'inline-flex');
        });
      });

    });
  });
});
//# sourceMappingURL=../maps/jq/sample.js.map
