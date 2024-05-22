import { Injectable } from "@nestjs/common";
import { HttpService } from "src/http/http.service";

@Injectable()
export class MoiveService {
  constructor(private readonly httpService: HttpService) {}

  async getMoive(details: string) {
    try {
      const id = await this.httpService.getMoiveId(details);
      if (!id) {
        throw new Error(`Movie with title '${details}' not found`);
      }

      const { Title, Year, Poster, Ratings, Plot, Language, Released, Actors } =
        await this.httpService.geMoiveDetails(id);

      return { Title, Year, Poster, Ratings, Plot, Language, Released, Actors };
    } catch (error: any) {
      // Wrap the error in a new Error instance to ensure it's an Error object
      throw new Error(`Failed to fetch movie details: ${error.message}`);
    }
  }
}
