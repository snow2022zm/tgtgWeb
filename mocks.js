const MOCK_BAG_ID = 1001

const MOCK_ACTIVATION_ID = 10001

const BAG1 = {
    'id': MOCK_BAG_ID,
    'ownerId': 1,
    'name': 'name1',
    'address': 'address1',
    'latitude': 42.0,
    'longitude': 42.0,
    'description': 'description1',
    'ingredients': 'ingredients1',
    'type': 'type1',
    'originalPrice': 12,
    'discountPrice': 4,
    'weight': 5,
    'quantity': 0,
    'enabled': false
}

const OWNER_BAGS = [BAG1]
const BUYER_BAGS = [BAG1]


module.exports = Object.freeze({
    mockActivationId: MOCK_ACTIVATION_ID,
    mockBagId: MOCK_BAG_ID,
    bag1: BAG1,
    ownerBags: OWNER_BAGS,
    buyerBags: BUYER_BAGS
})
