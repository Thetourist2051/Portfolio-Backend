const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: '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',
});

async function askChatgpt(req, res) {
  let chat = req.params.chat;
  try{
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    res.json({
      "state": 1,
      "data": chatCompletion,
      "message":"Chat Generated Successfully!"
  })
  }
  catch(err){
    res.json({
      "state": -1,
      "message": err.message || "Something went wrong"
  })
  }       
}


module.exports = { askChatgpt }