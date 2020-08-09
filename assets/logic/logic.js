$(document).ready(function () {
  // Declare html variables
  const $highScores = $(".highscores");
  const $timer = $(".timer");
  const $top = $(".top");
  const $response = $(".response");
  const $answers = $(".answers");
  const $qButton = $(".q-btn");
  const $hsLabel = $(".high-score-label");
  const $name = $(".high-score-input");
  const $hsButton = $(".hs-btn");

  // Declare empty variables for tracking during the quiz
  let qIndex;
  let time;
  let correctAnswers;
  let timer;
  let highscores = [];

  // Initialize the quiz by checking if there is locally stored quiz data
  function init() {
    var storedHighScores = JSON.parse(localStorage.getItem("highscores"));

    if (storedHighScores !== null) {
      highscores = storedHighScores;
    }
  }

  // Method to start the timer
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

  // Method to stop the timer
  function stopTimer() {
    time = 0;
    if (timer) {
      clearInterval(timer);
    }
  }

  // Method to display the finish page
  function displayFinishPage() {
    resetContent();
    $hsLabel.css("display", "block");
    $hsButton.css("display", "inline-block");
    $qButton.css("display", "none");
    $response.css("backgroundColor", "transparent");
    $top
      .text(
        `Congratulations on completing the coding quiz! You got ${correctAnswers} questions correct out of 10.`
      )
      .css("font-size", "20px");
  }

  // Method to display the high scores
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

  // Method to render questions with their answers on the page
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

  // Method to reset the content upon a transition
  function resetContent() {
    $top.empty();
    $answers.empty();
    $response.empty();
  }

  // Event listener to handle displaying high scores when the nav link is clicked
  $highScores.on("click", function () {
    stopTimer();
    displayHighScores();
  });

  // Event listener to handle event delegation for answer selection
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
      $response.css("backgroundColor", "green");
    } else {
      $response.text("Wrong!");
      time -= 5;
      $(this).css("backgroundColor", "red");
      $response.css("backgroundColor", "red");
    }
    $qButton.text("Next question!");
    $qButton.css("display", "inline-block");
  });

  // Event listener to handle movement to the next question
  $qButton.on("click", function () {
    qIndex++;
    renderQuestions();
    $qButton.css("display", "none");
    $response.css("backgroundColor", "transparent");
  });

  // Event listener to handle the submission of a new high score
  $hsButton.on("click", function () {
    let userName = $name.val();
    highscores.push({
      name: userName,
      score: correctAnswers,
    });
    localStorage.setItem("highscores", JSON.stringify(highscores));
    displayHighScores();
  });

  // 
  $top.on("click", function () {
    if ($top.text() !== "Click here to start a new quiz") {
      return
    }
    qIndex = 0;
    correctAnswers = 0;
    time = 12;
    renderQuestions();
    startTimer();
  });

  init();
});
