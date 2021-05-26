document.querySelector("button").addEventListener("click", () => {
  console.log(document.getElementById("search").value);
  let link = document.getElementById("search").value;
  document.querySelector(".insert p").innerHTML =
    document.getElementById("search").value;

  window.location.href(link);
});
