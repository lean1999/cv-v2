// animetion
var typed = new Typed(".typing", {
  strings: ["Wed Desigrer", "Wed Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

//
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  console.log(navList[i]);
}
