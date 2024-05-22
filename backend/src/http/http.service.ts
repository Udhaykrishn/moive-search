import { Injectable } from "@nestjs/common";
import axios from "axios";
import { Moive } from "./../dto/moive.dto";

@Injectable()
export class HttpService {
  private readonly apiKey = "da01e821";

  async getMoiveId(moiveName: string): Promise<string> {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${moiveName}&apikey=${this.apiKey}`
      );
      if (response.data.Response === "True") {
        const moiveDetails: Moive = response.data.Search[0];
        return moiveDetails.imdbID;
      } else {
        throw new Error(response.data.Error);
      }
    } catch (error: any) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  async geMoiveDetails(id: string) {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error: ${error.message}`);
    }
  }
}
