//todo: dotenv
export const BASE_URL = "https://chef-a2nlxswxda-ez.a.run.app"
// export const BASE_URL = "http://localhost:8000"

export const smallImage = (id: number) => {
    return `${BASE_URL}/images/${id}/small.jpeg`
}

export const mediumImage = (id: number) => {
    return `${BASE_URL}/images/${id}/medium.jpeg`
}