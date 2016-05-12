#!/bin/bash

sudo yum check-update

#NodeJS 6.0.0
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
sudo yum -y install nodejs npm
sudo yum groupinstall -y 'Development Tools'
