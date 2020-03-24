

const Decorator = function(){
    this.paints = []; 
}

Decorator.prototype.addPaint = function(paint){
    this.paints.push(paint);
}

Decorator.prototype.totalPaintLitres = function(){
    let totalPaintLitres = 0;
    for(let paint of this.paints){
        totalPaintLitres += paint.litres;
    }
    return totalPaintLitres;
}
Decorator.prototype.enoughPaintForRoom = function(room){
    if(this.totalPaintLitres() >= room.area){
        return true;
    }else{
        return false;
    }
}

module.exports = Decorator;