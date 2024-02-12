#!/bin/bash

read -p "Component name (dash-case): " COMP_NAME_DASH
COMP_NAME_CAMEL=`echo $COMP_NAME_DASH | awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1'`

read -p "Parent name (lower case): " PARENT_COMP_DASH
PARENT_COMP_CAMEL=`echo $PARENT_COMP_DASH | awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1'`

echo $COMP_NAME_DASH
echo $COMP_NAME_CAMEL

mkdir -p src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH
cp src/components/element/empty-component/* src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/

mv src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component-ce.css \
src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-ce.css

mv src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component-ssr.jsx \
src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-ssr.jsx

mv src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component-story.mdx \
src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx

mv src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/empty-component.ce.js \
src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js


sed -i '' -e "s/EmptyComponent/$COMP_NAME_CAMEL/g" src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-ssr.jsx
sed -i '' -e "s/empty-component/$COMP_NAME_DASH/g" src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-ssr.jsx

sed -i '' -e "s/EmptyComponent/$COMP_NAME_CAMEL/g" src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx
sed -i '' -e "s/empty-component/$COMP_NAME_DASH/g" src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx
sed -i '' -e "s/Element/$PARENT_COMP_CAMEL/g" src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH-story.mdx

sed -i '' -e "s/EmptyComponent/$COMP_NAME_CAMEL/g" src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js
sed -i '' -e "s/empty-component/$COMP_NAME_DASH/g" src/components/$PARENT_COMP_DASH/$COMP_NAME_DASH/$COMP_NAME_DASH.ce.js
