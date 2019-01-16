let Mock=require('mockjs')

let data=Mock.mock({
    "list|10-20":[{
        "id|+1":1,
        "con|10-20":"@cword"
    }]
})
module.exports=data.list
