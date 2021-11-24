publicaciones.forEach((element) => {
  //comprobamos que haya seleccionado un estado de telefono
  if (estado != "Ambos") {
    //seleccionara solo nuevos o usados dependiendo del filtro que se selecciono
    if (element.estado === estado) {
      //Verificamos si vamos a filtrar por marca o no
      if (marca.length != 0) {
        //iteramos las marcas que selecciono el usuario hasta encontrar coincidencias
        marca.forEach((element_marca) => {
          if (element.marca === element_marca) {
            //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
            sistema.forEach((element_sistema) => {
              if (element.sistema === element_sistema) {
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
              } else {
                console.log(
                  "no se econtraron resultados para sistema " + element_sistema
                );
              }
            });
          } else {
            console.log(
              "no se encontraron resultados con la marca " + element.marca
            );
          }
        });
      } else {
        //verificamos si vamos a filtrar por sistema
        if (sistema.length != 0) {
          //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
          sistema.forEach((element_sistema) => {
            if (element.sistema === element_sistema) {
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
            } else {
              console.log(
                "no se econtraron resultados para sistema " + element_sistema
              );
            }
          });
        } else {
          //verificamos si vamos a filtrar por pantalla o no
          if (pantalla.length != 0) {
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
          }
        }
      }
    } else {
      //filtrar solo por estado
      console.log("filarfr");
    }
  } else {
    //aca no importa si es nuevo o usado
    if (estado === "Ambos" || estado === null) {
      marca.forEach((element_marca) => {
        if (element.marca === element_marca) {
          //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
          sistema.forEach((element_sistema) => {
            if (element.sistema === element_sistema) {
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
            } else {
              console.log(
                "no se econtraron resultados para sistema " + element_sistema
              );
            }
          });
        } else {
          console.log(
            "no se encontraron resultados con la marca " + element.marca
          );
        }
      });
    }
  }
});
