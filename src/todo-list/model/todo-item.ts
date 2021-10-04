/**
 * Represents the task that should be done.
 *
 * Describes the state of task: his name, is it done or no and unique id.
 */
export default class TodoItem {
    /**
     * Unique identifier of the item.
     * @private
     */
    private readonly _id: string;
    /**
     * Name of the task.
     * @private
     */
    private readonly _name: string;
    /**
     * Indicates is task done or no.
     * @private
     */
    private _isDone: boolean;

    constructor(id: string, name: string, isDone: boolean) {

        this._id = id;
        this._name = name;
        this._isDone = isDone;
    }

    public get id() : string {
        return this._id;
    }

    public get name() : string {
        return this._name;
    }

    public get isDone() : boolean {
        return this._isDone;
    }

    public set isDone(isDone: boolean) {
        this._isDone = isDone;
    }
}
