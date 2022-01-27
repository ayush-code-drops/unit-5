const users = [{ id: 1, name: "ayush" }
    , { id: 2, name: "manu" }
    , { id: 3, name: "elon" }
    , { id: 4, name: "mark" }, { id: 5, name: "gary" }, { id: 6, name: "smith" }, { id: 7, name: "hicks" }, { id: 8, name: "patrick" }, { id: 9, name: "david" }, { id: 10, name: "jim" }]

function getAllUsers() {
    return users
}

function getUser(id) {
    if (id > 0 && id <= users.length) {
        const user = users.filter((item) => item.id ==id)
        
        return user
    }

    else {
        return null;
    }
}

function addUser(name){
    users.push({
        id: users.length + 1,
        name:name
    })
    
    return users
}

module.exports = {
    getAllUsers,
    getUser,
    addUser
}