import * as Joi from '@hapi/joi';

export const addContactSchema = Joi.object().keys({
    name: Joi
    .string()
    .required()
})

export const updateContactSchema = addContactSchema.keys({
    id: Joi
    .number()
    .required()
    .min(1)
})


