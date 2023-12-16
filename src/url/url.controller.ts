import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Redirect,
  Render,
  InternalServerErrorException,
  UseGuards,
  Res,
} from '@nestjs/common';
import { ShortUrlService } from './url.service';
import { ShortenDto } from './dto/url.dto';
import { ShortUrl } from './schemas/url.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Get('/shortUrl')
  @Render('url')
  async getAllShortUrls() {
    try {
      const shortUrls = await this.shortUrlService.getAllShortUrls();
      return { shortUrls };
    } catch (error) {
      console.error('Error while fetching short URLs:', error);
      throw new InternalServerErrorException('Failed to fetch short URLs');
    }
  }

  @Post('/shortUrls')
  @UseGuards(AuthGuard())
  async shortenUrl(@Body() shortenDto: ShortenDto, @Res() res): Promise<void> {
    try {
      const createdShortUrl = await this.shortUrlService.createShortUrl(
        shortenDto.fullUrl,
      );
      const shortUrls = await this.shortUrlService.getAllShortUrls();
      return res.render('url', { shortUrls });
    } catch (error) {
      console.error('Error while shortening URL:', error);
      res.status(500).json({ error: 'Failed to shorten URL' });
    }
  }

  // redirects to the full URL based on the short code
  @Get('/:shortUrl')
  @Redirect()
  async redirectToFullUrl(@Param('shortUrl') shortUrlCode: string) {
    const shortUrl =
      await this.shortUrlService.findShortUrlByCode(shortUrlCode);

    if (!shortUrl) {
      return { url: '/' };
    }

    return { url: shortUrl.full };
  }
}
