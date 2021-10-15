import { Injectable } from '@nestjs/common';

const host = {
  id: '1',
  name: 'Daniel Cavalcante',
};

const speaker = {
  id: '2',
  name: 'Danilo Assis',
};

const users = [speaker, host];

export type User = {
  id: string;
  name: string;
};

@Injectable()
export class UserService {
  get(): User[] {
    return users;
  }
}
