const baseUrl: string = 'https://dog.ceo/api'

export const request = async (urlPath: string, params: {}) => {
    return await fetch(baseUrl.concat(urlPath), params )
}
