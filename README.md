# CISCO Hubs Scripts

This repository contains scripts intended to be loaded into a custom Mozilla Hubs instance such as [hubs.aelatgt.net](https://hubs.aelatgt.net/). This document assumes you have the ability to inject scripts into a Hubs room. Refer to the [AEL Hubs repo](https://github.com/aelatgt/hubs) for an example client that supports this feature.

## Backend Setup

The `trello-board` component relies on an additional server to handle authentication and signal realtime board updates hosted at https://cisco-trello-server.herokuapp.com/

If you would like to host your own on Heroku:

1. Fork the [server repository](https://github.com/aelatgt/cisco-trello-server)
2. Log in to your [Heroku dashboard](https://dashboard.heroku.com)
3. Click "New" > "Create new app"
4. Give it a name > "Create app"
5. Visit https://trello.com/app-key and copy the Trello API Key listed there
6. In Heroku go to the "Settings" tab and click "Reveal Config Vars"
7. Add an entry with the name "TRELLO_KEY" and the value as the API key you copied
8. Go to the "Deployment" tab, select "GitHub" and connect it to your forked server repository
9. Deploy from your `main` branch using either the Automatic or Manual deploy options
10. Once deployed, access your server URL by clicking "Open App"

## Hosting Scripts

If you'd like to host these scripts yourself (which is necessary if you're modifying them to point to your own backend):

1. Fork and clone this repository
2. (optional) Change the `VITE_TRELLO_SERVER` value in `.env.production` to your trello server URL and commit/push this change
3. On GitHub go to the repo's "Settings" > "Pages" and configure it to deploy from the `gh-pages` branch

The `.github/workflows/deploy.yml` action will build and deploy these scripts on each push to the `main` branch. The entrypoint script will be available at `<YOUR-GITHUB-PAGES-URL>/lib/index.js` where `<YOUR-GITHUB-PAGES-URL>` represents something like `https://username.github.io/cisco-hubs-scripts`.

Our entrypoint script is hosted at https://www.aelatgt.org/cisco-hubs-scripts/lib/index.js

## Script Usage

1. Create a Hubs room
2. Click "More" > "Room Info and Settings" > "Edit"
3. Paste the entrypoint script URL in the "Custom Script" field
4. Apply and reload the room

### Trello

You can paste or drag a Trello board URL into the room for a view-only representation of the realtime board data. The board can be positioned and pinned like other room objects.

To enable this feature, you first need to authenticate by clicking "Log in to Trello" in the configuration panel in the top left.

### Excalidraw

You can paste or drag an Excalidraw collaboration URL into the room for a persistent view of the board. The board can be positioned and pinned like other room objects. You can also click the "snapshot" button in the spacebar menu to save a static image of the board in the room.

1. Visit https://www.aelatgt.org/excalidraw/
2. Click the "Live Collaboration" button in the top left
3. Click "Start Session"
4. Copy the collaboration link and begin drawing
5. Paste the link into the Hubs room

You may need to move your cursor around to find the center of the board in Hubs

## Presence (Web Notifications and Hue Lights)

Presence notifications require specific components in the scene which define zone boundaries. Specifically, you need an entity with `presence-zone="type:social"` and one with `presence-zone="type:meeting"`. The scale and position of those entities determine the axis-aligned bounding box for each trigger zone.

To enable web notifications, check the "Web Notifications" box in the upper left config panel.

To enable Hue Light notifications:

1. Visit https://ifttt.com/maker_webhooks
2. Click "Documentation"
3. Copy the key shown
4. Paste this key in the "IFTTT key" field in Hubs
5. Check the "Enable Lights" box
