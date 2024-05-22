import { Module } from "@nestjs/common";
import { MoiveController } from "./moive.controller";
import { MoiveService } from "./moive.service";
import { HttpModule } from "src/http/http.module";

@Module({
  imports: [HttpModule],
  controllers: [MoiveController],
  providers: [MoiveService]
})
export class MoiveModule {}
