import uID from "../../utility/generateID";

//creating a custom loopiing file for filter options
const filterLabels = [
    {
        id: uID(),
        name: "color",
        items: [
            { id: uID(), name: "Red"},
            { id: uID(), name: "Black"},
            { id: uID(), name: "Blue"},
            { id: uID(), name: "Green"},
        ]
    },

    {
        id: uID(),
        name: "gender",
        items: [
            {id: uID(), name: "Men"},
            {id: uID(), name: "Women"},
        ]
    },

    {
        id: uID(),
        name: "price",
        items: [
            {id: uID(), name: "Rs 0-250"},
            {id: uID(), name: "Rs 251-300"},
            {id: uID(), name: "Rs 301-450"},
            {id: uID(), name: "Rs 451-500"},
        ]
    },

    {
        id: uID(),
        name: "Type",
        items: [
            {
                id: uID(),
                name: "Polo",
            },
            {
                id: uID(),
                name: "Hoodie",
            },
            {
                id: uID(),
                name: "Basic",
            }
        ]
    }
];

export default filterLabels;