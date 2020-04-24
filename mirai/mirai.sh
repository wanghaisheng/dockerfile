#!/bin/sh

set -ex

java -Dmirai.account=${MIRAI_ACCOUNT} -Dmirai.password=${MIRAI_PASSWORD} -jar mirai-console-wrapper.jar
