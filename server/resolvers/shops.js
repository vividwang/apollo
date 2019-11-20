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
};

const createCategory = async (root, params, _) => {
  // todo parasm => object
    console.log('params: ', params);
  try {
    let c = new category({
      name: params.name,
      price: params.price,
      inventory: params.inventory,
      description: params.description,
      putawayer: params.putawayer,
      createTime: params.createTime,
    });
   
    await c.save();
    
    // todo pageSize, skip
    let r = await category.find({});
    return {
      success: true,
      message: "",
      info: r
    }
  } catch (e) {
    console.error('Trying create new category error: ', e.message);
  }
};

const deleteCategory = async (root, params, _) => {
    try {
        await category.remove({ id });
        
        return {
            success: true,
            message: "",
            info: []
        }
    } catch (e) {
        console.error('Error while deleting data: ', e);
    }
};

module.exports = {
  shopsQuery,
  createCategory,
  deleteCategory,
};
