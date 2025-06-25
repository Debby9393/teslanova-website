
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const loader = document.getElementById("loader");
  const message = document.getElementById("confirmationMessage");
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");
    message.classList.remove("hidden");
    this.reset();
  }, 2000);
});
