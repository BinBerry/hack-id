import passport from 'passport';
import * as OAuth2Strategy from 'passport-oauth2';

console.log("hit here")

passport.use(new OAuth2Strategy.Strategy({
    tokenURL: 'https://my.mlh.io/oauth/token'!,
    authorizationURL: 'https://my.mlh.io/oauth/authorize'!,
    clientID: process.env.mymlh_application_id!,
    clientSecret: process.env.mymlh_secret!,
    callbackURL: '/auth/mymlh/redirect'!
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
}, (accessToken: string, refreshToken: string, profile: passport.Profile, callback: any) =>{
    console.log("mymlh user id: " + profile.id);
    console.log("mymlh user displayname: " + profile.displayName);
}))