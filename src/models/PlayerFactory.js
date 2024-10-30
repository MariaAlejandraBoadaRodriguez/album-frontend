// src/models/PlayerFactory.js

import Player from './Player.js';

class PlayerFactory {
    static createPlayer(data) {
        return new Player(data);
    }
}

export default PlayerFactory;

