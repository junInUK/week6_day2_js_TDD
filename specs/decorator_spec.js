const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator',function(){

    let decorator;
    beforeEach(function(){
        decorator = new Decorator() //Arrange
    })

    it('start with an empty paint stock', function(){
        const actual = decorator.paints.length;   //Act
        assert.deepEqual(actual, 0) //Assert
    });

    it('be able to add a can of paint to paint stock', function(){
        const paint = new Paint(20)
        decorator.addPaint(paint);
        const actual = decorator.totalPaintLitres();
        assert.deepEqual(actual, 20) //Assert
    });

    it('be able to calculate total litres paint it has in stock', function(){
        const paint = new Paint(20)
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const actual = decorator.totalPaintLitres();
        assert.deepEqual(actual, 40) //Assert
    });
    
    it('be able to calculate whether is has enough paint to paint a room', function(){
        const room = new Room(20,false,true);
        const paint = new Paint(30); 
        decorator.addPaint(paint);
        const actual = decorator.enoughPaintForRoom(room);   //Act
        assert.strictEqual(actual, true) //Assert
    });

    xit('be able to paint room if has enough paint in stock', function(){
        const actual = room.ableToPaint;   //Act
        assert.strictEqual(actual, true) //Assert
    });


})