#!/bin/bash

read -p "Component name (dash-case): " COMP_NAME_DASH
COMP_NAME_CAMEL=`echo $COMP_NAME_DASH | awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1'`

read -p "Parent name (lower case): " PARENT_COMP_DASH
PARENT_COMP_CAMEL=`echo $PARENT_COMP_DASH | awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1'`

echo $COMP_NAME_DASH
echo $COMP_NAME_CAMEL

mkdir -p ./$PARENT_COMP_DASH/$COMP_NAME_DASH
cp ./element/empty-component/* ./$PARENT_COMP_DASH/$COMP_NAME_DASH/

mv ./$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component.ce.css \
./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH.ce.css

mv ./$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component-ssr.jsx \
./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-ssr.jsx

mv ./$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component-story.mdx \
./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx

mv ./$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component.ce.js \
./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js


sed -i '' -e "s/EmptyComponent/$COMP_NAME_CAMEL/g" ./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-ssr.jsx
sed -i '' -e "s/empty-component/$COMP_NAME_DASH/g" ./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-ssr.jsx

sed -i '' -e "s/EmptyComponent/$COMP_NAME_CAMEL/g" ./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx
sed -i '' -e "s/empty-component/$COMP_NAME_DASH/g" ./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx
sed -i '' -e "s/Element/$PARENT_COMP_CAMEL/g" ./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx

sed -i '' -e "s/EmptyComponent/$COMP_NAME_CAMEL/g" ./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js
sed -i '' -e "s/empty-component/$COMP_NAME_DASH/g" ./$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js
