function rentalCar(tipoVehiculo, diasAlquiler, sillaParaBebe) {
    let tarifaPorDia;
  
    switch (tipoVehiculo.toLowerCase()) {
      case "compacto":
        tarifaPorDia = 1400000;
        break;
      case "mediano":
        tarifaPorDia = 1700000;
        break;
      case "camioneta":
        tarifaPorDia = 2800000;
        break;
      default:
        console.log("Tipo de vehículo inválido. Por favor, elija compacto, mediano o camioneta.");
        return;
    }
  

    let montoBase = tarifaPorDia * diasAlquiler;
  
    let costoSilla = sillaParaBebe ? 1200 * diasAlquiler : 0;
    let montoTotal = montoBase + costoSilla;
  
    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${montoTotal}`;
    
    if (sillaParaBebe) {
      mensaje += ", incluyendo el costo adicional por la silla para bebé.";
    }
  
    console.log(mensaje);
  }
  
  
  // rentalCar("compacto", 3, false);
  // rentalCar("mediano", 5, true);
  // rentalCar("camioneta", 2, true);
  // rentalCar("motocicleta", 3, false); // Caso de tipo de vehículo inválido
  
  // rentalCar("compacto", 3, false);
  // rentalCar("compacto", 3, true);
  