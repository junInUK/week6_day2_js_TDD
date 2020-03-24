const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint',function(){

    let paint;
    beforeEach(function(){
        paint = new Paint(20) //Arrange
    })

    it('have a number of litres of paint', function(){
        const actual = paint.litres;   //Act
        assert.deepEqual(actual, 20) //Assert
    });

    it('be able to check if it is empty', function(){
        const actual = paint.empty();   //Act
        assert.strictEqual(actual, false) //Assert
    });

    it('be able to empty itself of paint', function(){
        paint.emptyPaint();   //Act
        const actual = paint.empty();
        assert.strictEqual(actual, true) //Assert
    });


})