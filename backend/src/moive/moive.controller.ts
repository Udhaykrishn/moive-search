import { Controller, Get, Param, Query, HttpException, HttpStatus } from "@nestjs/common";
import { MoiveService } from "./moive.service";

@Controller("moive")
export class MoiveController {
  constructor(private readonly moiveService: MoiveService) {}

  @Get()
  async getMoive(@Query('title') moive: string) {
    try {
      const movieDetails = await this.moiveService.getMoive(moive);
      return movieDetails;
    } catch (error:any) {
      // Handle the error and send it to the frontend
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}