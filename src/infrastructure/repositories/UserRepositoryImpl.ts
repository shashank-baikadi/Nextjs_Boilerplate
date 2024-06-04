import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { userApi } from '../api/userApi';

export class UserRepositoryImpl implements UserRepository {
  async register(user: User): Promise<void> {
    await userApi.register(user);
  }
}