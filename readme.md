Volumio Controller
===================

A small volumio socket client to control additional components.


## Install

1. `npm install`

## Starting the Client

1. `npm start`

## Running as a Service

You can register via systemd by creating a [unit file](./docs/systemd.md)

## Wiring Components

Currently, this only tries to toggle a light on and off located at GPIO 2.
Eventually, more components will be added but for now, just wire the LEDs positive to GPIO 2
and the negative back to ground. Make sure to use an appropriate resistor for your LED!
