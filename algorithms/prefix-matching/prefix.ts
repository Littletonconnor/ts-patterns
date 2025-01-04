/**
 * Prefix match implementation
 *
 * Take a string and a pref and return whether or not the prefix belongs in the string.
 *
 * EXAMPLE:
 * ----------
 * Given the string: "Connor"
 * Given the prefix: "Con"
 * - We iterate through each character of the prefix and try to align it with the same character of the string
 * - Iteration at position 0:
 *   prefix  = C
 *   string  = C
 *
 * - Iteration at position 1:
 *   prefix  = o
 *   string  = o
 *
 * - Iteration at position 2:
 *   prefix  = n
 *   string  = n
 *
 * @param str - The string to check.
 * @param prefix - The string to check against str.
 * @returns A boolean value indicating whether prefix is a, well, prefix.
 */
export function prefix(str: string, p: string): boolean {
  // Base case: if prefix is empty or longer than str we are not a prefix
  if (!p.length || p.length > str.length) {
    return false;
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== str[i]) {
      return false;
    }
  }

  return true;
}
