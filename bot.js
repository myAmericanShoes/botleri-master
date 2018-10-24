import { compareLists } from './compareLists.js';

var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var regID = "Bot regID is: 10x24x19xAA";

var botID = process.env.BOT_ID;

function respond() {
  
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\eric$/;
  var botRegex2 = /^\Eric$/;
  var botRegex3 = /^\overlord$/;
  var botRegex4 = RegExp(compareLists.captureCompare[0]);

 /*for (var i = 0; i < compareLists.captureCompare.length; i++) {

    botRegex = compareLists.captureCompare[i];
    
    if(request.text && botRegex.test(request.text)) {
    
      this.res.writeHead(200);
      postMessage(botRegex);
      this.res.end();
    }
  }*/

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(" ");
    this.res.end();
  } else if(request.text && botRegex2.test(request.text)) {
    this.res.writeHead(200);
    postMessage(" ");
    this.res.end();
  } else if(request.text && botRegex3.test(request.text)) {
    this.res.writeHead(200);
    postMessage("overlord");
    this.res.end();
  } else if(request.text && botRegex4.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end("/reg");
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(input) {
  var botResponse, options, body, botReq;

  botResponse = "God damn";
  
  if (input == "overlord") {
   
    botResponse = "Ainz-Sama!"
  }
  else if (input == "/reg") {
    
    botResponse = regID;
  }

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
