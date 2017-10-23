const JugadoresDB = {
    jugadores:[
        {numero:1, nombre: "Tigre Amaya", posicion: "D"},
        {numero:2, nombre: "Pipo gorosito", posicion: "D"},
        {numero:3, nombre: "Leo Apaza", posicion: "D"},
        {numero:4, nombre: "Colo Emanuel", posicion: "M"},
        {numero:5, nombre: "JPG", posicion: "M"},
        {numero:6, nombre: "Ariel Ventura", posicion: "D"},
    ],
    all: function(){ return this.jugadores},
    get: function(id){
        const isJugador= jugador => jugador.numero === id;
        return this.jugadores.find(isJugador)
    }
}
export default JugadoresDB