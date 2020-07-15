/*
  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify,
  merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const { lambdaHandler } = require('./app')

// For local testing
process.env.ApplicationId = '<< Pinpoint Application ID (Project ID) >>'
process.env.APIkey = '<< OpenWeatherMap API key >>'

// Mock event
const event = {
  "Records": [
      {
          "EventSource": "aws:sns",
          "EventVersion": "1.0",
          "EventSubscriptionArn": "arn:aws:sns:us-east-1:123456789:weatherApp",
          "Sns": {
              "Type": "Notification",
              "MessageId": "1aa426de-477f-1234-869d-123456789",
              "TopicArn": "arn:aws:sns:us-east-1:123456789:weatherApp",
              "Subject": null,
              "Message": "{\"originationNumber\":\"+16175551234\",\"destinationNumber\":\"+15715551234\",\"messageKeyword\":\"\",\"messageBody\":\"weather 90210\",\"inboundMessageId\":\"b4d7ba6b-1234-5c92-a447-1234567890\",\"previousPublishedMessageId\":\"299e2cf0-123a-5de3-a1ff-123456789\"}",
              "Timestamp": "2019-06-07T18:39:04.747Z",
              "SignatureVersion": "1",
              "Signature": "",
              "SigningCertUrl": "",
              "UnsubscribeUrl": "",
              "MessageAttributes": {}
          }
      }
  ]
}

const main = async () => {
  await lambdaHandler(event)
}

main()
