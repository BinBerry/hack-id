/* eslint-disable @typescript-eslint/no-unused-vars */
import passport, { use } from 'passport';
import { Express, Request, Response, NextFunction } from "express";
import * as OAuth2Strategy from 'passport-oauth2';
import { User } from '../models/User';

passport.serializeUser((user, done)=> {
    console.log("serializing user");
    console.log((user as User).id)
    done(null, (user as User).id)
})

passport.deserializeUser((id: number, done) => {
    User.findByPk(id).then((user)=>{
        console.log("deserialized user: " + user)
        done(null, user)
    }).catch((error) =>{
        console.log("error well deserializing user:" + error)
    }) 
  
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export function initPassport(app: Express) {

    console.log("test init passport")
    app.use(passport.initialize())
    app.use(passport.session())
    passport.use(new OAuth2Strategy.Strategy({
        tokenURL: 'https://my.mlh.io/oauth/token'!,
        authorizationURL: 'https://my.mlh.io/oauth/authorize'!,
        clientID: process.env.mymlh_application_id!,
        clientSecret: process.env.mymlh_secret!,
        callbackURL: '/auth/mymlh/callback'!,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    }, async (access_token: any, refreshToken: string, profile: any, done: any) =>{
        console.log(refreshToken)
        console.log(profile)
        const userData = await getUserInfo(access_token)
        let loginUser = await User.findOne({where: {email: userData.email}})
        if(loginUser === null){
            loginUser = await User.create({
                email: userData.email,
                firstName: userData.first_name,
                lastName: userData.last_name,
            });
            console.log(loginUser)
            console.log("New user created for " + userData.email)
        } else {
            loginUser.signInCount += 1;
            loginUser.save();
            console.log(loginUser)
            console.log("user already exists updating sign in count");
        }
        done(null, loginUser);
    }))
}

async function getUserInfo(code:string) {
    console.log(code)
    const response = await fetch(`https://my.mlh.io/api/v3/user.json?access_token=${code}`)
    const json = await response.json();
    if(response.ok) {
        console.log(json.data);
        return json.data      
    } else {
        console.log("Error retrieve User data");
        console.log(json)
    }
}