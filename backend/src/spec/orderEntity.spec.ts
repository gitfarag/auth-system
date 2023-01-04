import OrderEntity from "../entities/orders.entity";
import UsersEntity,{User} from "../entities/users.entity";

const _Order = new OrderEntity();
const _user = new UsersEntity();

const user:User={
    name:'khaled',
    username:"a",
    password:"d"
  }
 
describe("Orders Class ", () => {
  
  
  it(`It should get  order `, async () => {
    const tester = await _user.createUser(user);
    const id = tester.id as unknown as number
    await _Order.addOrder({
        uid: tester.id as unknown as number,
        status: "pending",
      })
    const result = await _Order.userOrder(id);
    expect(result[0].status).toEqual('pending');
  });
  it(`It should update  order`, async () => {
    const order = await _Order.index();
    const oID = order[0].uid as unknown as number;
    const result = await _Order.updateOrder(oID);
    expect(result[0].status).toEqual("done");
  });
 
});
