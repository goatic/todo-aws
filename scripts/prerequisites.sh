#!/bin/bash

apt-get update

#NodeJS 6.0.0
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs

#MongoDB, latest
apt-get install -y mongodb-org
