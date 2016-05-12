#!/bin/bash

sudo apt-get update

#NodeJS 6.0.0
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs npm
