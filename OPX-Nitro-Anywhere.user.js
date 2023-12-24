// ==UserScript==
// @name         OPX Nitro Anywhere
// @namespace    https://update.greasyfork.org/scripts/482963/Opera%20GX%20Nitro%20Promotion%20Anywhere.user.js
// @version      1.0.5
// @description  This script allows you to get a nitro subscription code from Opera GX without having Opera GX to claim it.
// @author       104xvision
// @match        https://www.opera.com/gx/discord-nitro
// @icon         https://www.google.com/s2/favicons?sz=64&domain=opera.com/gx
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function getRandomUUID() {
        localStorage.systemData = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
         (function(t) {
            const e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        }))
    }

    function setUserAgent(window, userAgent) {
        if (window.navigator.userAgent != userAgent) {
            var userAgentProp = { get: function () { return userAgent; } };
            try {
                Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
            } catch (e) {
                window.navigator = Object.create(navigator, {
                    userAgent: userAgentProp
                });
            }
        }
    }

    setUserAgent(window, navigator.userAgent + " OPX/1.0");

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("#claim-button").addEventListener("click", function() {
            getRandomUUID();
            console.log(`Generated new UUID for promotional: ${localStorage.systemData} (Claim Button #1)`);
        })

        document.querySelector("#claim-button-second").addEventListener("click", function() {
            getRandomUUID();
            console.log(`Generated new UUID for promotional: ${localStorage.systemData} (Claim Button #2)`);
        })
    })
})();
