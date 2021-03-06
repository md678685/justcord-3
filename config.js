/* eslint-disable no-template-curly-in-string */
// IMPORTANT:
// Do not edit this file - edit config.json instead.

const path = require("path");
const _ = require("lodash");

const util = require("./util");

const loadJSON = util.loadJSON;
const saveJSON = util.saveJSON;

const defaultConfig = {
    eris: {
        token: "TOKEN GOES HERE",
        id: "CHANNEL ID GOES HERE",
        topicTimeout: 300000,
        playing: "Just Cause 3 Multiplayer"
    },
    formatting: {
        discordToGame: {
            chat: "${nick}: ${message}",
            colour: "7289DA"
        },
        gameToDiscord: {
            topic: "Join the server at xxx.xxx.xxx.xxx:port | ${players}/${maxPlayers} players currently online | Current tick rate: ${jcmp.server.currentTickRate}",
            chat: "${username}: ${message}",
            death: "*${username} ${(killer && killer.name ? \"was killed by \" + killer.name : \"died\")}*",
            connect: "**${username} connected to the server.**",
            disconnect: "**${username} disconnected from the server.**",
            dConnect: "**Server started.**",
            dReconnect: "**Reconnected to Discord.**",
            dExit: "**Server stopped.**",
        }
    },
    version: "0.2.0",
};

function getFullConfig() {
    const configPath = path.join(__dirname, "./config.json");
    const loadedConfig = loadJSON(configPath);

    if (loadedConfig.version &&
        !util.isVersionCompatible(defaultConfig.version, loadedConfig.version)) throw new Error("Your config.json is not compatible with this version of Justcord. Please update your config.");

    const fullConfig = _.merge({}, defaultConfig, loadedConfig);
    saveJSON(configPath, fullConfig);

    return fullConfig;
}

module.exports = getFullConfig;
module.exports.defaultConfig = defaultConfig;
