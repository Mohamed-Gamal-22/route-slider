var images = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".lightBoxContainer");
var close = document.querySelector("#close");
var lightBox = document.querySelector(".lightBox");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");

var currentIndex;

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    lightBoxContainer.classList.replace("d-none", "d-flex");

    var mySrc = e.target.getAttribute("src");
    lightBox.style.backgroundImage = `url(${mySrc})`;

    currentIndex = images.indexOf(e.target);
  });
}

function slide(step) {
  // 1, -1
  currentIndex += step;

  if (currentIndex == images.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  var mySrc = images[currentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${mySrc})`;
}

next.addEventListener("click", function () {
  slide(1);
});

prev.addEventListener("click", function () {
  slide(-1);
});

// next.addEventListener("click", function () {
//   currentIndex++;

//   if (currentIndex == images.length) {
//     currentIndex = 0;
//   }

//   var mySrc = images[currentIndex].getAttribute("src");
//   lightBox.style.backgroundImage = `url(${mySrc})`;
// });

// prev.addEventListener("click", function () {
//   currentIndex--;

//   if (currentIndex < 0) {
//     currentIndex = images.length - 1;
//   }

//   var mySrc = images[currentIndex].getAttribute("src");
//   lightBox.style.backgroundImage = `url(${mySrc})`;
// });

close.addEventListener("click", function () {
  lightBoxContainer.classList.replace("d-flex", "d-none");
});
