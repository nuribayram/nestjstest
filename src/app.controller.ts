import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationListDto{
  locations: string[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    return {
      locations: [
        'Location 1',
        'Location 2',
        'Location 3'
      ]
    }
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hi')
  sayHi(): string {
    return this.appService.sayHi();
  }
}
