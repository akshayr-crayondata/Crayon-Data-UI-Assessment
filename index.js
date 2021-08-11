function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var emailToReset = "";
var nameForRequest = "";

function captureName(element) {
  checkEmpty(element);
  nameForRequest = element.value;
}

// Email Validation
function validate(emailID) {
  const email = emailID.value;
  const id = emailID.id.toString();

  if (!validateEmail(email)) {
    switch (id) {
      case 'exampleInputEmail1':
        $('#id-email').addClass('wrong-entry');
        break;
      case 'forget-pass-exampleInputEmail1':
        $('#forgot-pass-id-email').addClass('wrong-entry');
        break;
      case 'exampleInput-email':
        $('#id-emailreq').addClass('wrong-entry')
    }
  } else {
    switch (id) {
      case 'exampleInputEmail1':
        $('#id-email').removeClass('wrong-entry');
        break;
      case 'forget-pass-exampleInputEmail1':
        if (email.endsWith('hdfc.com')) {
          emailToReset = email;
          $('#forgot-pass-id-email').removeClass('wrong-entry');
        } else {
          $('#forgot-pass-id-email').addClass('wrong-entry');
        }
        break;
      case 'exampleInput-email':
        if (email.endsWith('hdfc.com')) {
          $('#id-emailreq').removeClass('wrong-entry');
        } else {
          $('#id-emailreq').addClass('wrong-entry');
        }

    }
  }
}

// Check for Empty Content
function checkEmpty(ele) {
  const elementContent = ele.value;
  const id = ele.id.toString();
  switch (id) {
    case "exampleInputPassword1":
      if (elementContent.length == 0) {
        $('#id-pass').addClass('wrong-entry');
      } else {
        $('#id-pass').removeClass('wrong-entry');
      }
      break;
    case "exampleInputEmail1-fullName":
      if (elementContent.length == 0) {
        $('#id-namereq').addClass('wrong-entry');
      } else {
        $('#id-namereq').removeClass('wrong-entry');
      }
      break;
  }
}

// Transitions
$(document).ready(function() {
  $(".login").click(function() {
    emailToReset = "";
    $(".forgot-password").css("display", "none");
    $(".login-page").css("display", "block");
  });
});

$(document).ready(function() {
  $("#sign-in-btn-req").click(function() {
    var nameToInject = "";
    if (nameForRequest.length != 0) {
      nameToInject = nameForRequest;
    }
    $(".inject-name").text(nameToInject);
    $(".request-access").css("display", "none");
    $(".request-message").css("display", "block");
  });
});

$(document).ready(function() {
  $(".request-link").click(function() {
    $(".login-page").css("display", "none");
    $(".request-access").css("display", "block");
  });
});

$(document).ready(function() {
  $(".reset-login").click(function() {
    $(".reset-password").css("display", "none");
    $(".login-page").css("display", "block");
  });
});

$(document).ready(function() {
  $(".request-login").click(function() {
    nameForRequest = "";
    $(".request-message").css("display", "none");
    $(".login-page").css("display", "block");
  });
});

$(document).ready(function() {
  $(".password-lost").click(function() {
    $(".login-page").css("display", "none");
    $(".forgot-password").css("display", "block");
  });
});

$("#resetButton").click(() => {
  var emailMessage = "";
  if (emailToReset.length != 0)
    emailMessage = emailToReset;

  $(".forgot-password").css("display", "none");
  $(".reset-password").css("display", "block");
  $(".inject-email").text(emailMessage);
});

// Clearing input area
$(document).ready(() => {
  $('button').click(() => {
    $('input').val('');
    $('textarea').val('');
    $('input[type=checkbox]').each(function() {
      this.checked = false;
    });
  });
});
