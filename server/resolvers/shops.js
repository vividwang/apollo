const category = require('../db/model');

const shopsQuery = async (root, params, _) => {
    try {
        let r = await category.find(params);
        let hasMore = false;
        
        if (r.length > params.pageSize + parseInt(params.after, 10)) hasMore = true;
        return Object.assign({}, {
            products: r,
            hasMore,
            cursor: 10,
        });
    } catch (e) {
        console.error('Error while getting data! ', e);
    }
}

const shopsMutation = async (root, params, _) => {
    deleteCategory: (id) => {
        try {
            let r = await category.remove({ id });

            return {
                success: true,
                message: "",
                info: []
            }
        } catch (e) {
            console.error('Error while deleting data: ', e);
        }
    }
}

module.exports = {
    shopsQuery,
    shopsMutation,
}