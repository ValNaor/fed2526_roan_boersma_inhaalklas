if (window.location.pathname.endsWith('detail.html')) {
  const carousel = document.querySelector('main section ul');
  const items = carousel?.querySelectorAll('li');
  const tracker = document.querySelector('main section p');

  if (carousel && items && tracker) {
    const totalItems = items.length;

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
  }
}



// p styling voor carasousel items in sale

document.querySelectorAll('main section:nth-child(5) ul li a, main section:nth-child(4) ul li a, main section:nth-child(6) ul li a, main section:nth-child(7) ul li a').forEach(a => {
  const ps = a.querySelectorAll('p');

  if (ps.length > 3) {
    const deal = getComputedStyle(document.documentElement)
                    .getPropertyValue('--color-deal-label');

    ps[0].style.color = deal;  
    ps[2].style.color = deal;  
    
    ps[0].style.fontWeight = '600';
    ps[2].style.fontWeight = '600';
  }
});





// Labels

const sections = [4, 5, 6, 7];

sections.forEach(sectionNum => {

  const lis = document.querySelectorAll(`main section:nth-child(${sectionNum}) ul li`);

  lis.forEach((li, liIndex) => {
    li.style.position = 'relative'; 

    const img = li.querySelector('a img'); 
    if (!img) return;
    const parentAnchor = `--carousel-${sectionNum}-img-${liIndex + 1}`;
    img.style.setProperty('anchor-name', parentAnchor);

    const labels = Array.from(li.querySelectorAll('p')).filter(p => !p.closest('a'));
    if (!labels.length) return; 

    labels.sort((a, b) => b.textContent.trim().length - a.textContent.trim().length);

    labels.forEach((p, labelIndex) => {

      p.classList.add('label', p.textContent.trim().toLowerCase() === 'deal' ? 'label-deal' : 'label-rest');

   
      const labelAnchor = `${parentAnchor}-label-${labelIndex + 1}`;
      p.style.setProperty('anchor-name', labelAnchor);
      p.style.position = 'absolute'; 

      if (labelIndex === 0) {
        
        p.style.setProperty('position-anchor', `${parentAnchor}`);
        p.style.bottom = 'calc(anchor(bottom) + 1em)';
      } else {
        
        const prevLabel = `${parentAnchor}-label-${labelIndex}`;
        p.style.setProperty('position-anchor', `${prevLabel}`);
        p.style.bottom = 'calc(anchor(top) + 0.5em)';
      }
    });
  });
});

// bronnen voor  deze code

// ARRAY METHODS
// https://www.youtube.com/watch?v=R8rmfD9Y5-c
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion





// andere foto voor index html section 8 

if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  const img = document.querySelector("main section:nth-child(8) img");

  function updateImage() {
    if (window.matchMedia("(min-width: 1100px)").matches) {
      img.src = "../images/homepage_section_7_image_1_desktop.webp";
    } else {
      img.src = "../images/homepage_section_7_image_1.jpg";
    }
  }

  updateImage();
  window.addEventListener("resize", updateImage);
}





// footer buttons

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("footer button");

  buttons.forEach((button) => {
    const list = button.parentElement.querySelector("ul"); // safer selection

    if (!list) return; // skip if no list found

    const baseName = button.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    const listId = `footer-list-${baseName}`;

    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", listId);
    list.id = listId;
    list.hidden = true;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const newState = !isExpanded;

      button.setAttribute("aria-expanded", newState);
      list.hidden = !newState;
    });
  });
});


// https://www.youtube.com/watch?v=Nloq6uzF8RQ&t=67s
// https://www.youtube.com/watch?v=WJERnXiFFug
