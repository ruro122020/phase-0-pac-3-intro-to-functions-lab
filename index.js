function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  let upperCaseString = string.toUpperCase();
  console.log(upperCaseString)
}

function logWhisper(string){
  let lowCaseString = string.toLowerCase()
  console.log(lowCaseString)
}

function sayHiToHeadphonedRoommate(string){
  switch(string){
    case string.toLowerCase():
      return "I can't hear you!";
      break;
    case string.toUpperCase():
      return "YES INDEED!";
      break;
    case "Let's have dinner together!":
      return "I would love to!";
      break;
    default: console.log('no matches')
  }
}