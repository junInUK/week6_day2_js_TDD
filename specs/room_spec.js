const assert = require('assert');
const Room = require('../room.js');

describe('Room',function(){

    let room;
    beforeEach(function(){
        room = new Room(20,false,true) //Arrange
    })

    it('have an area in square meters', function(){
        const actual = room.area;   //Act
        assert.deepEqual(actual,20) //Assert
    });

    it('should start not painted', function(){
        const actual = room.painted;   //Act
        assert.strictEqual(actual, false) //Assert
    });

    it('should be able to be painted', function(){
        const actual = room.ableToPaint;   //Act
        assert.strictEqual(actual, true) //Assert
    });


})