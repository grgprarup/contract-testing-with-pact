"use strict"

const { Matchers } = require("@pact-foundation/pact")
const { getClients, postClient } = require("../../../src/consumer")


describe("Clients Service", () => {
    const GET_EXPECTED_BODY = [{
        "firstName": "John",
        "lastName": "Doe",
        "age:": 25,
        "id": 1
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 23,
        "id": 2
    },
    {
        "firstName": "Jack",
        "lastName": "Doe",
        "age": 27,
        "id": 3
    }]

    afterEach(() => provider.verify())

    describe("GET Clients", () => {
        beforeEach(() => {
            const interaction = {
                state: "i have a list of clients",
                uponReceiving: "a request for all clients",
                withRequest: {
                    method: "GET",
                    path: "/clients",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                    },
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: GET_EXPECTED_BODY,
                },
            }
            return provider.addInteraction(interaction)
        })

        test("returns correct body, header and statusCode", async() => {
            const response = await getClients()
            expect(response.headers['content-type']).toBe("application/json; charset=utf-8")
            expect(response.data).toEqual(GET_EXPECTED_BODY)
            expect(response.status).toEqual(200)
        })
    })
})