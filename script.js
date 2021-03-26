var names = ["Jason", "William", "John", "Sam", "Anna", "George", "Sandra", "Jim" ]

for (var i=0; i < names.length; i++) {
    
    var letter = names[i].charAt(0).toLowerCase();

    if (letter === 'j') {
        sayGoodbye.speak(names[i]);
      } 
    else {
        sayHello.speak(names[i]);
    }
}