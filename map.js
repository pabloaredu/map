var words = ["ground", "control", "to", "major", "tom"];

var map1 = words.map(function(word) {
  return word.length;
});

var map2 = words.map (function(word) {
  return word.toUpperCase();
});

var map3 = words.map (function(word) {
  return word.split('').reverse().join('');
});


console.log(map1);
console.log(map2);
console.log(map3);

