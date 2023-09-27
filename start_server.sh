#!/usr/bin/env sh

if [ "$DISPLAY" != "" ]; then
   if [ "$1" != "--rex" -a "$2" != "--rex" ]; then
      konsole --nofork -e /bin/sh $0 --rex 2>/dev/null || xterm -e /bin/sh $0 --rex 2>/dev/null || /bin/sh $0 --rex 2>/dev/null
      exit
   fi
fi

## SCRIPT ##


python3 -m http.server


## END SCRIPT ##

echo "Press Enter..."
read junk
