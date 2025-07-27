
module.exports = (sequelize, DataTypes) => {
    const Form = sequelize.define('Form', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        message: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        isCallBack:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'is_call_back'
        }
    })

    return Form;
}