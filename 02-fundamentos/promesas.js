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

const id = 4;

getEmpleado(id)
    .then((empleado) => console.log(empleado))
    .catch(err=>console.log(err));


const getSalario = (id)=>{
    const salario = salarios.find((s)=> s.id == id)?.salario;

    const promesa_s =new Promise((resolve,reject)=>{
        (salario)
        ?resolve(salario)
        :reject(`No existe salario con id ${id}`);

    });
    return promesa_s;
};

const sl = 1;
getSalario(sl)
    .then((salario)=>console.log(salario))
    .catch(err=>console.log(err));


    let nombre;

    getEmpleado(id)
    .then (empleado=>{
        nombre=empleado;
        return getSalario(id)
    })
    .then (salario=>console.log('El empleado:',nombre,'tiene un salarios de:',salario))
    .catch(err=>console.log(err));