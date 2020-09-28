
var NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
 
var nlu = new NaturalLanguageUnderstandingV1({
  iam_apikey: 'ZOEnjOSSGyQWPcgvVcMocOteDhwLTzmIHmfVGxnB9okg',
  version: '2018-04-05',
  url: 'https://gateway-lon.watsonplatform.net/natural-language-understanding/api'
});
 
nlu.analyze(
  {
    text: 'HI this is RITHIK from chennai , iam very happy' ,
    features: {
        sentiment: {},
        categories: {},
        concepts: {},
        entities: {},
        keywords: {}
    }
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });