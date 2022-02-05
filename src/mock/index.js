import Mock from 'mockjs'

Mock.mock('/list', res => {
    return {
        code: 0,
        msg: '商品列表获取成功',
        data: Mock.mock({
            'list|10-20': [{
                id: '@id',
                img: Mock.Random.image('100x100', '@color()'),
                name: '@cname',
                description: '@word',
                price: '@float(60, 100)'
            }]
        })
    }
})