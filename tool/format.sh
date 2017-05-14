# Check if js-beautify is installed.
$(js-beautify > /dev/null 2>&1)
if [ $? == 0 ]; then
  npm -g install js-beautify
fi

find . -not -path "*node_modules*" -name "*.js" -exec js-beautify -r {} \;
