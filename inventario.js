class Producto{
        
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    };

    info(){
        return `Código  ${this.codigo} --- Producto:${this.nombre} --- Cantidad: ${this.cantidad} --- Precio: $${this.costo}`
    }
};

class Inventario{
        
    constructor(){
        this.listaProductos = new Array();
    };

    agregarProducto(nuevo){
        this.listaProductos.push(nuevo)
    }

    eliminar(codigo){
        
            for (let i = 0; i <= this.listaProductos.length-1; i++) {
                if (this.listaProductos[i].codigo == codigo){
                        for (let x = i; x <= this.listaProductos.length-1; x++) {
                            this.listaProductos[i] = this.listaProductos[i+1];
                        }
                }
            }
            this.listaProductos.pop();
            alert(`El producto con codigo ${codigo} fue eliminado`)
    };

    buscar(codigo){
        let producto = false;
        let inicio = 0;
        let fin = this.listaProductos.length - 1;
        let mitad = Math.floor((inicio + fin) / 2);
        while (inicio <= fin) {
            if (Number(this.listaProductos[mitad].codigo) === Number(codigo)) {
                producto = this.listaProductos[mitad];
                break;
            } else if (Number(this.listaProductos[mitad].codigo) < Number(codigo)) {
                inicio = mitad + 1;
            } else {
                fin = mitad - 1;
            }
            mitad = Math.floor((inicio + fin) / 2);
        }
        return producto;
    }
    

    //buscar(codigo){
      //  let value = 0;
        //for (let i = 0; i < this.listaProductos.length; i++) {
          //  if (this.listaProductos[i].codigo == codigo) {
            //    value = 1;
              //  return this.listaProductos[i];
           // } else {
            //    return value;
           // }
     //   }
  //  };

    listar(){
        let lista = '';
        let contador = 0;
        this.listaProductos.forEach(producto => {
            lista += this.listaProductos[contador].info()+"\n";
            contador++
        });
        return `                LISTA
        \n${lista}`;
    };
    

    listarInverso(){
        let lista = '';
        for(let i=this.listaProductos.length-1;i>=0;i--){
            lista += this.listaProductos[i].info()+"\n";
        }
        return `                LISTA INVERSA
        \n${lista}`;
    };
};

const miInv = new Inventario()

const btnAgregar = document.getElementById('btnAgregar')
btnAgregar.addEventListener('click', () => {
    const codigo = document.getElementById('txtCodigo').value
    const nombre = document.getElementById('txtNombre').value
    const cantidad = document.getElementById('txtCantidad').value
    const costo = document.getElementById('txtCosto').value
    const producto = new Producto(codigo, nombre, cantidad, costo)
    miInv.agregarProducto(producto)
    alert('El producto fue agregado')
});

const btnEliminar = document.getElementById('btnEliminar')
btnEliminar.addEventListener('click', () => {
    const codigo = document.getElementById('txtCodigo').value
    miInv.eliminar(codigo)

})

const btnListar = document.getElementById('btnListar')
btnListar.addEventListener('click', () => {
    alert(miInv.listar())
});

const btnListarInverso = document.getElementById('btnListarInverso')
btnListarInverso.addEventListener('click', () => {
    alert(miInv.listarInverso())
});