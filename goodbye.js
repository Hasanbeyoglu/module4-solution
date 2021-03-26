var sayGoodbye = {};

(function () { 
    var speakWord = "Good Bye";    
    sayGoodbye.speak = function (name) {
        console.log(speakWord + " " + name);
    }   
})();
