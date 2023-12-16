import { IsString, IsUrl } from 'class-validator';

export class ShortenDto {
  @IsUrl({}, { message: 'Invalid URL format' })
  fullUrl: string;
}

