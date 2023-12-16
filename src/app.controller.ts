import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['', 'index']) // Handles both the root URL ("/") and "/index"
  @Render('index') // Renders the 'index.ejs' template
  index() {
    return {};
  }

  @Get('login')
  @Render('login')
  login() {
    return {};
  }
}
