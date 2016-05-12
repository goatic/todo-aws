#!/bin/bash

sudo yum check-update

#NodeJS 6.0.0
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
sudo yum -y install nodejs
sudo yum groupinstall 'Development Tools'
