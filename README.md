# [Twitch Interactive Chat Overlay](https://goldzulu.github.io/twitch-interactive-chat)

![Screenshot](preview.png)

Twitch Interactive Chat Overlay is a simple and fun overlay to add to your stream that gives chat a new way to interact with you and fellow members of chat. Every person in the chat is reperesented by a sprite on the screen they can control. Doing the `!controls` command will display a dialog on the screen of the various command they can do to controls their sprite. Also doing `!audio` will display the commands they can use to trigger audio queues that are backed into the overlay. It's just some simple silly that can be had with out the need of any servers or logging into a website to use.

The original credit goes to open source work by @talk2megooseman. I've since made many improvements and modification it to in an attempt to make it more usable for my twitch channel https://twitch.tv/goldzulu and for ongoing work made for Alexa Smart Displays where you will be able to control your Avatars via Amazon Echo speaker and smart displays. The display will show useful information for the twitch streams in the form of a companian skill/app.

Most of the bitmap avatar sprites used are currently copyrighted by me but you are free to use them on your channels via this overlay. Please do not use them for any other purposes without my approval. The characters are marked with a vt prefix and filenames are prefixed with voicetech. There is an original set of artwork that is kept for reference belonging to Erik Guzman @talktomegooseman, the original creator of this overlay.

---
# Features:
- All users in your chat get their own sprite
- Only users the talk in chat will have their names displayed
- Connect to any Twitch channel
- Reacts to cheer, sub and resub events
- Requires no server
- !controls
- !audio



# How do I use the overlay on my stream?

Adding the overlay to your stream is super simple!

1. Add the following link as you browser source to your streaming software (like OBS): [https://goldzulu.github.io/twitch-avatars/?channel=YOUR_CHANNEL_NAME_HERE](https://goldzulu.github.io/twitch-avatars?channel=YOUR_CHANNEL_NAME_HERE)

2. Change the YOUR_CHANNEL_NAME_HERE in the url to match your channel's name like the following: https://goldzulu.github.io/twitch-avatars/?channel=goldzulu

3. Type `!controls` or `!audio` to see a list of commands on screen

---

# Interested in doing development on the project?

Follow the instructions below and start developing your games right away.

## First steps

Run your project with `yarn start`.


## Package Scripts

The following package scripts are also available to manage your project:

```sh
yarn clean     # Manually deletes previous distribution files.
yarn format    # Uses ESLint to format and remove lint issues.
yarn lint      # Checks scripts for lint issues using ESLint.
```

## Tutorial

No idea of what to do next? Follow this [tutorial][t] and learn more about
Phaser 3 and `generator-phaser-plus`.

[t]: https://github.com/rblopes/generator-phaser-plus#a-brief-tutorial


