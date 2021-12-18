#!/bin/bash
cd /tmp/bundle/
npm run build
rm -rf /serve/cbronson/*
mv /tmp/bundle/* /serve/cbronson

