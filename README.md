# action-slack

[![CI](https://github.com/zrosenbauer/action-slack/actions/workflows/ci.yaml/badge.svg)](https://github.com/zrosenbauer/action-slack/actions/workflows/ci.yaml)
[![CodeQL](https://github.com/zrosenbauer/action-slack/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/zrosenbauer/action-slack/actions/workflows/codeql-analysis.yml)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)

Action used to send messages to slack via a webhook.

## Usage

The API for this action mirrors the [Slack Webhook API](https://api.slack.com/methods/chat.postMessage) verbatim. Some items are not currently supported (i.e. attachments).

```yaml
name: Example Action
on: push

jobs:
  sendAMessage:
    name: Send a Message
    runs-on: ubuntu-latest
    steps:
<<<<<<< HEAD
      - uses: bluenovaio/action-slack@main
=======
      - uses: zrosenbauer/action-slack@main
>>>>>>> da88d921acd80372afaeded17405188e420a03e3
        with:
          username: 'ExampleBot'
          icon_emoji: ':robot_face:'
          text: 'This is a sample message'
          webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
```
