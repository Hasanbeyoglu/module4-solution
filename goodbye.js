var sayGoodbye = {};

(function () { 
    var speakWord = "Goodbye";    
    sayGoodbye.speak = function (name) {
        console.log(speakWord + " " + name);
    }   
})();