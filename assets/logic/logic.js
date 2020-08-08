$(document).ready(function () {
  const $highSores = $(".highscores");
  const $timer = $(".timer");
  const $start = $(".start");
  const $response = $(".response");
  const $question = $(".question");
  const $answers = $(".answers");
  const $button = $(".btn");
  let qIndex = 0;
  let time = 60;
  let correctAnswers = 0;

  function startTimer(stop) {
    if (stop) {
      return;
    }
    timer = setInterval(function () {
      if (time === 0) {
        displayFinishPage();
        return;
      }
      $timer.text("Timer: " + (time - 1));
      time--;
    }, 1000);
  }

  function displayFinishPage() {}

  function displayHighScores() {}

  function renderQuestions() {
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
  }

  $highSores.on("click", function () {
    startTimer(true);
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
    startTimer(false);
  });
});
