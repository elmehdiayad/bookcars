import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import * as env from '../config/env.config'

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token: string = req.signedCookies['x-access-token'] as string // backend and frontend
    || req.headers['x-access-token'] as string // mobile app

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' })
  }

  return jwt.verify(token, env.JWT_SECRET, (err) => {
    if (err) {
      console.log(err)
      return res.status(401).send({ message: 'Unauthorized!' })
    }

    return next()
  })
}

export default { verifyToken }
