const {sum, positive, negative} = require ("./alat-matematika.js");

let vals;
let sum_of_vals;
let pos_vals;
let neg_vals;

beforeAll( () => {
    pos_vals = [2,1,3];
    neg_vals = [-2,-1,-1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x,y) => x + y, 0)
})

test('Hasil total vals seharusnya 2', () => {
    expect(sum(vals)).toBe(sum_of_vals);
})

test('harus dapat angka positive', () => {
    expect(positive(vals)).toEqual(pos_vals);
})

test('harus dapat angka negative', () => {
    expect(negative(vals)).toEqual(neg_vals);
})