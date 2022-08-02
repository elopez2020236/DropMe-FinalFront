export class Productos {
  constructor(
    public _id: String,
    public nombre: String,
    public categoria: String,
    public precio: String,
    public fotos: String,
    public idFactura: [{}],
    public idUsuario: {}
  ){}
}
