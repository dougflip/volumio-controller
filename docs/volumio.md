Volumio Notes
==============

The `pushState` event is driving most of the current logic. The payload looks like:

```
{
  "status": "stop",
  "position": 0,
  "title": "Matilda Mother",
  "artist": "Pink Floyd",
  "album": "The Piper At The Gates Of Dawn",
  "albumart": "/albumart?web=Pink%20Floyd/The%20Piper%20At%20The%20Gates%20Of%20Dawn/extralarge&path=%2FNAS%2FHi_Res_Music%2FPINK%20FLOYD%20Discovery%20Studio%20Album%20Box%20Set%20(2011)%20FLAC%2F1967%20The%20Piper%20At%20The%20Gates%20Of%20Dawn",
  "uri": "mnt/NAS/Hi_Res_Music/PINK FLOYD Discovery Studio Album Box Set (2011) FLAC/1967 The Piper At The Gates Of Dawn/03 - Matilda Mother.flac",
  "trackType": "flac",
  "seek": 0,
  "duration": 189,
  "random": false,
  "repeat": false,
  "repeatSingle": false,
  "volume": 39,
  "mute": false,
  "stream": false,
  "updatedb": false,
  "volatile": false,
  "service": "mpd"
}
```

[Docs](https://volumio.github.io/docs/API/WebSocket_APIs.html)
