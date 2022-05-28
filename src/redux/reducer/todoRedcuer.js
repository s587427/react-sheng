
const initState = [
    {
        id: 1,
        desc: '請假',
        completesTime: '2022-05-27'
    },
    {
        id: 2,
        desc: 'play LOL',
        completesTime: '2022-05-28'
    }
]


export default (state = initState , action) => {
    //console.log(action)
    switch (action.type) {
        case 'AddTodo': 
            return  [...state, action.data]
        case 'Fail':
            return state
        default:
            return state
    }
}