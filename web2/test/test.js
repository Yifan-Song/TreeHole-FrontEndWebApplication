/**
 * Created by Bo on 2017/11/19.
 */

var assert = require('assert');

    describe('fx', function () {
        it('should classify the input of users', function () {
            assert.equal("Nameless：hi", fx("hi",""));
            assert.equal("木之几：你好", fx("你好","木之几"));
        })
    })

function fx(message1,message2) {
    if (message1=='') {
        alert('请输入内容！')
        return
    }
    var tempName=message2+'：'
    if (message2=='')
        tempName='Nameless：'
    var d=new Date()
    d+=''
    d=d.substr(3,20)
    d='——'+d
    var tempElement=tempName+message1
    return tempElement
    message1=''
}
