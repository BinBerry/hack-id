/* eslint-disable @typescript-eslint/no-unused-vars */
import passport from 'passport';
import { Express, Request, Response, NextFunction } from "express";
import * as OAuth2Strategy from 'passport-oauth2';
import * as token from '../models/oauth_tokens';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
passport.serializeUser((auth: any, done: any) => {

})

export function initPassport(app: Express) {

    console.log("test init passport")
    app.use(passport.initialize())
    app.use(passport.session())
    passport.use(new OAuth2Strategy.Strategy({
        tokenURL: 'https://my.mlh.io/oauth/token'!,
        authorizationURL: 'https://my.mlh.io/oauth/authorize'!,
        clientID: process.env.mymlh_application_id!,
        clientSecret: process.env.mymlh_secret!,
        callbackURL: '/auth/mymlh/callback'!
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    }, (access_token: any, done: any) =>{
        getUserInfo(access_token);
    }))
}

async function getUserInfo(code:string) {
    const response = await fetch(`https://my.mlh.io/api/v3/user.json?access_token=${code}`)
    const json = await response.json();
    console.log(response.ok);
    console.log(response.status);
    console.log(response.text);
    console.log(json);
}