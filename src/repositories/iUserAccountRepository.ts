import { User } from "../domain/entity/User";
import { ICreateUserAccountDTO } from "../dto/iCreateUserAccountDTO";

export interface IUserAccountRepository {
  create(data: ICreateUserAccountDTO): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
  findAllUsers(): Promise<User[]>;
  findById(id: string): Promise<void>;
  findByCompleteName(completename: string): Promise<void>;
  findByUsername(username: string): Promise<void>;
  findByEmail(email: string): Promise<void>;
}