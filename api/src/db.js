require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const UserModel = require("./models/UserModels/User");
const UserCredentialModel = require("./models/UserModels/UserCredential");
const PersonalDexModel = require("./models/UserModels/PersonalDex");
const PokemonModel = require("./models/PokemonModels/Pokemon");
const PokemonStatsModel = require("./models/PokemonModels/PokemonStatPoints");
const PokemonAbilitiesModel = require("./models/PokemonModels/PokemonAbilities");
const PokemonTypesModel = require("./models/PokemonModels/PokemonTypes");



const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, BDD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${Number(DB_PORT)}/${BDD}`,
  {
    logging: true, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
// const basename = path.basename(__filename);

// const modelDefiners = [];

// INICIALISAMOS LOS MODELOS

UserModel(sequelize);
UserCredentialModel(sequelize);
PersonalDexModel(sequelize);


PokemonModel(sequelize);
PokemonStatsModel(sequelize);
PokemonAbilitiesModel(sequelize);
PokemonTypesModel(sequelize);

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//    .filter(
//       (file) =>
//          file.indexOf('.') !== 0 &&
//          file !== basename &&
//          file.slice(-3) === '.js'
//    )
//    .forEach((file) => {
//       modelDefiners.push(require(path.join(__dirname, '/models', file)));
//    });

// Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [
//    entry[0][0].toUpperCase() + entry[0].slice(1),
//    entry[1],
// ]);
// sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  User,
  UserCredentials,
  PersonalDex,
  Pokemon,
  PokemonStatPoints,
  PokemonTypes,
  PokemonAbilities,
} = sequelize.models;

//
// Aca vendrian las relaciones

// UN USUARIO TIENE UNA UN SOLO JUEGO DE CREDENCIALES
// EL JUEGO DE CREDENCIALES PERTENECE A UN SOLO USUARIO

User.hasOne(UserCredentials, {
  onDelete: "CASCADE",
});
UserCredentials.belongsTo(User);

// UN USUARIO PUEDE TENER MUCHOS POKEDEX
// EL DECK PERTENECE A UN SOLO USUARIO

User.hasOne(PersonalDex);
PersonalDex.belongsTo(User);

//LOS DECKS TIENEN MUCHOS POKEMONS
//UN POKEMOSN PUEDE APARECER EN MUCHOS DECKS

PersonalDex.belongsToMany(Pokemon, { through: "dex_pokemon" , timestamps: false,});
Pokemon.belongsToMany(PersonalDex, { through: "dex_pokemon" , timestamps: false,});

// POKEMONS TIENEN UN SET DE STATS
// EL SET DE STATS PERTENECE A UN SOLO POKEMON

Pokemon.hasOne(PokemonStatPoints);
PokemonStatPoints.belongsTo(Pokemon);

// POKEMON PUEDE SER DE VARIOS TIPOS
// EL TIPO REPRESENTA A VARIOS POKEMONS
Pokemon.belongsToMany(PokemonTypes, { through: "pokemon_types" , timestamps: false,});
PokemonTypes.belongsToMany(Pokemon, { through: "pokemon_types" , timestamps: false,});

//POKEMON PUEDE TENER HASTA 2 HABILIDADES
//LA HABILIDAD PUEDE PERTENECER A MUCHOS POKEMNO
Pokemon.belongsToMany(PokemonAbilities, { through: "pokemon_abilities" , timestamps: false,});
PokemonAbilities.belongsToMany(Pokemon, { through: "pokemon_abilities" , timestamps: false,});

//
// Fin de las Relaciones

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
