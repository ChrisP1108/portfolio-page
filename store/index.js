import { routesList } from '../routes/routesList.js'

// Routing

function router(value) {
    // Page Selected State Set On Page Load
    if (!value) {
        const routes = routesList.filter(route => route.name !== 'resume').map(route => route.name);
        const url = window.location.hash.slice(1);
        const setState = routes.includes(url) ? url : 'home';
        window.history.pushState({}, '', setState === 'home' ? '/' : `#${setState}`);
        return setState;
    }
    // Page Clicked Route Change
    window.history.pushState({}, '', value === 'home' ? '/' : `#${value}`);
}

export const state = () => ({
    navMenuItems: routesList,
    mobileMenuToggle: false,
    pageSelected: router(),
});

export const mutations = {
    mobileToggler(state, value) {
        state.mobileMenuToggle = value;
    },
    pageToggler(state, value) {
        switch(value) {
            case 'resume':
                window.open('https://github.com/ChrisP1108/portfolio-page/raw/main/assets/documents/Resume.pdf');
                break;
            default:
                router(value);
                state.pageSelected = value;
        }
        console.log(`Page Selected: ${state.pageSelected.toUpperCase()}`);
    }
};