#!/bin/sh
if [ - "$1" ]
then
  echo "Which folder do you want to deploy to Github ? "
  exit 1
fi
git subtree push --prefix $1 origin gh-pages