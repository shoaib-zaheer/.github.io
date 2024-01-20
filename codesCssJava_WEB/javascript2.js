// document.addEventListener('DOMContentLoaded', function() {
//   var leftColumn = document.getElementById('left-column');
//   var rightColumn = document.getElementById('right-column');

//   // Apply hidden but scrollable overflow to both columns
//   leftColumn.style.overflow = 'hidden';
//   rightColumn.style.overflow = 'hidden';

//   // Add event listeners to handle scrolling in both columns
//   leftColumn.addEventListener('wheel', handleScroll);
//   rightColumn.addEventListener('wheel', handleScroll);

//   // Function to handle scrolling in both columns
//   function handleScroll(e) {
//     // Determine the target column based on the event
//     var targetColumn = e.currentTarget;

//     // Calculate the new scroll position
//     targetColumn.scrollTop += e.deltaY;

//     // Prevent the default scroll behavior
//     e.preventDefault();
//   }

//   // Disable right-click context menu
//   document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  // Disable text selection on the entire page
  disableTextSelection(document.body);

  // Function to disable text selection recursively
  function disableTextSelection(element) {
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.MozUserSelect = 'none';
    element.style.msUserSelect = 'none';

    // Recursively apply to child elements
    for (var i = 0; i < element.children.length; i++) {
      disableTextSelection(element.children[i]);
    }
  }
  
  // Optional: Allow text selection in specific elements (e.g., inputs and textareas)
  var allowedElements = document.querySelectorAll('input, textarea');
  for (var i = 0; i < allowedElements.length; i++) {
    allowedElements[i].style.userSelect = 'text';
    allowedElements[i].style.webkitUserSelect = 'text';
    allowedElements[i].style.MozUserSelect = 'text';
    allowedElements[i].style.msUserSelect = 'text';
  }
});
