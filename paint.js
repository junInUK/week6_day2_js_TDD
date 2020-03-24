
const Paint = function(litres){
    this.litres = litres;
}

Paint.prototype.litres = function(){
    return this.litres;
}

Paint.prototype.empty = function(){
    if(this.litres > 0){
        return false;
    }else{
        return true;
    }
}

Paint.prototype.emptyPaint = function(){
    this.litres = 0;
}

module.exports = Paint;