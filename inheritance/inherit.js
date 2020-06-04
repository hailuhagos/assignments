(function(){
    "use strict"
const createBicyclePrototye = function(){
    return {speed:0,
        applyBrake:function(para){
        this.speed-=para;},
        speedup:function(para){
        this.speed+=para;
    }}
}; 
const createMountainBikeProtoype = function(prototype){
    obj=Object.create(prototype);
    obj.gear = 1;
    obj.setGear = function(para){
        this.gear = para;
    }
    return obj;
}
const start = function(){
    let bicyclePrototye = createBicyclePrototye();
    let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototye);
    let bObje = Object.create(createBicyclePrototye);
    let mbObje = object.create(createMountainBikeProtoype);
    console.log(bObje.speed +bObje.speedup(20)+ bObje.applyBrake(12));
}
start();
})();