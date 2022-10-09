import {ParamsMap} from "./types";

export function urlMerge(baseUrl: string, params: ParamsMap): string {
    let url = new URL(baseUrl);
    let currentParams = new URLSearchParams(url.search);

    for (let key in params) {
        let value = params[key]
        if (currentParams.has(key)) {
            currentParams.set(key, value)
        } else {
            currentParams.append(key, value)
        }
    }

    url.search = currentParams.toString();
    return url.toString()
}