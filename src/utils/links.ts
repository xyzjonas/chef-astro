export const BASE_URL = import.meta.env.API_URL
export const IMAGES_URL = import.meta.env.IMAGES_URL

export const smallImage = (id: number) => {
    return `${IMAGES_URL}/${id}/small.jpeg`
    return `${BASE_URL}/images/${id}/small.jpeg`
}

export const mediumImage = (id: number) => {
    return `${IMAGES_URL}/${id}/medium.jpeg`
    return `${BASE_URL}/images/${id}/medium.jpeg`
}