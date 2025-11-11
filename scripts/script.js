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
const mobileQuery = window.matchMedia("(max-width: 764px)");

function setupFooterToggle() {
const buttons = document.querySelectorAll("footer button");

if (!mobileQuery.matches) {
  buttons.forEach((button) => {
    const list = button.parentElement.querySelector("ul");
    if (!list) return;
    button.removeAttribute("aria-expanded");
    list.hidden = false;
  });
  return;
}






// mobiel
buttons.forEach((button) => {
  const list = button.parentElement.querySelector("ul");
  if (!list) return;


  if (!button.hasAttribute("data-toggle-init")) {
    button.setAttribute("aria-expanded", "false");
    list.hidden = true;
    button.dataset.toggleInit = "true";

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const newState = !isExpanded;

      button.setAttribute("aria-expanded", newState);
      list.hidden = !newState;
    });
  }
});

}

setupFooterToggle();
mobileQuery.addEventListener("change", setupFooterToggle);
});



// https://www.youtube.com/watch?v=Nloq6uzF8RQ&t=67s
// https://www.youtube.com/watch?v=WJERnXiFFug


const allLists = document.querySelectorAll('ul');

allLists.forEach(list => {
  const listStyles = window.getComputedStyle(list);
  
  if (listStyles.overflowX === 'scroll' || listStyles.overflowX === 'auto') {
    const likeButtons = list.querySelectorAll('button');

    likeButtons.forEach((button, buttonIndex) => {
      
      if (localStorage.getItem(`liked-${buttonIndex}`) === 'true') {
        button.classList.add('liked');
      }
     
      button.addEventListener('click', () => {
        button.classList.toggle('liked');
        localStorage.setItem(`liked-${buttonIndex}`, button.classList.contains('liked'));
      });
    });
  }
});




// ! buttons

document.addEventListener('DOMContentLoaded', () => {
  const currentPagePath = window.location.pathname;

  // Section 10, index.html
  if (currentPagePath.endsWith('index.html')) {
    const section10 = document.querySelector('section:nth-child(10)');
    if (section10) {
      const openMenuButtons = document.querySelectorAll('button[aria-label="Menu Hoe aanbevelingen werken openen"]');
      openMenuButtons.forEach(button => 
        button.addEventListener('click', () => section10.classList.toggle('visible'))
      );
      section10.querySelectorAll('button').forEach(button => 
        button.addEventListener('click', () => section10.classList.remove('visible'))
      );
    }
  }






  // Section 8, detail.html
  if (currentPagePath.endsWith('detail.html')) {
    const section8 = document.querySelector('section:nth-child(8)');
    if (section8) {
      const openMenuButtons = document.querySelectorAll('button[aria-label="Menu Hoe aanbevelingen werken openen"]');
      openMenuButtons.forEach(button => 
        button.addEventListener('click', () => section8.classList.toggle('visible'))
      );
      section8.querySelectorAll('button').forEach(button => 
        button.addEventListener('click', () => section8.classList.remove('visible'))
      );
    }
  }
});







// Carousel knoppen

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section:nth-of-type(4) ul, section:nth-of-type(5) ul, section:nth-of-type(6) ul, section:nth-of-type(7) ul").forEach((ul) => {
    const prev = ul.previousElementSibling;
    const next = ul.nextElementSibling;

    const scrollAmount = ul.scrollWidth * 0.1;

    const updateButtons = () => {
      if (prev?.tagName.toLowerCase() === "button") {
        prev.style.visibility = ul.scrollLeft <= 0 ? "hidden" : "visible";
      }
      if (next?.tagName.toLowerCase() === "button") {
        const atEnd =
          ul.scrollLeft + ul.clientWidth >= ul.scrollWidth - 1;
        next.style.visibility = atEnd ? "hidden" : "visible";
      }
    };

    ul.addEventListener("scroll", updateButtons);

    if (prev?.tagName.toLowerCase() === "button") {
      prev.addEventListener("click", () => {
        ul.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }

    if (next?.tagName.toLowerCase() === "button") {
      next.addEventListener("click", () => {
        ul.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }

    // Initial visibility check
    updateButtons();
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const currentPagePath = window.location.pathname;

  // Only run on index.html
  if (currentPagePath.endsWith('index.html')) {
    // Scope: your section (change selector if needed)
    const section10 = document.querySelector('section:nth-child(10)');
    if (section10) {
      const buttons = section10.querySelectorAll('button');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const nextUl = button.nextElementSibling;

          if (nextUl && nextUl.tagName === 'UL') {
            // Toggle UL open/close
            if (nextUl.style.maxHeight && nextUl.style.maxHeight !== '0px') {
              nextUl.style.maxHeight = '0px'; // close
            } else {
              nextUl.style.display = 'block'; // make visible
              nextUl.style.maxHeight = nextUl.scrollHeight + 'px'; // animate open
            }

            // Rotate the button's SVG
            const svg = button.querySelector('svg');
            svg.style.transform = (svg.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
          } else {
            // Last button: just rotate icon
            const svg = button.querySelector('svg');
            svg.style.transform = (svg.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
          }
        });
      });
    }
  }
});






document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section:nth-child(3)");
  if (!section) return;

  const buttons = section.querySelectorAll("button");

  buttons.forEach((button) => {
    const list = button.nextElementSibling; // <ul> directly under the button
    if (!list || list.tagName !== "UL") return;

    // Hide the list initially
    list.hidden = true;
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent accidental bubbling
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      list.hidden = isExpanded; // toggle visibility
    });
  });
});


