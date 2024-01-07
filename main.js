//test arr
var arr = ['Racism Ends',
          'Germany restores to its former glory',
           'Greenland is filled with poisonous spiders',
           'The world reunites with Einstein'
          ]
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const len = arr.length
document.addEventListener("DOMContentLoaded", function() {
    // Access the button by its name
    var ifbButton = document.getElementsById("IFb");
    var thenbButton = document.getElementsById("THENb");

    // Do something with the button
    ifbButton.addEventListener("click", function() {
        alert(arr[getRandomInt(0,len)]+"if");
    });

    thenbButton.addEventListener("click", function() {
        alert(arr[getRandomInt(0,len)]);
    })
});


