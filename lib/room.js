// Import external libs here so they aren't processed by Vite

import "https://cdn.jsdelivr.net/npm/ethereal@2.1.3/dist/ethereal.umd.js"
import "https://ios.aelatgt.net/lib/index.js"

// Import our JS bundle

import(new URL("./index.js", import.meta.url).href)
