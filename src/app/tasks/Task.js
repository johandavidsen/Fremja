/**
 * @class Task
 *
 * The Task class is a logical entity aimed to represent any task.
 *
 * @property id
 * @property title
 * @property description
 * @property meta.type - CONCEPTUAL || DEVELOPMENT
 * @property meta.createdDate -
 * @property meta.updatedDate -
 * @property meta.status -
 * @property meta.assignee -
 * @property meta.labels -
 * @property meta.priority -
 * @property meta.createdBy -
 */
class Task {

    constructor (id, text, description) {
        this.id = id
        this.title = text
        this.description = description
        this.meta = {
            type: null,
            createdDate: new Date(),
            updatedDate: new Date(),
            status: 'Backlog',
            assignee: null,
            labels: [],
            priority: null,
            createdBy: null
        }
    }

}

export default Task


