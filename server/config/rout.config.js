import JwtPassport from "passport-jwt";
import { UserModel } from "../database/user";


// first make jwt strtategy which is use to validate token
const JwtStrategy =  JwtPassport.Strategy;


// then careate ExtractJwt to extract the token
const ExtractJwt = JwtPassport.ExtractJwt;


const options = {
   jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey    : "zomatoApp"
};

export default (passport) => {
   passport.use(new JwtStrategy(options , async(jwt__payLoad , done ) =>{
      try {
         const doesUserExists = await  UserModel.findById(jwt__payLoad.user);

         if(!doesUserExists)
         {
            return done(null , false);
         }

         return done(null , doesUserExists);
      } catch (error) {
         throw new Error(error);
      }
   }))
}

