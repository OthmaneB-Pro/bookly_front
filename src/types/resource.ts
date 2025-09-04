export type ResourceType = {
    id : string;
    type : "EVENT" | "ROOM" | "OPENSPACE" | "OFFICE";
    title : string;
    description : string;
    capacity : number;
    date: string;
    availability : boolean;
}