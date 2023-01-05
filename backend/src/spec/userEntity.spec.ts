import UsersEntity, { User } from "../entities/users.entity";

const _User = new UsersEntity();
const data: User = {
  username: "admin",
  password: "secret",
};

describe("users Class (create test user)", () => {
  it(`It should create user`, async () => {
    const result = await _User.createUser(data);
    expect(result.username).toEqual("admin");
  });
  it(`It should get admin user`, async () => {
    const result = await _User.getUserByUsername(data.username);
    expect(result.username).toEqual("admin");
  });
  it(`It should update  user`, async () => {
    const result = await _User.getUserByUsername(data.username);
    result.username="john"
    const updated = await _User.updateuser(result)

    expect(updated.username).toEqual("john");
  });
  it(`It should delete  user`, async () => {
    const users = await _User.index();
    const id = (users[0].id as unknown) as number
    const result = await _User.deleteUser(users[0]);
    expect(result).toEqual(`User deleted with ID: ${id}`);
  });
});
