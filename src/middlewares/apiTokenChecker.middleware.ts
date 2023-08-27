import { BadRequestException, Request, Response } from "@nestjs/common";
import { NextFunction } from "express";

export default function apiTokenChecker(req: Request, res: Response, next: NextFunction) {

    if (req.headers['api-token'] !== 'testToken') {
        throw new BadRequestException();
    }
    next();
}