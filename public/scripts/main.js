
$("#mySearch").on("input", () => {
    $("#clearBtn").css("display", $("#mySearch").val() ? "inline" : "none");
});

$("#clearBtn").on("click", function () {
    $("#mySearch").val("").focus();
    $("#clearBtn").css("display", "none");
});

$("#mySearch").focus(()=>{
    $(".form-inline").addClass("custom-focus-on");
});

$("#mySearch").focusout(()=>{
    $(".form-inline").removeClass("custom-focus-on");
});

/*
$("button.nav-link").hover(
    function () {
      $(this).addClass("custom-active");                // Add only to hovered button
    },
    function () {
      $(this).removeClass("custom-active");             // Optional: remove on hover out
    }
  );*/