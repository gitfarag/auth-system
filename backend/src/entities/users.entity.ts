import db from "../providers/database.provider";

interface User {
  id?: number;
  username: string;
  password: string;
  token?: string;
}

class UsersEntity {
  async index(): Promise<User[]> {
    try {
      const { rows } = await db.query("SELECT * FROM users ");
      return rows;
    } catch (error: any) {
      return error?.message;
    }
  }

  async createUser({username,password}: User): Promise<User> {
    try {
      const { rows } = await db.query(
        "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
        [username, password]
      );
      return rows[0];
    } catch (error: any) {
      return error?.message;
    }
  }

  async getUserByUsername(username: string): Promise<User> {
    const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return rows[0];
  }

  async deleteUser(user:User): Promise<string> {
    try {
      const id:number = user.id as unknown as number
      await db.query("DELETE FROM users WHERE id = $1", [id]);
      return `User deleted with ID: ${id}`;
    } catch (error) {
      return `cannot delete user`;
    }
  }

  async updateuser(user: User): Promise<User> {
    try {
      const { id, username, password } = user;
      const sql =
        "UPDATE users SET username = $1, password=$2 WHERE id = $3 RETURNING *";
      const { rows } = await db.query(sql, [username, password, id]);
      return rows[0];
    } catch (error: any) {
      return error.message;
    }
  }
}

export { User };
export default UsersEntity;
