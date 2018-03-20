export abstract class Animal {
    // private, public, protected
    constructor(protected _nombre: string) {
    }

    get nombre(): string { // obtener
        return this._nombre;
    }

    set nombre(nombre: string) { // establecer
        if (nombre.length <= 2) {
            console.log(`el nombre es muy corto ${nombre.length}`);
            return;
        } else {
            this._nombre = nombre;
        }
        
    }

    abstract desplazar(): void {
    }
}
