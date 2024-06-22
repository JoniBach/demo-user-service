import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  create(user: Omit<User, 'id'>): User {
    const newUser = { ...user, id: this.idCounter++ };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, user: Partial<User>): User {
    const existingUser = this.findOne(id);
    if (existingUser) {
      const updatedUser = { ...existingUser, ...user };
      this.users = this.users.map(u => u.id === id ? updatedUser : u);
      return updatedUser;
    }
    return null;
  }

  remove(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
