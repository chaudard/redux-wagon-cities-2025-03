import cities from "../../data/cities"

export function setCities() {
    // TODO: Api call! For now, simulate a DB
    return {
        type: 'SET_CITIES',
        payload: cities
    }
}