const request = require('supertest')
const app = require('../../app')

describe("POST /app", () => {
    describe("given a code and password For device register", () => {

        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/devices/register").send({
                    code:"1234zcvvcxcv5678",
                    password:"12xv3456"
            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/api/devices/register").send({
                code:"1234zcvcvxcv5678",
                password:"12xv3456"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async () => {
            const response = await request(app).post("/api/devices/register").send({
                code:"1234zccvvcvxcv5678",
                password:"12xv3456"
            })
            expect(response.body._id).toBeDefined()
        })
    })

    
    describe("when the username and password is missing in device register", () => {
        test("should respond with a status code of 400", async () => {
            const bodyData = [
                {username: "username"},
                {password: "password"},
                {}
            ]
            for (const body of bodyData) {
                const response = await request(app).post("/users").send(body)
                expect(response.statusCode).toBe(404)
            }
        })
    })

})