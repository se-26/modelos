exports.obtenerTodas = () => {
    return { mensaje: "Consulta de todas las PQRS." };
};

exports.obtenerPorId = (id) => {
    return { mensaje: `Consulta de la PQRS ${id}.` };
};

exports.crear = () => {
    return { mensaje: "PQRS registrada correctamente." };
};

exports.actualizar = (id) => {
    return { mensaje: `PQRS ${id} actualizada correctamente.` };
};

exports.eliminar = (id) => {
    return { mensaje: `PQRS ${id} eliminada correctamente.` };
};