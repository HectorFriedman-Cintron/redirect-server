#!/usr/bin/env node

const path = require('path');

var config = require("nconf")
	.argv()
	.file({file: path.join(__dirname, "/../config.json")});

const redirect = require('../redirect')(config.get('redirect'), config.get('port') || 3000);
console.log('redirect running on port %d', redirect.address().port || 3000);