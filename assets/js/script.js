$(function () {
  $(".saveBtn").click(function () {
    var parent = $(this).parent();
    var parentId = parent.attr("id");
    console.log(parentId);
    var enteredText = parent.find("textarea").val();
    console.log(enteredText);
    localStorage.setItem(parentId, enteredText);
  });

  $("div.time-block").each(function () {
    var myId = $(this).attr("id");
    // console.log($(this).attr("id"));
    // console.log($(this).children().eq(1).text(myId));
    var lsItem = localStorage.getItem(myId);
    //console.log(lsItem);
    $(this).children().eq(1).text(lsItem);
    var curHour = parseInt(moment().format("HH"));
    //console.log(curHour);
    var hour = parseInt(myId.substring(5));
    //console.log(hour);

    if (hour < curHour) {
      $(this).addClass("past");
    } else if (hour === curHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
});
