// src/models/Player.js

class Player {
    constructor({ name, position, club, age, nationality, imgSrc, goals_2024, assists, height, weight, titles_won, market_value, type, star_year, club_id }) {
        this.name = name;
        this.position = position;
        this.club = club;
        this.age = age;
        this.nationality = nationality;
        this.imgSrc = imgSrc;
        this.goals_2024 = goals_2024;
        this.assists = assists;
        this.height = height;
        this.weight = weight;
        this.titles_won = titles_won;
        this.market_value = market_value;
        this.type = type;
        this.star_year = star_year;
        this.club_id = club_id;
    }
}

export default Player;
