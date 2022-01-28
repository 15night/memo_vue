export const state = () => ({
    memo: [],
    page: 0
})

export const mutations = {
    insert: function(state: any, obj: any) {
        var date = new Date()
        var fmt = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes()
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: fmt
        })
    },
    set_page: function(state: any, p: any) {
        state.page = p
    },
    remove: function(state: any, obj: any) {
        var num = 0
        for (let i = 0; i < state.memo.length; i++) {
            const ob = state.memo[i]
            if (ob.title == obj.title && ob.content == obj.content && ob.created == obj.created) {
                alert("remove it! --" + ob.title)
                state.memo.splice(i, 1)
                return
            }
        }
    }
}
