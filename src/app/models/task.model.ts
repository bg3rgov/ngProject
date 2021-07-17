import { Access } from "./access.model";

export class Task {

    constructor(
        
        public task_number: string,
        public task_title: string,
        public task_description: string,
        public access_requirements: Access[],
        public _id?: string,
    ) {}
}