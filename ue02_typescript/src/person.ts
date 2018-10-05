
export class Person {

    private _vorname: string  ;
    private _nachname: string;
    private _birthYear: number;

    // tslint:disable: one-line
    public constructor (vorname: string, nachname:  string, birthYear: number) {
    // tslint:enable: one-line
        this._vorname = vorname;
        this._nachname = nachname;
        this._birthYear = birthYear;
     }


     public get vorname   (): string {
         return this.vorname ;
     }

     public get nachname  (): string {
         return this.nachname ;
    }

     public get birthYear (): number {
         return this.birthYear;
     }


}