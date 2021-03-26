var sayHello = {};

(function () { 
    var speakWord = "Hello";    
    sayHello.speak = function (name) {
        console.log(speakWord + " " + name);
    }   
})();