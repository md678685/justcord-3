/* justcord-3
 * A JC3MP-Discord bridge.
 *
 * Author: MD678685
 * Licensed under the MIT license.
 *
 * Uses Eris, a Discord library licensed under the MIT license.
 * Requires the chat package.
 */

// Config
const config = require("./config.json");

// External Modules
const ErisClient = require("eris");

// Initialise Eris
const eris = new ErisClient(config.eris.token);

// Globally-Exposed Variables
global.justcord = {
    chat: jcmp.events.Call('get_chat')[0],
    config,
    eris
};

// Event Handlers
const jcevents = require("./jcevents.js");
const erisevents = require("./erisevents.js");

eris.connect();
