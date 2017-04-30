#!/bin/bash
path=$(pwd)
cd $path
echo $PWD
yarn prod
cp -rf $path/dist/public/* $path/public/
