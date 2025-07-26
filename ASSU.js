
  const container = document.querySelector('.ministry-scroll-container');
  const items = document.querySelectorAll('.ministry-item');

  let index = 0;
  const scrollInterval = 5000; // 5 seconds

  function autoScrollMinistries() {
    if (!container || items.length === 0) return;

    index++;
    if (index >= items.length) {
      index = 0;
    }

    const scrollX = items[index].offsetLeft - container.offsetLeft;
    container.scrollTo({ left: scrollX, behavior: 'smooth' });
  }

  setInterval(autoScrollMinistries, scrollInterval);
// This script automatically scrolls through ministry items in a container every 5 seconds.
// It selects the container and items, then scrolls to the next item in a smooth manner
// while resetting to the first item after reaching the end.

 let interval = setInterval(autoScrollMinistries, scrollInterval);

  container.addEventListener('mouseenter', () => clearInterval(interval));
  container.addEventListener('mouseleave', () => {
    interval = setInterval(autoScrollMinistries, scrollInterval);
  });
// This code sets up an automatic scrolling feature for a container of ministry items.
// It scrolls through the items every 5 seconds, and pauses the scrolling when the mouse enters the container.

