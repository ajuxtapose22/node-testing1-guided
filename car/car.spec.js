const Car = require('./car')


describe('Car Class', () => {
    let prius 
    beforeEach(() => {
        prius = new Car('toyota', 'prius', 2020)
    })

    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        // const prius = new Car('toyota', 'prius', 2020) 
        // Commented out because "beforeEach()" is setup above

        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
        expect(prius).toHaveProperty('year')
        expect(prius.make).toBeDefined()
        expect(prius.make).toBe('toyota')
        // TEST BELOW CAN CAUSE ERRORS
        expect(prius).toEqual({ make: 'toyota', model: 'prius', year: 2020, odometer: 0 })
        // TEST with ".toEqual" are bound to fail when adding new functionality and arguments
        // You have to add the props to ensure it passes
        // Check objects with .toMatchObject
        expect(prius).toMatchObject({ make: 'toyota', model: 'prius', year: 2020 })
        // MatchObject does not need all props to compare
    })
    test('new cars start with the odometer at zero', () => {
        const frontier = new Car('frontier', 'nissan', 0)
        expect(frontier).toHaveProperty('make')
        expect(frontier).toHaveProperty('model')
        expect(frontier).toHaveProperty('odometer', 0)
    })
    test('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('drive method tales distance and increases odomter by that distance', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    test.todo('drive method returns the updated odomter')
    // ".todo" creates a "todo test" and will not create false postiive 
    // ".only" test only the test with "test.only"
    // ".skip" will skip the test with .skip
    
    test('driveAsync method resolves updated Odometer', async () => {
        let updatedOdometer = await prius.driveAsync(7)
        expect(updatedOdometer).toBe(7)
        updatedOdometer = await prius.driveAsync(5)
        expect(updatedOdometer).toBe(12)
    })
})











// Test away!
describe('our first test', () => { // DESCRIBE BLOCK TO ORGANIZE TEST
    test('sanity', () => { // SINGLE TEST
        expect(5).toBe(5) // 3 ASSERTIONS BELOW
        expect(5).toBe(3 + 2) // .toBe is the MATCHER
        expect(5).toBeDefined() 
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('objects again', () => {
        expect({ a: 1 }).toEqual({ a: 1 })
    })

})



// TESTING A FUNCTION

function foo () {
    return "the foo"
}

describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo')
        expect(foo()).toHaveLength(7)
        expect(foo()).toBeTruthy()
    })
})