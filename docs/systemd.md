systemd
========

Sample unit file for installation:

```
[Unit]
Description=Volumio Controller
After=network.target

[Service]
User=volumio
WorkingDirectory=/home/volumio/volumio-controller
ExecStart=/usr/local/bin/node src/main.js
Restart=always
RestartSec=500ms
StartLimitInterval=0

[Install]
WantedBy=multi-user.target
```
