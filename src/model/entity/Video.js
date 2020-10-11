import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';

const logger = moduleLogger('Video');

export class Video extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Video.init({
        id: {
            field: 'id',
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        url: {
            field: 'url',
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        contentLength: {
            field: 'content_length',
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 't_video',
        timestamps: false,
        schema: config.db.default.schema,
    });


Video.associate = () => {
    Video.hasMany(Incense);
};