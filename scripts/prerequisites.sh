#!/bin/bash

cd tmp/scripts
apt-get update

#NodeJS 6.0.0
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs
