const cariData = require("./filter");
describe ("fungsi filter pencarian", () => {
    test("Cari data url berdsasarkan keyword (misl. 'link' )", () => {
        const dataUrl = [
            { id: 1, url: "https://www.google.com" },
            { id: 2, url: "https://www.facebook.com" },
            { id: 3, url: "https://www.yahoo.com" },
        ]
        const output = [{ id: 2, url: "https://www.facebook.com" }]
        const kataKunci = "facebook"

        expect(cariData(dataUrl, kataKunci)).toEqual(output)
    })
})