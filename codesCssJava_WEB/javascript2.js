document.addEventListener('DOMContentLoaded', function() {
  var leftColumn = document.getElementById('left-column');
  var rightColumn = document.getElementById('right-column');

  // Apply hidden but scrollable overflow to both columns
  leftColumn.style.overflow = 'hidden';
  rightColumn.style.overflow = 'hidden';

  // Add event listeners to handle scrolling in both columns
  leftColumn.addEventListener('wheel', handleScroll);
  rightColumn.addEventListener('wheel', handleScroll);

  // Function to handle scrolling in both columns
  function handleScroll(e) {
    // Determine the target column based on the event
    var targetColumn = e.currentTarget;

    // Calculate the new scroll position
    targetColumn.scrollTop += e.deltaY;

    // Prevent the default scroll behavior
    e.preventDefault();
  }

  // Disable right-click context menu
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
});
