import { Controller, Get, Post, Res, Request, Body, UsePipes, Put, Delete, Param } from '@nestjs/common';
import { ContactService } from '../services/contact.service';
import { addContactSchema, updateContactSchema } from '../schemas/ContactSchema';
import { AddContactDto } from '../schemas/addContact.dto'
import { JoiValidationPipe } from '../schemas/validationPipe';
import { UpdateContactDto } from 'src/schemas/updateContact.dto';
import { response } from 'express';

@Controller('contacts')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Get()
    getContacts(@Res() res) {
        this.contactService.get()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        });
    }

    @UsePipes(new JoiValidationPipe(addContactSchema))
    @Post()
    addContact(@Res() res, @Body() addContactSchema: AddContactDto) {
        this.contactService.add(addContactSchema)
        .then(response => {
            res.status(201).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    }

    @UsePipes(new JoiValidationPipe(updateContactSchema))
    @Put()
    updateContact(@Res() res, @Body() updateContactSchema: UpdateContactDto) {
        this.contactService.update(updateContactSchema)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    }

    @Delete(':id')
    deleteContact(@Res() res, @Param() params) {
        this.contactService.delete(params.id)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    }
}
