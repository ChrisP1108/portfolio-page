// Routing

function router(value) {
    // Page Selected State Set On Page Load
    if (!value) {
        return window.location.hash.slice(1) || 'home';
    }
    // Page Clicked Route Change
    window.history.pushState({}, '', value === 'home' ? '/' : `#${value}`);
}

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
    pageSelected: router(),
});

export const mutations = {
    mobileToggler(state, value) {
        state.mobileMenuToggle = value;
    },
    pageToggler(state, value) {
        router(value);
        state.pageSelected = value;
        console.log(`Page Selected: ${state.pageSelected.toUpperCase()}`);
    }
};