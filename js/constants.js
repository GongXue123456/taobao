var Constants = {
    baseUri: "http://132.232.95.164:15571/ninepaymall/taobao/",
    imageUri: "http://132.232.95.164:15571/ninepaymall/",
    request: {
        findCategoryByList: "findCategoryByList",
        findProductByList: "findProductByList",
        findByProduct: "findByProduct",
        findAddress:"findAddress",
    }
}

var addressMock = [
    {
        id:"1",
        name: "张山",
        phone: "12222222222",
        isDefault: true,
        address: {
            province: "香港",
            city: "香港",
            district: "香港",
            detail: "大新街 12-3045"
        }
    },
    {
        id:"2",
        name: "张山",
        phone: "12222222222",
        isDefault: false,
        address: {
            province: "香港",
            city: "香港",
            district: "香港",
            detail: "大新街 12-3045"
        }
    }
]