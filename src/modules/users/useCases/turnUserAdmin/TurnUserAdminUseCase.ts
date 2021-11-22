import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User not exists');
    }

    const setAdminUser = this.usersRepository.turnAdmin(user);

    return setAdminUser;
  }
}

export { TurnUserAdminUseCase };
