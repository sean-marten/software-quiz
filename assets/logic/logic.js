$(document).ready(function () {
  const $highScores = $(".highscores");
  const $timer = $(".timer");
  const $start = $(".start");
  const $container = $(".container");
  const $response = $(".response");
  const $question = $(".question");
  const $answers = $(".answers");
  const $button = $(".btn");
  let qIndex = 0;
  let time = 59;
  let correctAnswers = 0;
  let highscores = [
    {
      name: 'sean',
      score: 10,
    },
    {
      name: 'ay',
      score: 2,
    },
    {
      name: 'poo',
      score: 22,
    }
  ];

  function timerFunction() {
    timer = setInterval(function () {
      $timer.text("Timer: " + (time));
      if (time === 0) {
        displayFinishPage();
        return;
      }
      time--;
    }, 1000);
  }

  function stopTimer() {
        time = 0;
  }

  function displayFinishPage() {}

  function displayHighScores() {
    $start.text("Click here to start a new quiz");
    $question.empty();
    $answers.empty();
    $response.empty();
    $button.css('display', 'none');
    highscores.sort(function(a,b) {
      return b.score-a.score;
    })
    for (let i = 0; i < highscores.length; i++) {
      const $li = $("<li>").addClass("answer")
        .text((i+1) + highscores[i].name + highscores[i].score);
      $answers.append($li);
    }
  }

  function renderQuestions() {
    if (qIndex < questions.length) {
      $question.empty();
      $answers.empty();
      $response.empty();
      const $p = $("<p>").text(questions[qIndex].questionText);
      $question.append($p).attr("q-index", qIndex);
      for (j = 0; j < questions[qIndex].answers.length; j++) {
        const $li = $("<li>")
          .text(questions[qIndex].answers[j].text)
          .addClass("answer")
          .attr("a-index", j);
        $answers.append($li);
      }
    } else {
      stopTimer();
      displayFinishPage();
    }
  }

  $highScores.on("click", function () {
    stopTimer();
    displayHighScores();
  });

  $answers.on("click", ".answer", function () {
    var ind = $(this).attr("a-index");
    var answer = questions[qIndex].answers[ind];
    if ($response.text()) {
      return;
    }
    if (answer.correct) {
      $response.text("Correct!");
      correctAnswers++;
      $(this).css("backgroundColor", "green");
    } else {
      $response.text("Wrong.");
      $(this).css("backgroundColor", "red");
    }
    $button.text("Next question!");
    $button.css("display", "block");
  });

  $button.on("click", function () {
    qIndex++;
    renderQuestions();
    $button.css("display", "none");
  });

  $start.on("click", function () {
    $(this).html("");
    renderQuestions();
    timerFunction();
  });
});
