export const state = () => ({
    navMenuItems: [
        {
            id: 1,
            name: 'home'
        },
        {
            id: 2,
            name: 'about'
        },
        {
            id: 3,
            name: 'portfolio'
        },
        {
            id: 4,
            name: 'resume'
        },
        {
            id: 5,
            name: 'email',
            email: 'chrisp1108@gmail.com'
        }
    ],
    mobileMenuToggle: false,
    pageSelected: 'home',
});

export const mutations = {
    mobileToggler(state, value) {
        state.mobileMenuToggle = value;
    },
    pageToggler(state, value) {
        state.pageSelected = value;
        console.log(`Page Selected: ${state.pageSelected.toUpperCase()}`);
    }
};