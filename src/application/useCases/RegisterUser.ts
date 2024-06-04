import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class RegisterUser {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<void> {
    await this.userRepository.register(user);
  }
}