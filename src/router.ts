const route = (event: any) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    handleLocation();
};

const routes: { [key: string]: string } = {
    404: '/404.html',
    '/': '/index_en.html',
    '/ro': 'index_ro.html',
};

const handleLocation = async () => {
    const path: string = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('app')!.innerHTML = html;
};

(window as any).onpopstate = handleLocation;
(window as any).route = route;
export { route, handleLocation };
