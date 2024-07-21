import {Model, Column, Unique, Default, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript'; 

@Table
export class OauthTokens extends Model {
    @Default(null)
    @Unique
    @Column
    token!: string

    @Column
    resourceOwnerId?: string
    
    @Unique
    @Column
    refreshToken?: string

    @Column
    applicationId?: string

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}