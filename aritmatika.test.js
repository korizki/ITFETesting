const {tambah, kurang, kali, bagi} = require('./artimatika')

test.each([[1,1,2],[-1,2,1],[2,1,3]])(
    '%i + %i equals %i', (a,b,expected) => {
        expect(tambah(a,b)).toBe(expected)
    }
)

test.each([[10,5,5],[4,2,2],[6,4,2]])(
    '%i - %i equals %i', (a,b,expected) => {
        expect(kurang(a,b)).toBe(expected)
    }
)

test.each([[1,3,3],[2,4,8],[3,5,15]])(
    '%i * %i equals %i', (a,b,expected) => {
        expect(kali(a,b)).toBe(expected)
    }
)

test.each([[10,2,5],[4,2,2],[6,1,6]])(
    '%i / %i equals %i', (a,b,expected) => {
        expect(bagi(a,b)).toBe(expected)
    }
)