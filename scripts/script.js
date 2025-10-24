
const carousel = document.querySelector('main section ul');
const items = carousel.querySelectorAll('li');
const totalItems = items.length;
const tracker = document.querySelector('main section p');

// Function to update tracker
function updateTracker() {
  const containerCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

  let closestIndex = 0;
  let closestDistance = Infinity;

  items.forEach((item, index) => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const distance = Math.abs(containerCenter - itemCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  tracker.textContent = `${closestIndex + 1} / ${totalItems}`;
}

// Update on scroll
carousel.addEventListener('scroll', updateTracker);

// Initialize
updateTracker();
