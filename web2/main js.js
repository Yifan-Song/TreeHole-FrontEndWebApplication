/**
 * Created by Bo on 2017/11/19.
 */
Vue.component('counter1', {
    template: '<button v-on:click="counter += 1"style="width: 40px; height:25px">赞:{{ counter }}</button>',
    data: function () {
        return {counter: 0}
    }
})

Vue.component('counter2', {
    template: '<button v-on:click="counter += 1"style="width: 40px; height:25px">踩:{{ counter }}</button>',
    data: function () {
        return {counter: 0}
    }
})

new Vue({
    el:'#app1',
    data: {
        message:'欲说还休'
    }
});

new Vue({
    el: '#app2',
    data: {
        todos: [
            { text: 'Nameless：要出国考试了。一度迷茫自己为什么会选这一条最不安稳的路，也想过干脆工作算了。但是到最后还是心里的那么一点不甘和憧憬在作祟吧。未来也不知道怎么样，眼下这关都还没迈过去呢。没啥励志的结束语，就这样了。——Nov 23 2016 16:12:05' },
            { text: 'Somebody：我活不了多久了，随时可能离去。可是我今年才刚满20岁，我还有好多事没去做，还有好多的梦想。我不知道该怎么办，现在的生活一团糟。我想好好努力学习，可是努力了又能怎样？一个连未来都没有的人……——Feb 15 2017 23:33:23' },
            { text: '>_<：想通了一件事：所谓活着，不是为了变得与众不同万里挑一，而是看看能成为怎样的自己。天地烘炉，炼己炼性。——Nov 11 2017 20:06:32' }
        ],
        message1:'',
        message2:'',
        show:false
    },
    methods: {
        fx: function (event) {
            if (this.message1=='') {
                alert('请输入内容！')
                return
            }
            var tempName=this.message2+'：'
            if (this.message2=='')
                tempName='Nameless：'
            var d=new Date()
            d+=''
            d=d.substr(3,20)
            d='——'+d
            var tempElement=tempName+this.message1+d
            this.todos.push({text: tempElement})
            this.message1=''
        }
    }
})
