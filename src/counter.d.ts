export interface Config {
    container: string;
    unit: 'word' | 'char';
}
export interface QuillInstance {
    on: Function;
    getText: Function;
}
export default class Counter {
    quill: QuillInstance;
    options: Config;
    constructor(quill: any, options: any);
    calculate(): any;
}
