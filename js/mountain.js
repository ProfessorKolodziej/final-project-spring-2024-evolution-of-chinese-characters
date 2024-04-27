// Define image array
let images = [
  { img: 'mountain-1.png', name: 'Oracle Bone<br> 1600 BC to 1100 BC' },
  { img: 'mountain-2.png', name: 'Bronze<br> 1000 BC to 200 BC' },
  { img: 'mountain-3.png', name: 'Small Seal<br> 221 BCE to 209 BCE' },
  { img: 'mountain-4.png', name: 'Clerical<br> 206 BCE to 220 CE' },
  { img: 'mountain-5.png', name: 'Regular<br> 200 CE to Present' },
  { img: 'mountain-6.png', name: 'Simplified<br> 1956 to Present' }]
// Define current avlue
let currentIndex = 0

// Get Left / Right Elements
let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")
let showList = document.querySelector(".show-list")
let currentTip = document.querySelector(".mountain-tip")
let currentName = document.querySelector(".mountain-name")
let currentImage = document.querySelector(".mountain-img")

window.onload = function () {
  createWater()
}

// Previous button click event
prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  createWater()
})

// Next button click event
nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length
  createWater()
})

function createWater () {
  currentName.innerHTML = images[currentIndex].name
  currentImage.src = `images/${images[currentIndex].img}`
  if (currentIndex == 0) {
    showList.classList.add("active")
    currentTip.style.display = "block"
    prevBtn.style.display = "none"
  } else {
    showList.classList.remove("active")
    currentTip.style.display = "none"
    prevBtn.style.display = "block"
  }
  nextBtn.style.display = currentIndex == images.length - 1 ? "none" : "block"
}
