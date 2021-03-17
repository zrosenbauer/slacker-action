# action-slack

[![CI](https://github.com/bluenovaio/action-slack/actions/workflows/ci.yaml/badge.svg)](https://github.com/bluenovaio/action-slack/actions/workflows/ci.yaml)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)

Action used to send messages to slack via a webhook. 

## Usage

The API for this action mirrors the [Slack Webhook API](https://api.slack.com/methods/chat.postMessage) verbatim. Some items are not currently supported (i.e. attachments).

```yaml
name: Example Action 
on:
  push

jobs:
  sendAMessage:
    name: Send a Message 
    runs-on: ubuntu-latest
    steps:
      - uses: bluenovaio/action-slack@main 
        with:
          username: "ExampleBot"
          icon_emoji: ":robot_face:"
          text: "This is a sample message"
          webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }} 
```
