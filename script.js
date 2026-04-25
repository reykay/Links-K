function copiarPix() {
  navigator.clipboard.writeText("46991416144");

  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}