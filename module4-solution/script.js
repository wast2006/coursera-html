(function () {
'use strict';

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++) {
  var name = names[i];

  var firstLetter = name.charAt(0).toLowerCase();
  if (firstLetter.toLowerCase()==='j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}

})();
