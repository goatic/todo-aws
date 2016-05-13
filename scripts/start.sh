#!/bin/bash

cd /home/ec2-user/todos

npm run build
npm run start > /dev/null 2> /dev/null < /dev/null &
