const doGetFetch = url => {
    return new Promise((resolve, reject) => {
        fetch(url, {
                method: "GET",
                credentials: "include"
            })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const doPostFetch = (url, jsondata) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(jsondata)
            })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const get = async(url, params) => {
    if (params) {
        let paramsArray = [];
        // 拼接参数
        Object
            .keys(params)
            .forEach(key => paramsArray.push(key + "=" + params[key]));
        if (url.search(/\?/) === -1) {
            url += "?" + paramsArray.join("&");
        } else {
            url += "&" + paramsArray.join("&");
        }
    }
    try {
        return await doGetFetch(url);
    } catch (e) {
        console.log(e.message)
    }
    return {response_msg: 'error'}
}

export const post = async(url, params) => {
    try {
        return await doPostFetch(url, params);
    } catch (e) {
        console.log(e.message)
    }
    return {response_msg: 'error'}
}
