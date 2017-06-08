define(function () {

    var Utility = function () {

    };

    Utility.isObject = function (obj) {
        return typeof obj === 'object' && obj !== null;
    };

    Utility.isPlainObject = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    Utility.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    Utility.isDate = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    };

    Utility.getRealType = function (obj) {
        return Object.prototype.toString.call(obj).match(/^\[object (.+)\]$/)[1];
    };




    return Utility;

})