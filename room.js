const Room = function(area, painted, ableToPaint){
    this.area = area;
    this.painted = painted;
    this.ableToPaint = ableToPaint;
}

Room.prototype.area = function(){
    return this.area;
}

Room.prototype.painted = function(){
    return this.painted;
}

Room.prototype.ableToPrint = function(){
    return this.ableToPrint;
}

module.exports = Room;