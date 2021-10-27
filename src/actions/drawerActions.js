import {OPEN_DRAWER, CLOSE_DRAWER} from "../reducers/drawerReducer";

export const manageDrawer = (openDrawer) => {
    return {type: openDrawer ? OPEN_DRAWER : CLOSE_DRAWER}
};
