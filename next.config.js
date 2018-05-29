module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/product/1': { page: '/product', query: { id: "1" } },
            '/product/2': { page: '/product', query: { id: "2" } },
            '/product/3': { page: '/product', query: { id: "3" } }
        }
    }
}