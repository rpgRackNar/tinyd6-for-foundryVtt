import {Character} from "./actor/character.js";
import {CharacterSheet} from "./actor/character-sheet.js";
import {preloadTemplates} from "./preloadTemplates.js";

// global FoundryVtt variables
declare var game: Game;


const SYSTEM_NAME = "tinyd6";

Hooks.once("init", async () => {
    console.log(`${SYSTEM_NAME.toUpperCase()} | Initializing ${SYSTEM_NAME.capitalize()}`);

    game[SYSTEM_NAME] = {
        Character,
    };
    CONFIG.Actor.documentClass = Character;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("Character", CharacterSheet, {makeDefault: true});

    await preloadTemplates(SYSTEM_NAME);
});
