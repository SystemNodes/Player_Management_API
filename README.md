# PLAYER MANAGEMENT API

A **RESTful API** built with **Node.js**, **Express**, and **Sequelize ORM** to manage football players.  
It supports **CRUD operations** such as creating, retrieving, updating, and deleting players.  

---

## Features

### Player Management
- Create a new player  
- Retrieve all players with formatted wages (`£`)  
- Retrieve a single player by ID  
- Update player details  
- Delete player with confirmation message (includes deleted player name and ID)  
- Deleting a player also deletes all related **player stats**

### Player Statistics Management
- Create new statistics for a player (goals, assists, yellow/red cards)  
- Retrieve all player stats  
- Retrieve stats for a single player (with player details)  
- Update a player’s stats  
- Delete a player’s stats (or delete both player and stats together with cascade delete)

---

## Database Schema

### Player Table
- `id` (UUID / Auto Increment) – Primary key  
- `playerName` – Name of the player  
- `wage` – Player wage  
- Other attributes (position, age, etc.)  

### PlayerStat Table
- `id` (UUID / Auto Increment) – Primary key  
- `playerId` – Foreign key referencing **Player**  
- `goals` – Number of goals scored  
- `assists` – Number of assists  
- `yellowCard` – Number of yellow cards  
- `redCard` – Number of red cards  

**Associations:**  
- A `Player` **has many** `PlayerStats`  
- A `PlayerStat` **belongs to** a `Player`

## Technologies Used

- [Node.js](https://nodejs.org/) – JavaScript runtime  
- [Express](https://expressjs.com/) – Web framework  
- [Sequelize](https://sequelize.org/) – ORM for SQL databases  
- [MySQL](https://www.mysql.com/) (or PostgreSQL/SQLite) – Database  