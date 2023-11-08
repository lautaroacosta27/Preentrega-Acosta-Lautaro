$(document).ready(function() {
    const reservaForm = $("#reservaForm");
    const reservaDetails = $("#reservaDetails");

    $("#btnReservar").click(function() {
        reservaForm.removeClass("hidden");
        reservaDetails.addClass("hidden");
    });

    $("#btnFinalizarReserva").click(function(e) {
      e.preventDefault();

      // Obtener los valores del formulario
      const nombreUsuario = $("#nombreUsuario").val();
      const apellidoUsuario = $("#apellidoUsuario").val();
      const fecha = $("#fecha").val();
      const hora = $("#hora").val();
      const cantidadPersonas = $("#cantidadPersonas").val();
      const nombrePersona = $("#nombrePersona").val();
      const opcionMenu = $("#opcionMenu").val();

      let formValid = true;

      // Validación de la cantidad de personas
      const cantidadPersonasInt = parseInt(cantidadPersonas, 10);

      if (cantidadPersonasInt < 1 || cantidadPersonasInt > 8) {
        $("#cantidadPersonasError").text("La cantidad de personas debe estar entre 1 y 8.");
        formValid = false;
      } else {
        $("#cantidadPersonasError").text("");
      }

      if (formValid) {
        const menus = [
          {
            entrada: "Croquetas",
            platoPrincipal: "Asado",
            bebida: "Gaseosa y Cerveza",
            postre: "Helado"
          },
          {
            entrada: "Rabas",
            platoPrincipal: "Pasta",
            bebida: "Gaseosa y Vino",
            postre: "Helado"
          }
        ];

        if (opcionMenu === "1" || opcionMenu === "2") {
            const menuElegido = menus[opcionMenu - 1]

          // Mostrar los detalles de la reserva
          $("#nombreApellido").text(nombreUsuario + " " + apellidoUsuario);
          $("#fechaHora").text(fecha + " " + hora + "hs");
          $("#cantidadPersonasReserva").text(cantidadPersonas);
          $("#nombresPersonas").empty();
          $("#nombresPersonas").append("<li>" + nombrePersona + "</li>");
          $("#menuElegido").empty();
          $("#menuElegido").append("<li>Entrada: " + menuElegido.entrada + "</li>");
          $("#menuElegido").append("<li>Plato principal: " + menuElegido.platoPrincipal + "</li>");
          $("#menuElegido").append("<li>Bebida: " + menuElegido.bebida + "</li>");
          $("#menuElegido").append("<li>Postre: " + menuElegido.postre + "</li>");

          reservaForm.addClass("hidden");
          reservaDetails.removeClass("hidden");
          // Guardar datos en el almacenamiento local (localStorage)
          localStorage.setItem("nombreUsuario", nombreUsuario);
          localStorage.setItem("apellidoUsuario", apellidoUsuario);
          localStorage.setItem("fechaReserva", fecha);
          localStorage.setItem("horaReserva", hora);
        }
      }
    });

      // Recuperar datos almacenados en localStorage y mostrarlos en outputDiv
      let nombreRecuperado = localStorage.getItem("nombreUsuario");
      let apellidoRecuperado = localStorage.getItem("apellidoUsuario");
      let fechaRecuperada = localStorage.getItem("fechaReserva");
      let horaRecuperada = localStorage.getItem("horaReserva");

      let outputDiv = $("#outputDiv");
      outputDiv.append("Datos almacenados:");
      outputDiv.append("Nombre: " + nombreRecuperado);
      outputDiv.append("Apellido: " + apellidoRecuperado);
      outputDiv.append("Fecha de reserva: " + fechaRecuperada);
      outputDiv.append("Hora de reserva: " + horaRecuperada);
  });