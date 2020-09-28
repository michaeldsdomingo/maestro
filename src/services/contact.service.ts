import { Injectable } from '@nestjs/common';
import { executionAsyncResource } from 'async_hooks';
import { Contact } from '../interfaces/contact.interface';

const contacts : Contact[] = [];
var addCount: number = 0;


@Injectable()
export class ContactService {
  get() {
    return new Promise(executor);
    function executor(resolve, reject) {
      if (contacts.length > 0) {
        resolve({isSuccessful: true, data: contacts});
      }
      else {
        reject({isSuccessful: false, error: 'Contacts not found.'});
      }
    }
  }

  add(contact) {
      return new Promise(executor); 
      function executor(resolve, reject) {
        const newContact : Contact = {id: ++addCount, name: contact.name};
        contacts.push(newContact)
        resolve({isSuccessful: true, id: addCount})
      }
  }

  update(updatedContact) {
      return new Promise(executor);

      function executor(resolve, reject) {
        const indexToBeUpdated = contacts.findIndex(contact => contact.id === updatedContact.id)
        if (indexToBeUpdated > -1) {
            contacts[indexToBeUpdated] = updatedContact;
            resolve({isSuccessful: true})
        }
        else {
            reject({isSuccessful: false, error: `Contact with id of ${updatedContact.id} is not found`})
        }
      }
  }

  delete(id) {
      return new Promise(executor);

      function executor(resolve, reject) {
          const indexToBeDeleted = contacts.findIndex(contact => contact.id === parseInt(id))
          if (indexToBeDeleted > -1) {
              contacts.splice(indexToBeDeleted, 1)
              resolve({isSuccessful: true})
          }
          else {
            reject({isSuccessful: false, error: `Contact with id of ${id} is not found`})
          }
      }
  }
}