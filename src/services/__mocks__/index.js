const index = jest.createMockFromModule('../index');

export function getList(){
    const result = {
        data: {
            "code": 0,
            "msg": "商品列表获取成功",
            "data": {
                "list": [
                    {
                        "id": "450000200408163330",
                        "img": "http://dummyimage.com/100x100/#f279dc",
                        "name": "韩涛",
                        "description": "owpfnz",
                        "price": 81.84812924835633
                    },
                    {
                        "id": "710000201708042854",
                        "img": "http://dummyimage.com/100x100/#79f2e4",
                        "name": "高丽",
                        "description": "mkiuvmiu",
                        "price": 90.95545705779352
                    },
                    {
                        "id": "520000200910198617",
                        "img": "http://dummyimage.com/100x100/#f2c179",
                        "name": "文平",
                        "description": "sgxb",
                        "price": 97.422729774
                    },
                    {
                        "id": "360000197207092795",
                        "img": "http://dummyimage.com/100x100/#9e79f2",
                        "name": "姚超",
                        "description": "nhddkaft",
                        "price": 69.34
                    },
                    {
                        "id": "330000197202134217",
                        "img": "http://dummyimage.com/100x100/#79f27a",
                        "name": "蔡伟",
                        "description": "lfvc",
                        "price": 74.660157
                    },
                    {
                        "id": "320000199105240533",
                        "img": "http://dummyimage.com/100x100/#f2799a",
                        "name": "蔡秀兰",
                        "description": "ovtwesil",
                        "price": 68.996027
                    },
                    {
                        "id": "500000197606305141",
                        "img": "http://dummyimage.com/100x100/#79bef2",
                        "name": "何强",
                        "description": "bkbcb",
                        "price": 97.5727622461
                    },
                    {
                        "id": "810000201101259823",
                        "img": "http://dummyimage.com/100x100/#e1f279",
                        "name": "熊艳",
                        "description": "xwcfrk",
                        "price": 75.33822139
                    },
                    {
                        "id": "450000201709027150",
                        "img": "http://dummyimage.com/100x100/#df79f2",
                        "name": "曹刚",
                        "description": "rbqtiyb",
                        "price": 94
                    },
                    {
                        "id": "430000199511274187",
                        "img": "http://dummyimage.com/100x100/#79f2bc",
                        "name": "锺敏",
                        "description": "enyewm",
                        "price": 70.484373
                    },
                    {
                        "id": "140000198508066738",
                        "img": "http://dummyimage.com/100x100/#f29979",
                        "name": "姚伟",
                        "description": "ggfefm",
                        "price": 98.02278434
                    },
                    {
                        "id": "710000197706203766",
                        "img": "http://dummyimage.com/100x100/#797cf2",
                        "name": "龚静",
                        "description": "mtsmunpi",
                        "price": 69.075846006368
                    },
                    {
                        "id": "630000201007251696",
                        "img": "http://dummyimage.com/100x100/#9ff279",
                        "name": "孟秀兰",
                        "description": "gzqrf",
                        "price": 90.6
                    },
                    {
                        "id": "520000197404220557",
                        "img": "http://dummyimage.com/100x100/#f279c3",
                        "name": "徐军",
                        "description": "cbrbouo",
                        "price": 69.624853242
                    },
                    {
                        "id": "340000200803026867",
                        "img": "http://dummyimage.com/100x100/#79e6f2",
                        "name": "曾超",
                        "description": "cergtd",
                        "price": 68.17361926134
                    },
                    {
                        "id": "140000197104048299",
                        "img": "http://dummyimage.com/100x100/#f2da79",
                        "name": "卢霞",
                        "description": "ywgjqrlf",
                        "price": 98.5266121349
                    },
                    {
                        "id": "410000198610274440",
                        "img": "http://dummyimage.com/100x100/#b779f2",
                        "name": "陆平",
                        "description": "dufhgfwt",
                        "price": 96.573246134459
                    }
                ]
            }
        }
    }
    return Promise.resolve(result);
}