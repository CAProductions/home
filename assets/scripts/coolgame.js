document.getElementsByTagName('head')
[0].appendChild(document.createElement('script')).setAttribute('src','https://cdn.jsdelivr.net/gh/pikapower9080/pikapower9080.github.io/assets/modules/utils.js');
var pMHp, pHp, pIn, response;
pMHp = 3;
pHp  = 3;
pIn  = [""];
response = "";
while (response == null || response.trim() == "" || response.trim().length <= 0) {
  response = prompt("Start Game (y/n)?", "y");
};
