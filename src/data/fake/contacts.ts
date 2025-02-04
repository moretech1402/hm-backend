import { faker } from '@faker-js/faker';
import random from '../../utils/random';
import { formatToSQLDate } from '../../utils/dates';


export const fakeContact = () => {
  const archived = random.boolean();

  return {
  date: formatToSQLDate(faker.date.past()),
  customer: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  subject: faker.lorem.sentence(),
  comment: faker.lorem.sentences(),
  archived: archived
  }
}