
const data = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
]

const defaultState = JSON.parse(localStorage.getItem('bucket')) ?? data

const PLUSCOUNT = 'PLUSCOUNT'
const MINUSCOUNT = 'MINUSCOUNT'
const ADDNEWITEM = 'ADDNEWITEM'

export const bucketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PLUSCOUNT:
            return state.map(item =>
                item.id === action.payload ? { ...item, count: item.count <= 24 ? item.count + 1 : item.count } : item
            );

        case MINUSCOUNT:
            return state.map(item =>
                item.id === action.payload ? { ...item, count: item.count >= 1 ? item.count - 1 : 0 } : item
            ).filter(item => item.count > 0);
        
        case ADDNEWITEM:
            const newItem = {
                id: state[state.length-1].id + 1,
                title: action.payload,
                count: 1
            }
            return [...state, newItem]
        

        default:
            return state;
    }
}


export const plusCountAction = (payload) => ({ type: PLUSCOUNT, payload })
export const minusCountAction = (payload) => ({ type: MINUSCOUNT, payload })
export const addNewItemAction = (payload) => ({ type: ADDNEWITEM, payload })