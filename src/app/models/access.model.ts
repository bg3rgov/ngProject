export interface Option {

    access_description?: string, 
    figure_number: string;
    requiredPanels: string;
}

export class Access {

    constructor(
        public access_title: string, 
        public options?: Option[],
        public _id?: string
    ) {}
}