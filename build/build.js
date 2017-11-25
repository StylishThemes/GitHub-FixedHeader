/* global require */
"use strict";

const pkg = require("../package.json"),

	{
		del,
		createUserCss
	} = require("./files");

del("github-fixed-header.user.css")
	.then(() => createUserCss(pkg.version))
	.then(() => console.log("\x1b[32m%s\x1b[0m", "Fixed header usercss build complete"))
	.catch(err => {
		throw err;
	});
