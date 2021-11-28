export const state = () => ({
    mobileMenuToggle: false
});

export const mutations = {
    mobileToggler(state, value) {
        state.mobileMenuToggle = value;
    }
};