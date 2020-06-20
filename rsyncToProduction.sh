#!/usr/bin/env bash
echo
echo
echo 'start deploy'
cp ./build/user-center.html ./build/index.html
rsync -rv --exclude=tmp ./build/ mf151:/data/www.mafengs.com/public/static/user-center/
echo 'deploy complete'
