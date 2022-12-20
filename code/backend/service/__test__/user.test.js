const request = require('supertest')
const app = require('../../app')

describe("POST /app", () => {
    describe("given a email and password For login", () => {

        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/auth/login").send({
                email: "gowsi@gamil.com",
                password: "123456"
            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/api/auth/login").send({
                email: "gowsi@gamil.com",
                password: "123456"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async () => {
            const response = await request(app).post("/api/auth/login").send({
                email: "gowsi@gamil.com",
                password: "123456"
            })
            expect(response.body._id).toBeDefined()
        })
    })

    describe("given an email , username and password For Register", () => {

        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/auth/register").send({
                username:"qwertgjgj",
                email: "qwert@gamil.com",
                password: "123456"
            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/api/auth/register").send({
                username:"hgjjhgxx",
                email: "sffdfhhg@gamil.com",
                password: "123456"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async () => {
            const response = await request(app).post("/api/auth/register").send({
                username:"gghgjjjl",
                email: "jhlkpl@gamil.com",
                password: "123456"
            })
            expect(response.body._id).toBeDefined()
        })
    })

    describe("when the username and password is missing in login", () => {
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
    describe("when the username and password is missing in register", () => {
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