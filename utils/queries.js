
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
                alias
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
            location{
                address1
            }
            categories{
                title
            }
            hours {
                open{
                    end
                    start
                    day
                  }
            }
            is_closed
            reviews {
                rating
                text
                time_created
                user{
                    name
                    image_url
                }
            }
        }
    }
    `
} 