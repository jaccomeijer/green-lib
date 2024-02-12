#!/bin/bash

read -p "Cloned element name (dash-case): " COMP_NAME_DASH
COMP_NAME_CAMEL=`echo $COMP_NAME_DASH | awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1'`

echo $COMP_NAME_DASH
echo $COMP_NAME_CAMEL

mkdir -p ./$COMP_NAME_DASH
cp ./empty-element/* ./$COMP_NAME_DASH/

mv ./$COMP_NAME_DASH/empty-element.ce.css \
./$COMP_NAME_DASH/$COMP_NAME_DASH.ce.css

mv ./$COMP_NAME_DASH/empty-element.jsx \
./$COMP_NAME_DASH/$COMP_NAME_DASH.jsx

mv ./$COMP_NAME_DASH/empty-element.mdx \
./$COMP_NAME_DASH/$COMP_NAME_DASH.mdx

mv ./$COMP_NAME_DASH/empty-element.ce.js \
./$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js


sed -i '' -e "s/EmptyElement/$COMP_NAME_CAMEL/g" ./$COMP_NAME_DASH/$COMP_NAME_DASH.jsx
sed -i '' -e "s/empty-element/$COMP_NAME_DASH/g" ./$COMP_NAME_DASH/$COMP_NAME_DASH.jsx

sed -i '' -e "s/EmptyElement/$COMP_NAME_CAMEL/g" ./$COMP_NAME_DASH/$COMP_NAME_DASH.mdx
sed -i '' -e "s/empty-element/$COMP_NAME_DASH/g" ./$COMP_NAME_DASH/$COMP_NAME_DASH.mdx

sed -i '' -e "s/EmptyElement/$COMP_NAME_CAMEL/g" ./$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js
sed -i '' -e "s/empty-element/$COMP_NAME_DASH/g" ./$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js
