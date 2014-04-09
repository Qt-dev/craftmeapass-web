Converter = (function(){

  var Password = function(params){
    this.text = '';
  }

  function createPassword(params){
    return new Password(params);
  }

  return createPassword
})()
