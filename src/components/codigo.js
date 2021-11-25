//Comenzamos a filtrar por estado
publicaciones.forEach((element) => {
  //comprobamos que haya seleccionado un estado de telefono
  if (estado != "Ambos") {
    //seleccionara solo nuevos o usados dependiendo del filtro que se selecciono
    if (element.estado === estado) {
      //verificamos que tambien se filtrara por marcas de lo contrario lo omitimos
      if (marca.length != 0) {
        //iteramos las marcas que selecciono el usuario hasta encontrar coincidencias
        marca.forEach((element_marca) => {
          if (element.marca === element_marca) {
            //verificamos si se filtrara por sistema
            if (sistema.length != 0) {
              //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
              sistema.forEach((element_sistema) => {
                if (element.sistema === element_sistema) {
                  //verificamos si se va a filtrar por pantalla
                  if (pantalla.length != 0) {
                    //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                    pantalla.forEach((element_pantalla) => {
                      //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                      if (element.pantalla === element_pantalla) {
                        data_filtrada.push(element);
                      } else {
                        console.log(
                          "no se econtraron resultados para " +
                            element_pantalla +
                            " pulgadas"
                        );
                      }
                    });

                    //se omite el filtro de pantalla y se agrega la coincidencia si existe
                  } else {
                    //agregamos la coincidencia
                    data_filtrada.push(element);
                  }
                } else {
                  console.log(
                    "no se econtraron resultados para sistema " +
                      element_sistema
                  );
                }
              });

              //se omite filtro de sistema
            } else {
              //verificamos si se va a filtrar por pantalla
              if (pantalla.length != 0) {
                //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                pantalla.forEach((element_pantalla) => {
                  //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                  if (element.pantalla === element_pantalla) {
                    data_filtrada.push(element);
                  } else {
                    console.log(
                      "no se econtraron resultados para " +
                        element_pantalla +
                        " pulgadas"
                    );
                  }
                });

                //se omite el filtro de pantalla y se agrega la coincidencia si existe
              } else {
                //agregamos la coincidencia
                data_filtrada.push(element);
              }
            }
          } else {
            console.log(
              "no se encontraron resultados con la marca " + element.marca
            );
          }
        });

        //se omite el filtro de marca
      } else {
        //verificamos si se filtrara por sistema
        if (sistema.length != 0) {
          //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
          sistema.forEach((element_sistema) => {
            if (element.sistema === element_sistema) {
              //verificamos si se va a filtrar por pantalla
              if (pantalla.length != 0) {
                //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                pantalla.forEach((element_pantalla) => {
                  //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                  if (element.pantalla === element_pantalla) {
                    data_filtrada.push(element);
                  } else {
                    console.log(
                      "no se econtraron resultados para " +
                        element_pantalla +
                        " pulgadas"
                    );
                  }
                });

                //se omite el filtro de pantalla y se agrega la coincidencia si existe
              } else {
                //agregamos la coincidencia
                data_filtrada.push(element);
              }
            } else {
              console.log(
                "no se econtraron resultados para sistema " + element_sistema
              );
            }
          });

          //se omite filtro de sistema
        } else {
          //verificamos si se va a filtrar por pantalla
          if (pantalla.length != 0) {
            //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
            pantalla.forEach((element_pantalla) => {
              //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
              if (element.pantalla === element_pantalla) {
                data_filtrada.push(element);
              } else {
                console.log(
                  "no se econtraron resultados para " +
                    element_pantalla +
                    " pulgadas"
                );
              }
            });

            //se omite el filtro de pantalla y se agrega la coincidencia si existe
          } else {
            //agregamos la coincidencia
            data_filtrada.push(element);
          }
        }
      }
    }
  } else {
    //aca no importa si es nuevo o usado
    if (estado === "Ambos" || estado === null) {
      if (marca.length != 0) {
        //iteramos las marcas que selecciono el usuario hasta encontrar coincidencias
        marca.forEach((element_marca) => {
          if (element.marca === element_marca) {
            //verificamos si se filtrara por sistema
            if (sistema.length != 0) {
              //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
              sistema.forEach((element_sistema) => {
                if (element.sistema === element_sistema) {
                  //verificamos si se va a filtrar por pantalla
                  if (pantalla.length != 0) {
                    //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                    pantalla.forEach((element_pantalla) => {
                      //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                      if (element.pantalla === element_pantalla) {
                        data_filtrada.push(element);
                      } else {
                        console.log(
                          "no se econtraron resultados para " +
                            element_pantalla +
                            " pulgadas"
                        );
                      }
                    });

                    //se omite el filtro de pantalla y se agrega la coincidencia si existe
                  } else {
                    //agregamos la coincidencia
                    data_filtrada.push(element);
                  }
                } else {
                  console.log(
                    "no se econtraron resultados para sistema " +
                      element_sistema
                  );
                }
              });

              //se omite filtro de sistema
            } else {
              //verificamos si se va a filtrar por pantalla
              if (pantalla.length != 0) {
                //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                pantalla.forEach((element_pantalla) => {
                  //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                  if (element.pantalla === element_pantalla) {
                    data_filtrada.push(element);
                  } else {
                    console.log(
                      "no se econtraron resultados para " +
                        element_pantalla +
                        " pulgadas"
                    );
                  }
                });

                //se omite el filtro de pantalla y se agrega la coincidencia si existe
              } else {
                //agregamos la coincidencia
                data_filtrada.push(element);
              }
            }
          } else {
            console.log(
              "no se encontraron resultados con la marca " + element.marca
            );
          }
        });

        //se omite el filtro de marca
      } else {
        //verificamos si se filtrara por sistema
        if (sistema.length != 0) {
          //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
          sistema.forEach((element_sistema) => {
            if (element.sistema === element_sistema) {
              //verificamos si se va a filtrar por pantalla
              if (pantalla.length != 0) {
                //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                pantalla.forEach((element_pantalla) => {
                  //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                  if (element.pantalla === element_pantalla) {
                    data_filtrada.push(element);
                  } else {
                    console.log(
                      "no se econtraron resultados para " +
                        element_pantalla +
                        " pulgadas"
                    );
                  }
                });

                //se omite el filtro de pantalla y se agrega la coincidencia si existe
              } else {
                //agregamos la coincidencia
                data_filtrada.push(element);
              }
            } else {
              console.log(
                "no se econtraron resultados para sistema " + element_sistema
              );
            }
          });

          //se omite filtro de sistema
        } else {
          //verificamos si se va a filtrar por pantalla
          if (pantalla.length != 0) {
            //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
            pantalla.forEach((element_pantalla) => {
              //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
              if (element.pantalla === element_pantalla) {
                data_filtrada.push(element);
              } else {
                console.log(
                  "no se econtraron resultados para " +
                    element_pantalla +
                    " pulgadas"
                );
              }
            });

            //se omite el filtro de pantalla y se agrega la coincidencia si existe
          } else {
            //agregamos la coincidencia
            data_filtrada.push(element);
          }
        }
      }
    }
  }
});
