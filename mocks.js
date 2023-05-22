const BAG1 = {
    'id': 1001,
    'name': 'name1',
    'address': 'address1',
    'latitude': 42.0,
    'longitude': 42.0,
    'desription': 'desription1',
    'ingredients': 'ingredients1',
    'type': 'type1',
    'originalPrice': 12,
    'discountPrice': 4,
    'weight': 5
}

const OWNER_BAGS = [BAG1]

module.exports = Object.freeze({
    bag1: BAG1,
    ownerBags: OWNER_BAGS
})
