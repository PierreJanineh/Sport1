export const getMenu = async () => {

    const url = 'https://sp1liv.maariv.co.il/wp-json/sport1/v1/navigation';
    try {
        return await fetch(url, {
            method: 'get',
            headers: new Headers({
                'x-sport1-mobile-app': true
            })
        });
    } catch (err) {
        console.error(err);
    }
};
