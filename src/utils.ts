// const nuevaFecha = new Date(Date.UTC(2023, 09, 20, 10, 11, 08));
export const peruDateFormatter = new Intl.DateTimeFormat("es-PE", {
  dateStyle: "medium",
  timeStyle: "long",
  // timeZone: "America/Santiago",
});
// console.log(fechaConIntl.format(nuevaFecha));
