"use strict";

/** setTimeout & setInterval
 *
 * setTimeout(callback, interval (ms)) callback runs just once after a defined time
        - NOTE: code execution doesn't stop at this point.
        - when code execution reaches this line, the setTimeout function is called and register the callback function
          to be called later. The the code execution simply continues.
        - this mechanism is called async JS

        e.g. const timerName = setTimeout(function(params){stmt...}, delay, arg-1, arg-2, ... , arg-n);

        - we are able to cancle the time b4 the dealy period e.g. based on a condition b4 that pre-defined dealy is reached
        - if(condition) clearTimeout(timerName);
 *
 *
 *
 * setInterval(callback, interval) keeps running forever at set intervals until we stop it
 */
