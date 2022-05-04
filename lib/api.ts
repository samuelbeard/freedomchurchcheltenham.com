export const getEvents = () => {
    const api = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/`
    console.log(api)
    return fetch(api, {
        headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
    }).then(res => res.json())
}

export const getEvent = (id: string) => {
    const api = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${id}`
    console.log(api)
    return fetch(api, {
        headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
    }).then(res => res.json())
}
