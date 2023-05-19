import request from 'request'
import {google} from 'googleapis'
import key from './sunlit-ace-387205-c615e262206d.json' assert {type: "json"}

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/indexing"],
  null
);

const siteUrls = [
  '/',
  '/gallery',
  '/article',
  '/similar-breeds',
  '/care'
]

const createOptions = (tokens, url) => ({
  url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
  method: "POST",
  // Your options, which must include the Content-Type and auth headers
  headers: {
    "Content-Type": "application/json"
  },
  auth: { "bearer": tokens.access_token },
  // Define contents here. The structure of the content is described in the next step.
  json: {
    "url": `https://iliepins.github.io/imt-doggos${url}`,
    "type": "URL_UPDATED"
  }
})

jwtClient.authorize(function(err, tokens) {
  if (err) {
    console.log(err);
    return;
  }

  siteUrls.forEach(url => {
    request(createOptions(tokens, url), function (error, response, body) {
      // Handle the response
      console.log(body);
    });
  })
});
