module.exports = function(jQuery){

  // Check whether all the items in a selection are valid
  jQuery.fn.isValid = function(){
    var isValid = false;
    this.each(function(index, element){
      if ( element.checkValidity ) {
        if ( ! element.checkValidity() ) {
          isValid = false;
        }
      }
    })
    return
  }

  jQuery.fn.setCustomValidity = function(reason){
    // '' means valid. See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
    if ( ! reason ) {
      reason = ''
    }
    return this[0].setCustomValidity(reason)
  }


}