export class Usuario {
  constructor(
    public _id: String,
    public nombre: String,
    public apellido: String,
    public email: String,
    public usuario: String,
    public password: String,
    public rol: String,
    public productos:[{}]
  ) {}
}
