import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ShortUrl } from './schemas/url.schema';
import * as shortid from 'shortid';

@Injectable()
export class ShortUrlService {
  constructor(@InjectModel(ShortUrl.name) private shortUrlModel: Model<ShortUrl>) {}

  async createShortUrl(fullUrl: string): Promise<ShortUrl> {
    const short = this.generateShortUrl();
    const shortUrl = new this.shortUrlModel({ full: fullUrl, short });
    return shortUrl.save();
  }

  async getAllShortUrls(): Promise<ShortUrl[]> {
    return this.shortUrlModel.find().exec();
  }

  async findShortUrlByCode(shortUrlCode: string): Promise<ShortUrl> {
    return this.shortUrlModel.findOne({ short: shortUrlCode }).exec();
  }

  private generateShortUrl(): string {
    return shortid.generate();
  }
}
