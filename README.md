# Pinpoint Weather Bot

**This application currently only works for US regions and phone numbers but I'll expand to other regions in the near future.**

Pinpoint Weather Bot responds to a text message from a user with current weather conditions.
Incoming text message must conform to the format "weather *zipcode*", else it will be ignored.

Important: this application uses Amazon Pinpoint's SMS long codes. There are costs associated with reserving a phone number and sending text messages. Please see the current [Amazon Pinpoint pricing](https://aws.amazon.com/pinpoint/pricing/) for details.

**See the full walkthrough for this application at https://aws.amazon.com/blogs/compute/building-a-serverless-weather-bot-with-two-way-sms-aws-sam-and-aws-lambda.**

```bash
.
├── README.MD                   <-- This instructions file
├── event.json                  <-- API Gateway Proxy Integration event payload
├── smsResponderFunction        <-- Source code for a lambda function
│   └── app.js                  <-- Main Lambda handler
│   └── getWeather.js           <-- Gets the weather from OpenWeatherMap
│   └── smsResponder.js         <-- Sends the response via SMS
│   └── testHarness.js          <-- For testing code locally
│   └── package.json            <-- NodeJS dependencies and scripts
├── template.yaml               <-- SAM template
```

## Requirements

* AWS CLI already configured with Administrator permission
* [NodeJS 12.x installed](https://nodejs.org/en/download/)

## Installation Instructions

1. [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and login.
1. Go to the app's page on the [Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications/) and click "Deploy"
1. Provide the required app parameters (see parameter details below) and click "Deploy"

## Using this Application

* This application requires an API Key from [OpenWeatherMap](https://openweathermap.org/).
* You also need an active Pinpoint project configured with a long code number configured for 2-way text messaging. The Pinpoint Application ID (also known as the Project ID) is needed as a parameter for this code.

## How it works

* A user sends an SMS message to your Pinpoint long code, which is forwarded to an SNS topic.
* This application is invoked by the SNS topic - it parses the text message for the 'weather' keyword and a US zipcode.
* The code queries the OpenWeatherMap API for current weather conditions and responds to the originating number with a weather summary.

==============================================

Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.

SPDX-License-Identifier: MIT-0
