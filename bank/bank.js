(function () {
    "use strict"
    const createBicyclePrototye = function () {
        return {
            speed: 0,
            applyBrake: function (para) {
                this.speed -= para;
            },
            speedup: function (para) {
                this.speed += para;
            }
        }
    };
    const createMountainBikeProtoype = function (prototype) {
        let obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function (para) {
            this.gear = para;
        }
        return obj;
    }
    const start = function () {
        let bicyclePrototye = createBicyclePrototye();
        let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototye);

        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.speedup(15);
        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.applyBrake(5);
        console.log(mountainBikePrototype.speed);

        console.log(bicyclePrototye.speed);
        bicyclePrototye.speedup(150);
        console.log(bicyclePrototye.speed);
        bicyclePrototye.applyBrake(50);
        console.log(bicyclePrototye.speed);

    }
    start();
})();


var accountInfoList = [];
function pageLoad() {
    document.getElementById("accC8").onclick = createNewAccount;
}
function createNewAccount() {
    var accName = document.getElementById("accName").value;
    var depo = document.getElementById("depo").value;
    var accListObj = document.getElementById("accList");
    let accObj = {
        accName: accName, depo: depo
    };
    accountInfoList.push(accObj);

    accListObj.value += "Account name: " + accObj.accName + " " + "Balance: " + accObj.depo + "\n";
}
window.onload = pageLoad;