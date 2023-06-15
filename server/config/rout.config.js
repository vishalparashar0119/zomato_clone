import JwtPassport from 'passport-jwt';
import {UserModel} from '../database/';
import passport from 'passport';
// first make jwt strtategy which is use to validate token
const JwtStrategy =  JwtPassport.Strategy;
// then careate ExtractJwt to extract the token
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
   jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey    : "zomatoApp"
};

export default (passport) => {}

