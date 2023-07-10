export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    }
}

export const mixin2 = {
    data() {
        return {
            mixin2: 'mixin2'
        }
    }
}