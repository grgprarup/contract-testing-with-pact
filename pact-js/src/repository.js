class Repository {
    constructor() {
        this.entries = []
    }

    fetchAll() {
        return this.entries
    }

    getById(id) {
        return this.entries.find(entity => id === entity.id)
    }

    add(entity) {
        this.entries.push(entity)
    }

    clear() {
        this.entries = []
    }
}

module.exports = Repository