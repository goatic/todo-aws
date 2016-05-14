#!/bin/bash

# Invoke the Forever module (to STOP our Node.js server).
cd /home/ec2-user/todos
./node_modules/forever/bin/forever stop ./source/server/entry
