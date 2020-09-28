import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const jwt = require("jsonwebtoken");

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const token = req.headers['x-access-token']
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, 'supersecret' as string, (err: any, username: any) => {
        if (err) return res.sendStatus(403)
        next()
    })
  }
}
