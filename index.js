module.exports = function(jQuery){

  var log = console.log.bind(console);

  // Check whether all the items in a selection are valid
  jQuery.fn.isValid = function(){
    var isValid = true;
    this.each(function(index, element){
      if ( element.checkValidity ) {
        if ( ! element.checkValidity() ) {
          isValid = false;
        }
      }
    })
    return isValid
  }

  jQuery.fn.setCustomValidity = function(reason){
    // '' means valid. See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
    if ( ! reason ) {
      reason = ''
    }
    this.each(function(index, element){
      if ( element.setCustomValidity ) {
        element.setCustomValidity(reason)
      }
    })
  }


}