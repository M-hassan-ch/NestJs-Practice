import { Injectable } from '@nestjs/common';

@Injectable()
export class StestService {
    getSomething(): string {
        return "this is something from services of custom module through custum controller";
    }

}
