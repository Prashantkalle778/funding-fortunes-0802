function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wXnoS2rkmO":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbzune-WDIrvIQMPZwynLRJ8Dccf44pQALE4d7qL8tqk-9d7E7RVHOKnWbtWFd_KzxJ9/exec";
const player = GetPlayer();
let feedBack = player.GetVar("email"); 
let feedBack2 = player.GetVar("attempts"); 
let feedBack3 = player.GetVar("success"); 
let feedBack4 = player.GetVar("error"); 

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({texta: feedBack, textb: feedBack2, textc: feedBack3, textd: feedBack4}) 
});
}

};
