# Botleri Bot Program

Please speak with our Robot Overlords if you wish to update any code here, as doing so might break some of our little buddies.  Thanks!

# Instructions

To Update Triggers and Responses, there are 2 arrays in "bot.js" --> https://github.com/gmbotleri/botleri-master/blob/master/bot.js

*IMPORTANT: Your trigger word must be encapulated by "/^\" (no-quotes) followed by your custom String and closed with "$/" (no-quotes).

To add a Trigger, append your custom "String" to the end of the 'const captureCompare' array.

To add your corresponding response, just add a normal "String" to the end of the 'const responseGrid' array.  Nothing special is needed here other than your string be encased in "" quotes.

Enjoy!

Code used from groupme's bot tutorial: https://github.com/groupme/bot-tutorial-nodejs
