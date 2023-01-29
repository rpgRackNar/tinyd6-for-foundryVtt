declare var game: Game;

/**
 * Wrapper function for localize a string
 * @param string The string to localize
 * @returns The localized string
 */
export const localize = string => game.i18n.localize(string);
