#!/bin/bash

set -ex

cd client
npm install
npm start &

cd ../server
npm install
npm start &

cd ..

wait