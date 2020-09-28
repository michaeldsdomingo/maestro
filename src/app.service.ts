import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return "Welcome To Michael Domingo's App. Here you can log in to Get, Add, Update, and Delete Contacts"
  }
}
