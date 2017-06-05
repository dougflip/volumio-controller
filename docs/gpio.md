GPIO
=====

Normally I use [onoff](https://github.com/fivdi/onoff) for GPIO access in Node.
However, it won't install on my volumio pi and I am guessing this is because it is missing
necessary pre-reqs (gcc/g++ 4.8 or higher?). I don't want to mess with upgrading packages
on that pi just yet because I don't know if that will mess with volumio.

For now, I am just manually exporting the GPIO I need:

```
echo "2" > /sys/class/gpio/export
echo "out" > /sys/class/gpio/gpio2/direction
```

and then toggling the value in code via `child_process`:

```
echo "1" > /sys/class/gpio/gpio23/value
echo "0" > /sys/class/gpio/gpio23/value
```

[Docs](http://www.raspberry-projects.com/pi/command-line/io-pins-command-line/io-pin-control-from-the-command-line)

That is simple enough but reading in a button press might prove to be harder!
