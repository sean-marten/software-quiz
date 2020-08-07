$(document).ready(function () {
    let $response = $(".response");
  let $container = $(".container");
  const $button = $(".btn");
  let index = 0;
  renderQuestions(0);
  $button.attr('disabled', true);

  function renderQuestions(index) {
      $container.html("");
    const $li = $("<li>").text(questions[index].questionText);
    $container.append($li).attr('data-index', index);
    for (j = 0; j < questions[index].answers.length; j++) {
      const $li = $("<li>").text(questions[index].answers[j].text).addClass('answer');
      $container.append($li);
    }
  }

  $container.on('click', '.answer', function(){
        $response.text("you clicked")
        $button.prop('disabled', false)
  })

  $button.on('click', function() {
  })
});
