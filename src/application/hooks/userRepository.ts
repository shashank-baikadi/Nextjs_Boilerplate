import { useState } from 'react';
import { User } from '../../domain/entities/User';
import { RegisterUser } from '../useCases/RegisterUser';
import { UserRepositoryImpl } from '../../infrastructure/repositories/UserRepositoryImpl';

const userRepository = new UserRepositoryImpl();
const registerUseCase = new RegisterUser(userRepository);

export const useRegistration = () => {
  const [loading, setLoading] = useState(false);

  const register = async (user: User) => {
    setLoading(true);
    try {
      await registerUseCase.execute(user);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};