function changePage(page, newTab = false) {
  if (newTab) {
    window.open(page, "_blank");
  } else window.location.href = page;
}

function onSendEmail() {
  const subject = `Portfolio mail from ${
    document.getElementById("conName").value
  } ${document.getElementById("conLName").value} about ${
    document.getElementById("conService").value
  }`;

  const to = "anthonycavuoti@gmail.com";

  const body = `Name: ${document.getElementById("conName").value} ${
    document.getElementById("conLName").value
  }\nEmail: ${document.getElementById("conEmail").value}\nService: ${
    document.getElementById("conService").value
  }\nMessage: ${document.getElementById("conMessage").value}`;

  sendEmail(subject, to, body);
}

function sendEmail(subject, to, body) {
  // Encode subject and body to ensure special characters are handled properly
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Create the mailto link
  const mailtoLink = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;

  // Open the default mail app with the mailto link
  window.open(mailtoLink, "_blank");
}
