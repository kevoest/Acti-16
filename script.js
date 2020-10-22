const app = Vue.createApp({
    data: () =>({
        productos: [
            {nombre: "jugo", cantidad: 2},
            {nombre: "miel", cantidad: 5},
            {nombre: "waffles", cantidad: 0}
        ],
        productoNuevo: "",
        total: 0,
    }),
    methods:{
        agregarProductos(){
            this.productos.push(
                {nombre: this.productoNuevo, cantidad: 0},
            )
            this.productoNuevo = "";
        }
    },
    computed:{
        sumarCantidad(){
            this.total = 0;
            for(productos of this.productos){
                this.total = this.total + productos.cantidad;
            }
            return this.total;
        }
    } 
})