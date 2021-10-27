export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

const initialState = {
    drawerIsOpen: undefined
}

export const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DRAWER:
            return {
                ...state,
                drawerIsOpen: true
            };

        case CLOSE_DRAWER:
            return {
                ...state,
                drawerIsOpen: false
            };

        default:
            return state;
    }
};
