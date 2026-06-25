const adminAuth = (req, res, next) => {
    const token = 'xyz'
    const isAdminAuthorized = token == "xdyz"
    if (!isAdminAuthorized) {
        res.status(401).send('admin is not authorized')
    } else {
        next()
    }
}

const userAuth = (req, res, next) => {
    const token = 'xyz'
    const isAdminAuthorized = token == "xyz"
    if (!isAdminAuthorized) {
        res.status(401).send('user is not authorized')
    } else {
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}