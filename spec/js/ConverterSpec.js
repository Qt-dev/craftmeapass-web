describe('Converter', function(){
  it('should exist', function(){
    expect(Converter).toBeDefined();
  })

  describe('the returned password', function(){
    it('should be an object', function(){
      var type = typeof Converter();
      expect(type).toEqual('object')
    })
    it('should have a text attribute that is a string', function(){
      var type = typeof Converter().text;
      expect(type).toEqual('string')
    })

  })
})
