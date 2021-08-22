const index = require("./index")
// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index("2021-07-29T15:31:46.922Z", "bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index("2021-07-29T23:03:48.812Z", "arizona_extend.wav")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index("2021-07-29T20:12:53.196Z", "bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index("2021-07-29T23:03:48.812Z", "services_recontextualize_front_end.gif")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index("2021-07-29T20:12:53.196Z", "arizona_extend.wav")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
