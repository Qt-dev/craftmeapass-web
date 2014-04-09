describe('Converter', function(){
  it('should exist', function(){
    expect(Converter).toBeDefined();
  })

  describe('the returned password', function(){
    beforeEach(function(){
      passwordResult = Converter({text:''});
    })
    it('should be an object', function(){
      var type = typeof passwordResult;
      expect(type).toEqual('object')
    })
    it('should have a hash attribute that is a string', function(){
      var type = typeof passwordResult.hash;
      expect(type).toEqual('string')
    })
    it('should have a 128 character hash attribute', function(){
      expect(passwordResult.hash.length).toBe(128);
    })

  })
})
