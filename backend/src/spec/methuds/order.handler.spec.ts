import supertest from "supertest";
import app from "../../app";
import AuthService from "../../services/auth.service";
import UsersEntity from "../../entities/users.entity";
const _user = new UsersEntity()
const _auth = new AuthService()

const request = supertest(app);
const tester = {name: 'b',
                username: 'b',
                    password: 'a'}
const token = _auth.generateToken(tester)

describe("Orders and shopping cart endpoints", () => {
    beforeAll(async()=>{
        await _user.createUser(tester)
    })
    afterAll(async()=>{
        await _user.deleteUser(tester)
    })
    /* ------------------------------------- */
    it(`It should get status 200`, async () => {
        const fet = await request
            .get('/api/orders')
            .set('Authorization', `Bearer ${token}`)
        expect(fet.statusCode).toBe(200)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 200`, async () => {
        // let data = {}
        const info = await
            request
                .get('/api/orders/shopping-cart/20')
                .set('Authorization', `Bearer ${token}`)
                expect(info.statusCode).toBe(200)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 200`, async () => {
        // let data = {}
        const info = await
            request
                .put('/api/orders/current/update/10')
                .set('Authorization', `Bearer ${token}`)
                expect(info.statusCode).toBe(200)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 200`, async () => {
        // let data = {}
        const info = await
            request
                .delete('/api/orders/trash/5')
                .set('Authorization', `Bearer ${token}`)
        expect(info.statusCode).toBe(200)
    });
    /* ------------------------------------- */

})