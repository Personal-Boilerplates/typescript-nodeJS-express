import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { secretKey } from "../../config/authConfig";

interface IloginReturn {
  user: User;
  token: string;
}

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async startSession(email: string, password: string): Promise<IloginReturn | undefined> {
    const select: any = this.metadata.columns.map((e) => e.propertyName);

    const user = await this.findOne({ where: { email }, select });

    if (user && user.password && (await bcrypt.compare(password, user.password))) {
      delete user.password;

      const token = sign({}, secretKey, { subject: user.id });
      return { user, token };
    }
  }
}

export default UserRepository;
