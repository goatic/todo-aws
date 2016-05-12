#!/bin/bash

yum check-update

#NodeJS 6.0.0
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs npm
yum groupinstall -y 'Development Tools'

node --version
npm -v
