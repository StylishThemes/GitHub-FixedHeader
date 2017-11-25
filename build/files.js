/* global require module */
"use strict";

const fs = require("fs");

function createUserCss(version) {
	return Promise.all(
			["./build/template.user.css", "./github-fixed-header.css"].map(name => readFile(name))
		)
		.then(files => writeFile(
			"github-fixed-header.user.css", processTemplate(files, version))
		);
}

function processTemplate(files, version) {
	return files.join("").replace("[[VERSION]]", version);
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
