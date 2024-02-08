<img src="https://github.com/zrosenbauer/art/blob/main/banners/banner_archived.png" />
<div align="center">
    <p>
        Migrate to 
        <a href="https://github.com/slackapi/slack-github-action">
            Slack GitHub Action (from the Slack Team)
        </a>
    </p>
</div>

<br />
<br />
<br />
<div>
    <p align="center">
        <img src="/logo.png" align="center" width="300" />
    </p>
    <hr>
</div>

> Work smarter not harder with Slacker!

# Overview

[![CI](https://github.com/zrosenbauer/slacker/actions/workflows/ci.yaml/badge.svg)](https://github.com/zrosenbauer/slacker/actions/workflows/ci.yaml)
[![CodeQL](https://github.com/zrosenbauer/slacker/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/zrosenbauer/slacker/actions/workflows/codeql-analysis.yml)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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
      - uses: zrosenbauer/slacker-action@main
        with:
          username: 'ExampleBot'
          icon_emoji: ':robot_face:'
          text: 'This is a sample message'
          webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
```

<br>
<br>
<hr>
<div align="center">
      <h2>Sponsorship</h1>
      <sup>Special thanks to:</sup>
      <br>
      <br>
      <a href="https://joggr.io">
      <img src="https://storage.googleapis.com/joggr-public-assets/logos/logo.png" width="160"/>
      </a>
</div>
