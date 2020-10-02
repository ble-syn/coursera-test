/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye James
Good Bye Jason
Hello Pauline
Hello Faith
Hello Gift
Hello Pearl
Hello Sandy
Good Bye Janet
*/

(function() {
    var names = ["Yaakov", "John", "James", "Jason", "Pauline", "Faith", "Gift", "Pearl", "Sandy", "Janet"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();