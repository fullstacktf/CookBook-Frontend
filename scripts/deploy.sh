#!/bin/bash

scp -o StrictHostKeyChecking=no -i deploymentCookBook -v -r build ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}
