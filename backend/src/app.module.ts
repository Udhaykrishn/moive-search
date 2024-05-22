import { Module } from "@nestjs/common";
import { MoiveModule } from "./moive/moive.module";
import { HttpModule } from "./http/http.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    MoiveModule,
    HttpModule,

    ThrottlerModule.forRoot([
      {
        ttl: 3000,
        limit: 3,
      },
    ]),
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
