Converter = (function(){

  var getHash = function(text){
    text = text || ''
    var shaObj = new jsSHA(text, "TEXT");
    return shaObj.getHash("SHA-512", "HEX");
  }


  var Password = function(params){
    this.hash = getHash(params.text);
  }

  function createPassword(params){
    return new Password(params);
  }

  return createPassword
})()
