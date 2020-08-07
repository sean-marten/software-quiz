$(document).ready(function () {
    const $highSores = $(".highscores");
  const $timer = $(".timer");
  const $start = $(".start");
  const $response = $(".response");
  const $container = $(".container");
  const $button = $(".btn");
  let qIndex = 0;
  let time = 60;
  let correctAnswers = 0;

  function startTimer(stop) {
      if (stop) {
          return
      }
    timer = setInterval(function () {
      if (time === 0) {
displayFinishPage()
        return;
      }
      $timer.text("Timer: " + (time - 1));
      time--;
    }, 1000);

  }

  function displayFinishPage() {

  }

  function displayHighScores() {
      
  }

  function renderQuestions() {
    $container.html("");
    $response.html("");
    const $li = $("<li>").text(questions[qIndex].questionText);
    $container.append($li).attr("q-index", qIndex);
    for (j = 0; j < questions[qIndex].answers.length; j++) {
      const $li = $("<li>")
        .text(questions[qIndex].answers[j].text)
        .addClass("answer")
        .attr("a-index", j);
      $container.append($li);
    }
  }

  $highSores.on('click', function(){
      startTimer(true);
      displayHighScores();
  })

  $container.on("click", ".answer", function (e) {
    var ind = $(this).attr("a-index");
    if (questions[qIndex].answers[ind].correct) {
      $response.text("Correct!");
      correctAnswers++;
    } else {
      $response.text("Wrong.");
    }
    $button.prop("disabled", false);
  });

  $button.on("click", function () {
    qIndex++;
    renderQuestions();
  });

  $start.on("click", function() {
      $(this).html("");
      $button.text("click me");
  $button.attr("disabled", true);
      renderQuestions();
      startTimer(false);
  })
});
