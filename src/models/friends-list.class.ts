export class Friend {
    id: number = 0;
    name: string = "";
    stateCode: string = "OH";
    school: string = "";

    constructor(id: number, name: string, stateCode: string, school: string) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
        this.school = school;
    }
}