#!/usr/bin/env bash
echo
echo
echo 'start deploy'
cp ./build/user-center.html ./build/index.html
rsync -rv --exclude=tmp ./build/ mf238:/qc/testing-web/ronie/www-static/static/user-center/
echo 'deploy complete'
