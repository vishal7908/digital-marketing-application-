document.getElementById("openFormBtn").addEventListener("click", function () {
  document.getElementById("contactFormPopup").style.display = "block";
});

document.getElementById("closeFormBtn").addEventListener("click", function () {
  document.getElementById("contactFormPopup").style.display = "none";
});

window.onclick = function (event) {
  if (event.target == document.getElementById("contactFormPopup")) {
    document.getElementById("contactFormPopup").style.display = "none";
  }
};
