import {Module } from "@nestjs/common";
import { CatsController } from "./cat.CatsController";
import { CastsService } from "./cat.CastsService";

@Module(
    {
    controllers: [CatsController],
    providers:[CastsService],
    }
)
export class CastsModule{

}
