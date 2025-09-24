//your code here
// 5 unique images
const images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/",
  "https://picsum.photos/200/300.jpg"
];

const container = document.getElementById('title-img');
const resetBtn = document.getElementById('reset');
const verifyBtn = document.getElementById('verify');
const para = document.getElementById('para');
let selected = [];

// Create 6 images (one duplicate) and shuffle
function loadImages() {
  container.innerHTML = '';
  para.textContent = '';
  selected = [];
  resetBtn.style.display = 'none';
  verifyBtn.style.display = 'none';

  let temp = [...images];
  temp.push(temp[Math.floor(Math.random() * temp.length)]); // add duplicate
  temp.sort(() => Math.random() - 0.5); // shuffle

  temp.forEach((src, index) => {
  const img = document.createElement('img');
  img.src = src;
  img.className = 'img-1 img' + (index + 1); // adds img1, img2, etc.
  img.onclick = () => selectImg(img);
  container.appendChild(img);
});

}

// Handle image selection
function selectImg(img) {
  if (selected.includes(img) || selected.length >= 2) return;
  img.classList.add('selected');
  selected.push(img);

  if (selected.length >= 1) resetBtn.style.display = 'inline-block';
  if (selected.length === 2) verifyBtn.style.display = 'inline-block';
}

// Reset everything
resetBtn.onclick = () => loadImages();

// Verify the selection
verifyBtn.onclick = () => {
  if (selected.length === 2) {
    if (selected[0].src === selected[1].src) {
      para.textContent = "You are a human. Congratulations!";
    } else {
      para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    verifyBtn.style.display = 'none';
  }
}

// Initialize
loadImages();
