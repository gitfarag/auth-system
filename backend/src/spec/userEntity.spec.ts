import UsersEntity, { User } from "../entities/users.entity";

const _User = new UsersEntity();
const data: User = {
  name: "ahmed",
  username: "admin",
  password: "secret",
};

describe("users Class (create test user)", () => {
  it(`It should create user`, async () => {
    const result = await _User.createUser(data);
    expect(result.name).toEqual("ahmed");
  });
  it(`It should get admin user`, async () => {
    const result = await _User.getUserByUsername("admin");
    expect(result.name).toEqual("ahmed");
  });
  it(`It should update  user`, async () => {
    const users = await _User.index();
    const uID = users[0].id;

    const result = await _User.updateuser({
      id: uID,
      username: "madison",
      name: "Tester",
      password: "password123",
    });
    expect(result.name).toEqual("Tester");
  });
  it(`It should delete  user`, async () => {
    const users = await _User.index();
    const id = (users[0].id as unknown) as number

    const result = await _User.deleteUser(users[0]);
    expect(result).toEqual(`User deleted with ID: ${id}`);
  });
});
