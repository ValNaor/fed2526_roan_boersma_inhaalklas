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

  if (ps.length > 2) {
    const deal = getComputedStyle(document.documentElement)
                    .getPropertyValue('--color-deal-label');

    ps[0].style.color = deal;  
    ps[2].style.color = deal;  
    
    ps[0].style.fontWeight = '600';
    ps[2].style.fontWeight = '600';
  }
});


// Labels
document.querySelectorAll('main section:nth-child(4) ul li, main section:nth-child(5) ul li, main section:nth-child(6) ul li, main section:nth-child(7) ul li a')
  .forEach(li => {
    li.style.position = 'relative';

    var ps = Array.from(li.children).filter(el => el.tagName === 'P');

    if (ps.length > 0) {
      const dealColor = getComputedStyle(document.documentElement)
                        .getPropertyValue('--color-deal-label');
      const wit = getComputedStyle(document.documentElement)
                        .getPropertyValue('--color-background');
      const text = getComputedStyle(document.documentElement)
                        .getPropertyValue('--color-text');

      ps.sort((a, b) => b.textContent.trim().length - a.textContent.trim().length);

      ps.forEach((p, index) => {
        p.style.position = 'absolute';
        p.style.padding = '0.3em 0.5em';
        p.style.fontWeight = '600';
        p.style.fontSize = '0.8em';

        // eerste label op 17em, volgende steeds 2em hoger, langste regel in letters altijd onderaan
        const startTop = 17; 
        const spacing = 2; 
        p.style.top = `${startTop - index * spacing}em`;

        if (p.textContent.trim().toLowerCase() === 'deal') {
          p.style.backgroundColor = dealColor;
          p.style.color = wit;
        } else {
          p.style.backgroundColor = wit;
          p.style.color = text;
        }
      });
    }
});
;

// bronnen voor  deze code

// ARRAY METHODS
// https://www.youtube.com/watch?v=R8rmfD9Y5-c
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
