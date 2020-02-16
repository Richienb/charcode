declare const charcode: {
	/**
	 * Get the charcode of a character.
	 * @param input The character to get the charcode of.
	 * @example
	 * ```
     * const charcode = require("charcode");
     *
     * charcode("a");
     * //=> 97
	 * ```
	*/
	(input: string): number

	/**
	 * Get the character of a charcode.
	 * @param input The charcode to get the character of.
	 * @example
	 * ```
	 * const charcode = require("charcode");
	 *
	 * charcode.from(97);
	 * //=> "a"
	 * ```
	*/
	from(input: number): string
}

export = charcode
