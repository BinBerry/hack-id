import {Model, Column, Unique, Default, Table, Index, CreatedAt, UpdatedAt} from 'sequelize-typescript'; 


@Table
export class User extends Model {
    
    @Index
    @Default("")
    @Unique
    @Column
    email!: string;

    @Column
    firstName?: string;

    @Column
    lastName?: string;

    @Default(0)
    @Column
    role!: number;

    @Default("")
    @Column
    encryptedPassword!: string;

    @Unique
    @Column
    resetPasswordToken?: string;

    @Column
    resetPasswordSentAt?: Date;

    @Column
    rememberCreatedAt?: Date;

    @Default(0)
    @Column
    signInCount!: number;

    @Column
    currentSignInAt?: Date;

    @Column
    lastSignInAt?: Date;

    @Column
    currentSignInIp?: string;

    @Column
    lastSignInIp?: string;

    @Index
    @Column
    provider?: string;
    
    @Index
    @Column
    uid?: string;

    @Column
    reminderSentAt?: Date;

    @Default(true)
    @Column
    isActive?: boolean;
    
    @Default(false)
    @Column
    receiveWeeklyReport?: boolean;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}