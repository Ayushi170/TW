$(document).ready(function() {
    $('#searchSortIntegers').click(function() {
      var input = $('#integers').val().trim();
      var integers = input.split(',').map(function(item) {
        return parseInt(item.trim());
      });
      
      // Remove empty and non-integer elements
      integers = integers.filter(function(item) {
        return !isNaN(item);
      });
  
      // Sort the array
      integers.sort(function(a, b) {
        return a - b;
      });
  
      // Display sorted array
      $('#integerResult').html('Sorted Array: ' + integers.join(', '));
    });
  
    // array of named entities
    $('#processEntities').click(function() {
      var input = $('#entities').val().trim();
      
      // Regular expression to match named entities
      var namedEntityRegex = /\b[A-Za-z'-]+\b/g;
      
      // Extract named entities from input text
      var entities = input.match(namedEntityRegex);
      
      // Display processed entities
      if (entities !== null) {
        $('#entityResult').html('Entities: ' + entities.join(', '));
      } else {
        $('#entityResult').html('No named entities found.');
      }
    });
});
