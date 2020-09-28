import { Controller, Get, Res, Post, Request } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post('login') 
    login(@Request() req, @Res() res) {
        
        this.authService.login(req.body.username)
            .then(response => {
                res.status(200).send(response)
            })
            .catch(error => {
                return error;
            });
    }


    
  
}
