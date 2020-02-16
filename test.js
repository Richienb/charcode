const test = require("ava")
const charcode = require(".")

test("main", (t) => {
	t.is(charcode("a"), 97)
	t.is(charcode.from(97), "a")
})
