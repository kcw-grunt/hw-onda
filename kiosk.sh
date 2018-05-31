
#!/bin/bash
 
# Run this script in display 0 - the monitor
export DISPLAY=:0
 
# Hide the mouse from the display
unclutter &
 
# If Chromium crashes (usually due to rebooting), clear the crash flag so we don't have the annoying warning bar
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/zuluadmin/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/zuluadmin/.config/chromium/Default/Preferences
 
# Run Chromium and open tabs
 /usr/bin/chromium-browser --window-size=800,480 -kiosk --window-position=0,0 http://localhost:3000 &

cd ~/hw-onda
npm run dev
processNum="0"
while [ $processNum = 0 ]
do
processNum=$(ps aux | grep "node /home" | wc -l)
echo $processNum
if (($processNum > "0")); then
 echo "Execute"
 xdotool ket ctrl+r
fi

#/usr/bin/chromium-browser --window-size=800,480 --kiosk --window-position=0,0 http://localhost:3000 &

# Start the kiosk loop. This keystroke changes the Chromium tab
# To have just anti-idle, use this line instead:
# xdotool keydown ctrl; xdotool keyup ctrl;
# Otherwise, the ctrl+Tab is designed to switch tabs in Chrome
# #
while (true)
  do
    xdotool keydown ctrl+Tab; xdotool keyup ctrl+Tab;
    sleep 15
done

