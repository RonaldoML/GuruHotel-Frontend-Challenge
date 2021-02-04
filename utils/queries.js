
export const searchQuery = (term, location) => {
    return `
    {
        search(term: "${term}", location: "${location}", limit:10) {
            business {
                id
                name
                rating
                review_count
                distance
                photos
                display_phone
                location {
                    address1
                }
                coordinates {
                    latitude
                    longitude
                }
            }
        }
    }
  `
}
export const business = (id) => {
    return `
    {
        business(id: "${id}") {
            photos
            name
            coordinates {
                latitude
                longitude
            }
            review_count
            rating
            phone
            display_phone
            price
            hours {
                hours_type
            }
            is_closed
            reviews {
                rating
                text
                time_created
            }
        }
    }
    `
} 