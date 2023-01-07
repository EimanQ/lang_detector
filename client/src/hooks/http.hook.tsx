const request = async (url: string, method: string, body: any = null, headers: any = {}) => {

    try {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        };

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        return data;

    } catch (error) {
        return error as Error
    }

};

export { request };