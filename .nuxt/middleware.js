const middleware = {}

middleware['search'] = require('../middleware/search.js');
middleware['search'] = middleware['search'].default || middleware['search']

export default middleware
