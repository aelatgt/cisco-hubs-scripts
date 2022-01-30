This project runs Vite in two configurations.

`vite.config.js` is a standard Vite configuration that builds the frontend preview app from `index.html`

`vite.config.js` is a "library mode" configuration from the `src/lib/index.js` entrypoint which outputs:

- `/build/lib/index.js`
- `/build/lib/style.css`

Ultimately, `room.js` is the room script for Hubs which imports our JS bundle along with external libraries.

# Room script

[Development](https://mattrossman.ngrok.io/lib/room.js)
[Production](https://www.aelatgt.org/cisco-hubs-scripts/lib/room.js)

# Hubs rooms

[Development](https://hubs.aelatgt.net/CWsexjb/cisco-development)
[Production](https://hubs.aelatgt.net/2cYwtQW/cisco-production/)
