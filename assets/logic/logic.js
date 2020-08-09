$(document).ready(function () {
  const $highScores = $(".highscores");
  const $timer = $(".timer");
  const $top = $(".top");
  const $response = $(".response");
  const $answers = $(".answers");
  const $qButton = $(".q-btn");
  const $hsLabel = $(".high-score-label");
  const $name = $(".high-score-input");
  const $hsButton = $(".hs-btn");
  let qIndex;
  let time;
  let correctAnswers;
  let timer;
  let highscores = [];

  function init() {
    var storedHighScores = JSON.parse(localStorage.getItem("highscores"));

    if (storedHighScores !== null) {
      highscores = storedHighScores;
    }
  }

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
    console.log(timer);
    if (timer) {
      console.log("why am i trying to do this");
      clearInterval(timer);
    }
  }

  function displayFinishPage() {
    resetContent();
    $hsLabel.css("display", "block");
    $hsButton.css("display", "inline-block");
    $top
      .text(
        `Congratulations on completing the coding quiz! You got ${correctAnswers} questions correct out of 10.`
      )
      .css("font-size", "20px");
  }

  function displayHighScores() {
    resetContent();
    $top.text("Click here to start a new quiz");
    $qButton.css("display", "none");
    $hsButton.css("display", "none");
    $hsLabel.css("display", "none");
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
    const $li = $("<li>")
      .addClass("list-items text-center")
      .css("text-align", "center")
      .css("backgroundColor", "orchid")
      .text("Highscores");
    $answers.append($li);
    for (let i = 0; i < highscores.length; i++) {
      const $li = $("<li>")
        .addClass("list-items")
        .text(`${highscores[i].score} - ${highscores[i].name}`);
      $answers.append($li);
    }
  }

  function renderQuestions() {
    if (qIndex < questions.length) {
      resetContent();
      const $p = $("<p>").text(questions[qIndex].questionText);
      $top.append($p).attr("q-index", qIndex);
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
    $top.empty();
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
      time -= 5;
      $(this).css("backgroundColor", "red");
    }
    $qButton.text("Next question!");
    $qButton.css("display", "inline-block");
    $response.css("backgroundColor", "aquamarine");
  });

  $qButton.on("click", function () {
    qIndex++;
    renderQuestions();
    $qButton.css("display", "none");
    $response.css("backgroundColor", "transparent");
  });

  $hsButton.on("click", function () {
    let userName = $name.val();
    highscores.push({
      name: userName,
      score: correctAnswers,
    });
    localStorage.setItem("highscores", JSON.stringify(highscores));
    displayHighScores();
  });

  $top.on("click", function () {
    qIndex = 0;
    correctAnswers = 0;
    time = 120;
    renderQuestions();
    startTimer();
  });

  init();
});
