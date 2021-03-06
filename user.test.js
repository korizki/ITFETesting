const axios = require('axios');
const Users = require('./user');

jest.mock('axios');

test('harus fetch data User', () => {
    const users = [
        {
            "id" : 1,
            "nama_depan" : "Rizki",
            "nama_belakang" : "Ramadhan",
            "email" : "rzk.ramadhan@gmail.com"
        },
        {
            "id" : 2,
            "nama_depan" : "Asmarita",
            "nama_belakang" : "Dwi",
            "email" : "dwi@gmail.com"
        },
        {
            "id" : 3,
            "nama_depan" : "Zayn",
            "nama_belakang" : "Al-Khalid",
            "email" : "khalid.com"
        },
        {
            "id" : 4,
            "nama_depan" : "Nashwa",
            "nama_belakang" : "Alnaira",
            "email" : "nashwa@gmail.com"
        }
    ]

    const resp = {data : users};

    axios.get.mockImplementation( () => Promise.resolve(resp));
    Users.all().then(resp => expect(resp.data).toEqual(users));
})