$(document).ready(function () {
    let $response = $(".response");
  let $container = $(".container");
  const $button = $(".btn");
  let qIndex = 0;
  renderQuestions(0);
  $button.attr('disabled', true);

  function renderQuestions() {
      $container.html("");
      $response.html("");
    const $li = $("<li>").text(questions[qIndex].questionText);
    $container.append($li).attr('q-index', qIndex);
    for (j = 0; j < questions[qIndex].answers.length; j++) {
      const $li = $("<li>").text(questions[qIndex].answers[j].text).addClass('answer').attr('a-index', j);
      $container.append($li);
    }
  }

  $container.on('click', '.answer', function(e){
      var ind = $(this).attr('a-index');
      if (questions[qIndex].answers[ind].correct) {
        $response.text("Correct!")
      } else {
        $response.text("Wrong.")
      }
        $button.prop('disabled', false)
  })

  $button.on('click', function() {
      qIndex++;
      renderQuestions();
  })
});
