const initialState = {
    isLoading: false,
    error: '',
    list: [
        { id: 1, date: '2019/11/14', products: [1, 3] },
        { id: 2, date: '2019/11/10', products: [1] },
        { id: 3, date: '2019/11/17', products: [2] }
    ]
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer