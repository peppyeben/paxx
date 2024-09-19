import { createStore } from "vuex";

export default createStore({
    state: {
        isSideBarOpen: false,
    },
    getters: {
        GET_SIDEBAR_STATUS: (state) => state.isSideBarOpen,
    },
    mutations: {
        SET_SIDEBAR_STATUS(state, payload = null) {
            payload
                ? (state.isSideBarOpen = payload)
                : (state.isSideBarOpen = !state.isSideBarOpen);
        },
    },
    actions: {},
    modules: {},
});
