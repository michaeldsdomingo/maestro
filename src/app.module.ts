import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './auth.middleware'
import { AppController } from './app.controller';
import { AuthController } from './controllers/auth.controller'
import { ContactController } from './controllers/contact.controller';
import { AppService } from './app.service';
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ContactController],
  providers: [AppService, AuthService, ContactService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('contacts');
  }
}
