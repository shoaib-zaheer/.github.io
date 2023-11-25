  document.addEventListener('DOMContentLoaded', function() {
    var mainText = document.getElementById('mainText');
    var additionalText = document.getElementById('additionalText');
    var readMoreLink = document.getElementById('readMoreLink');
    var readLessLink = document.getElementById('readLessLink');

    readMoreLink.addEventListener('click', function(e) {
      e.preventDefault();
      additionalText.style.display = 'inline'; // Toggle the display of additional text
      additionalText.style.opacity = '1'; // Set opacity to 1 for fade-in effect
      additionalText.style.transform = 'translateY(0)'; // Move from bottom to original position
      additionalText.style.transition = 'opacity 2s, transform 2s'; // Add transition properties
      readMoreLink.style.display = 'none'; // Hide the "Read More" link
      readLessLink.style.display = 'inline'; // Show the "Read Less" link
    });

    readLessLink.addEventListener('click', function(e) {
      e.preventDefault();
      additionalText.style.display = 'none'; // Hide the additional text
      readMoreLink.style.display = 'inline'; // Show the "Read More" link
      readLessLink.style.display = 'none'; // Hide the "Read Less" link
    });
  });