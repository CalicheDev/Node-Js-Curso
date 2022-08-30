const empleados = [
    {
      id: 1,
      nombre: "Fernando",
    },
    {
      id: 2,
      nombre: "Linda",
    },
    {
      id: 3,
      nombre: "Karen",
    },
  ];
  
  const salarios = [
    {
      id: 1,
      salario: 1000,
    },
    {
      id: 2,
      salario: 1500,
    },
  ];
  
  const getEmpleado = (id) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
  
    const promesa = new Promise((resolve, reject) => {
      if (empleado) {
        resolve(empleado);
      } else {
        reject(`No existe el empleado con id ${id}`);
      }
    });
    return promesa;
  };
  
//   const id = 1;   
  
  const getSalario = (id)=>{
      const salario = salarios.find((s)=> s.id == id)?.salario;
  
      const promesa_s =new Promise((resolve,reject)=>{
          (salario)
          ?resolve(salario)
          :reject(`No existe salario con id ${id}`);
  
      });
      return promesa_s;
  };
   
  
const getInfoUsuario = async(id) =>{

    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
    }catch(error){
        throw error;

    }

}

const id = 4;
getInfoUsuario(id)
.then (msg => console.log (msg))
.catch(err=>{console.log('Hay un error')});




