#!/bin/bash

update_bundle () {
  BUNDLE_FOLDER=$1
  EXTENSION=$2
  NAME=$3
  INPUT_FOLDER=$4
  echo "Updating $NAME (*.$EXTENSION)"
  pushd . >/dev/null
  cd $BUNDLE_FOLDER
  if [[ $EXTENSION = "css" ]]; then
    find $INPUT_FOLDER \
    -type f -name "*.$EXTENSION" \
    -exec echo "@import \"{}\";" \; > \
    $NAME.css
  fi
  if [ "$EXTENSION" = "js" ] || [ "$EXTENSION" = "jsx" ]; then
    find $INPUT_FOLDER \
    -type f -name "*.$EXTENSION" \
    -exec echo "export * from '{}'" \; > \
    $NAME.js
  fi
  popd >/dev/null
}

CSS_BUNDLE_FOLDER=./packages/green-lib/bundles/css
JS_BUNDLE_FOLDER=./packages/green-lib/bundles/js

update_bundle $CSS_BUNDLE_FOLDER css components ../../components
update_bundle $CSS_BUNDLE_FOLDER css structures ../../css/structures
update_bundle $CSS_BUNDLE_FOLDER css utilities ../../css/utilities

update_bundle $JS_BUNDLE_FOLDER jsx components ../../components
update_bundle $JS_BUNDLE_FOLDER js jsx-helpers ../../jsx-helpers
