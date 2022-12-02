import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://vpcozjsy:18QMiS4hmrAEEP77yuDfk8Mc0lCNchAP@kesavan.db.elephantsql.com/vpcozjsy",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;