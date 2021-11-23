const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "Clase", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                validate:{
                    notEmpty: true,
                },
                allowNull: false,
                unique: true,
            },
            description: {
                type: DataTypes.TEXT,
                validate:{
                    notEmpty: true,
                },
                allowNull: false,
            },
            studio_material: {
                type: DataTypes.STRING(300),
                validate:{
                    irUrl: true,
                }
            },
            valoration: {
                type: DataTypes.ENUM("1","2","3","4","5"),
                allowNull: false,
            },
            video_link: {
                type: DataTypes.STRING(300),
                validate:{
                    irUrl: true,
                }
            },
            game_link: {
                type: DataTypes.STRING(300),
                validate:{
                    irUrl: true,
                }
            },
            state: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            difficulty: {
                type: DataTypes.ENUM("Basica","Intermedia","Alta"),
                allowNull: false,
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }
    );
};


// ID ✅
// Título ✅
// Descripción ✅
// Material de Estudio ✅
// Valoración (Estrellas) ✅
// Link video ✅
// Link juego ✅
// Estado ✅
// Nivel de Dificultad (bajo, medio, alto) ✅
// Fecha ✅
