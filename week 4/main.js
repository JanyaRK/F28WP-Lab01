var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://janyark.github.io/F28WP-Lab01/week%204/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData[0]);
};
ourRequest.send();