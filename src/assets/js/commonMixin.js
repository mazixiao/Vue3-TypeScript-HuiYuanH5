// 混入 (mixin) 练练
const commonMixin = {
    data() {
        return {
            mixin1: "111",
        }
    },
    created: function () {
        console.log('混入对象的钩子被调用');
    },
    methods: {
        sayHello: () => {
            console.log('我是commonMixin.js中的值');
        }
    }
}

export default commonMixin





