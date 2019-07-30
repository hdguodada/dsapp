const baseUrl = 'https://easy-mock.com/mock/5d3f916e7d1a8c17bae393ba/example/';

async function $fetch(url, options) {
    const finalOptions = Object.assign({}, {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }, options);

    const response = await fetch(`${baseUrl}${url}`, finalOptions);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else if (response.status === 403) {
        state.user = null;
        if (router.currentRoute.matched.some(r => r.meta.private)) {
            router.replace({
                name: 'login', params: {
                    wantedRoute: router.currentRoute.fullPath
                }
            });
        }
    } else {
        const message = await response.text();
        const error = new Error(message);
        error.response = response;
        throw error;
    }
}