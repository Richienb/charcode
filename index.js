"use strict"

const charRegex = require("char-regex")
const { default: ow } = require("ow")

module.exports = (input) => {
	ow(input, ow.string.is((val) => val.match(charRegex()).length === 1))

	return input.charCodeAt(0)
}

module.exports.from = (input) => {
	ow(input, ow.number.greaterThanOrEqual(0).lessThanOrEqual(65535))

	return String.fromCharCode(input)
}
