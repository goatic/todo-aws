#!/bin/bash

# Invoke the Forever module (to START our Node.js server).
./node_modules/forever/bin/forever \
start \
-al forever.log \
-ao out.log \
-ae err.log \
-c --minUptime 1000 --spinSleepTime 1000 "npm start" ./
