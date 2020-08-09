$(document).ready(function () {
  const $highScores = $(".highscores");
  const $timer = $(".timer");
  const $start = $(".start");
  const $container = $(".container");
  const $response = $(".response");
  const $question = $(".question");
  const $answers = $(".answers");
  const $qButton = $(".q-btn");
  const $hsLabel = $(".high-score-label");
  const $name = $(".high-score-input");
  const $hsButton = $(".hs-btn");
  let qIndex;
  let time;
  let correctAnswers;
  let highscores = [
    {
      name: "sean",
      score: 10,
    },
    {
      name: "ay",
      score: 2,
    },
    {
      name: "poo",
      score: 22,
    },
  ];

  function startTimer() {
    timer = setInterval(function () {
      $timer.text("Timer: " + time);
      if (time === 0) {
        stopTimer();
        displayFinishPage();
        return;
      }
      time--;
    }, 1000);
  }

  function stopTimer() {
    time = 0;
    clearInterval(timer);
  }

  function displayFinishPage() {
    resetContent();
    $hsLabel.css("display", "block");
    $hsButton.css("display", "inline-block");
    $question
      .text(
        `Congratulations on completing the coding quiz! You got ${correctAnswers} questions correct out of 10.`
      )
      .css("font-size", "20px");
  }

  function displayHighScores() {
    $start.text("Click here to start a new quiz");
    resetContent();
    $qButton.css("display", "none");
    $hsButton.css("display", "none");
    $hsLabel.css("display", "none");
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
    for (let i = 0; i < highscores.length; i++) {
      const $li = $("<li>")
        .addClass("list-items")
        .text(i + 1 + highscores[i].name + highscores[i].score);
      $answers.append($li);
    }
  }

  function renderQuestions() {
    if (qIndex < questions.length) {
      resetContent();
      const $p = $("<p>").text(questions[qIndex].questionText);
      $question.append($p).attr("q-index", qIndex);
      for (j = 0; j < questions[qIndex].answers.length; j++) {
        const $li = $("<li>")
          .text(questions[qIndex].answers[j].text)
          .addClass("answer")
          .addClass("list-items")
          .attr("a-index", j);
        $answers.append($li);
      }
    } else {
      stopTimer();
      displayFinishPage();
    }
  }

  function resetContent() {
    $question.empty();
    $answers.empty();
    $response.empty();
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
    $qButton.text("Next question!");
    $qButton.css("display", "inline-block");
  });

  $qButton.on("click", function () {
    qIndex++;
    renderQuestions();
    $qButton.css("display", "none");
  });

  $hsButton.on("click", function () {
    let userName = $name.val();
    highscores.push({
      name: userName,
      score: correctAnswers,
    });
    displayHighScores();
  });

  $start.on("click", function () {
    qIndex = 0;
    correctAnswers = 0;
    time = 60;
    $(this).html("");
    renderQuestions();
    startTimer();
  });
});
