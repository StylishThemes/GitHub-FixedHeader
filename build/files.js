/* global require module */
"use strict";

const fs = require("fs");

function createUserCss(version) {
	return Promise.all(
			["./build/template.user.css", "./github-fixed-header.css"]
				.map(name => readFile(name))
		)
		.then(files => updateFiles(files, version))
}

function updateFiles(files, version) {
	const date = (new Date()).toISOString().substring(0, 10),
		// update v00.00.00 (0000-00-00)
		mainStyle = files[1].replace(
			/v([\d.]+){3} \([\d-]+\)/,
			`v${version} (${date})`
		),
		usercss = (files[0] + mainStyle).replace("[[VERSION]]", version);
	writeFile("github-fixed-header.user.css", usercss);
	writeFile("github-fixed-header.css", mainStyle);
}

function readFile(name) {
	return new Promise((resolve, reject) => {
		fs.readFile(name, "utf8", (err, file) => {
			if (err) {
				return reject(err);
			}
			resolve(file);
		});
	});
}

function writeFile(name, obj) {
	return new Promise((resolve, reject) => {
		fs.writeFile(name, obj, "utf8", err => {
			if (err) {
				console.log(`Error writing ${name}`, err);
				return reject();
			}
			resolve();
		});
	});
}

function del(name) {
	return new Promise((resolve, reject) => {
		fs.unlink(name, err => {
			// ignore if file doesn't exist
			if (err && err.code !== "ENOENT") {
				return reject();
			}
			resolve();
		});
	});
}

module.exports = {
	del,
	createUserCss
};
