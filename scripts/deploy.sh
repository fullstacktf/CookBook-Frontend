#!/bin/bash

COMMAND="rm -rf ${REMOTE_PATH}/* "

ssh -o StrictHostKeyChecking=no -i deploymentCookBook -vp ${REMOTE_PORT} ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
scp -o StrictHostKeyChecking=no -i deploymentCookBook -v -r build/* ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}
