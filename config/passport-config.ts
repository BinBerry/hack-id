import passport from 'passport';
import { Express, Request, Response, NextFunction } from "express";
import * as OAuth2Strategy from 'passport-oauth2';
import * as token from '../models/oauth_tokens';

passport.serializeUser(() => {

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
    }, (accessToken: any) =>{
        console.log("test first callback", accessToken);
    }))
}