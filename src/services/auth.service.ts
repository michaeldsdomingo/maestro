import { Injectable } from '@nestjs/common';
const jwt = require("jsonwebtoken");

@Injectable()
export class AuthService {
  login(username) {
    return new Promise(executor);
    function executor(resolve, reject) {
      const isSuccessful = true;
      if (isSuccessful) {
        const token = jwt.sign({username}, 'supersecret', {
            expiresIn: 86400000
        });
        resolve({isSuccessful: true, token: token});
      }
      else {
        reject({error: 'Unable to login'});
      }
    }
    
  }
}
