#!/bin/bash

yum check-update

#NodeJS 6.0.0
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs
yum groupinstall 'Development Tools'
