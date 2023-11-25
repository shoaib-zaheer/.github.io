  document.addEventListener('DOMContentLoaded', function() {
    var leftColumn = document.getElementById('left-column');
    var rightColumn = document.getElementById('right-column');
    var content = document.getElementById('content');

    // Delayed appearance effect for the text
    setTimeout(function() {
      leftColumn.style.opacity = 1;
      rightColumn.style.opacity = 1;
      content.style.opacity = 1;
      content.style.transform = 'translateY(0)';
    }, 500); // 500 milliseconds (0.5 seconds) delay
  });

  function openPage(page) {
    // You can implement page loading logic here
    // For simplicity, let's just update the content div with the page name
    document.getElementById('content').innerText = `This is the ${page} page.`;
  }

  // JavaScript for fading in elements on scroll
  window.addEventListener('scroll', function() {
    var leftColumn = document.getElementById('left-column');
    var rightColumn = document.getElementById('right-column');
    var content = document.getElementById('content');

    var scrollPosition = window.scrollY;

    // Fading out left and right columns
    var opacity = 1 - (scrollPosition / 500);
    leftColumn.style.opacity = opacity;
    rightColumn.style.opacity = opacity;

    // Fading in content and moving it up
    if (scrollPosition > 100) {
      content.style.opacity = 1;
      content.style.transform = 'translateY(0)';
    } else {
      content.style.opacity = 0;
      content.style.transform = 'translateY(30px)';
    }
  });
