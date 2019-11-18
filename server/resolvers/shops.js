const category = require('../db/model');

const shops = async function(root, params, _) {
    try {
        let r = await category.find(params);

        return r;
    } catch (e) {
        console.error('Error while getting data! ', e);
    }
}

module.exports = shops;