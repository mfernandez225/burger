// Getting the burger name from the user
$(() => {
  $("form").on("submit", event => {
    event.preventDefault();
    if ($("#burgerName").val() === "") {
      alert("Gimme a burger name!!!")
    } else {
      $.post("/burgers", {
        burger_name: $("#burgerName").val()
      }).then(() => {
        location.reload()
      })
    }
  })

  $(".devourButton").on("click", function () {
    const burgerId = $(this).data("id")
    $.ajax(`/burgers/${burgerId}`, {
      method: "PUT",
      data: {
        devoured: 1
      }
    }).then(function () {
      location.reload();
    })
  })
})
