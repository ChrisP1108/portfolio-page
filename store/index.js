export const state = () => ({
    mobileMenuToggle: false,
    pageSelected: 'home'
});

export const mutations = {
    mobileToggler(state, value) {
        state.mobileMenuToggle = value;
    },
    pageToggler(state, value) {
        state.pageSelected = value;
    }
};