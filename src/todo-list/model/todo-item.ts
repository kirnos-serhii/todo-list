
export default class TodoItem {

    private readonly _id: string;
    private readonly _name: string;
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