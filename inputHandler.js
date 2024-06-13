export default class InputHandler {
    // in map, pass player as entity. 
    constructor(entity) {

        // keys: the actual keypresses. Values: direction for player to move.
        const keyDirectionMap = {
            'd': 'right',
        };

        document.addEventListener("keydown", (event) => {

            let direction = keyDirectionMap[event.key];
            // console.log(direction);
            /* direction is simply a pressed key. If it's in the map, return its value. 
            Otherwise, its undefined */

            // if direction exists in map and it's value in player.directions is true...
            // note that this runs ONLY if a key is pressed down
            if (direction) {
                entity.disabled = false;
            }
        });
    }
};