

describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });
    it('counts the number of swaps', function () {
      swap(array);
      expect(swap.calls.count()).toEqual(3);
    });




  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with length of one', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an array with length of two', function(){
    expect( bubbleSort([2, 1]) ).toEqual( [1, 2] );
  });
  it('handles an array with more than two items', function(){
    expect( bubbleSort([3, 5, 4, 1, 2]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});
