#!/bin/sh

set -ex

if [ -n "${MIRAI_ACCOUNT}" ] && [ -n "${MIRAI_PASSWORD}" ]; then
  java -Dmirai.account=${MIRAI_ACCOUNT} -Dmirai.password=${MIRAI_PASSWORD} -jar mirai-console-wrapper.jar
else
  java -jar mirai-console-wrapper.jar
fi
