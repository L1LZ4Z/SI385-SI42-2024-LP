function loadDefaultForm() {
    // Identificar botones
    var defaultRadioButton = document.getElementById('default');
    var secondRadioButton = document.getElementById('second')
    
    // Cambio de comportamiento
    defaultRadioButton.addEventListener('change', function() {
        if (defaultRadioButton.checked) {
            fetch('snippets/snippet_form_estudiante.html')
              .then(response => response.text())
              .then(data => {
                document.getElementById('cuerpoDinamicoFormulario').innerHTML = data;
              })
              .catch(error => {
                console.error('Error al cargar el contenido dinamico del formulario:', error);
              });
          }
    });
    secondRadioButton.addEventListener('change', function() {
        if (secondRadioButton.checked) {
            fetch('snippets/snippet_form_empresa.html')
              .then(response => response.text())
              .then(data => {
                document.getElementById('cuerpoDinamicoFormulario').innerHTML = data;
              })
              .catch(error => {
                console.error('Error al cargar el contenido dinamico del formulario:', error);
              });
          }
    });
  
  // Marcar el botón de radio manualmente
  defaultRadioButton.checked = true;
  
  // Crear un evento 'change'
  var event = new Event('change');
  
  // Despachar el evento en el botón de radio
  defaultRadioButton.dispatchEvent(event);
  }
  
  // Funcion de arranque. Asigna comportamientos de forma dinamica al HTML
  (function(window) {
    // Carga el form principal
    loadDefaultForm();
      
    // Comportamiento de botones de barra nav
    var boton_logo = document.getElementById('logo');
    var boton_nav1 = document.getElementById('load-signup');
    var boton_nav2 = document.getElementById('load-about');
    var boton_nav3 = document.getElementById('load-users');
    var boton_nav4 = document.getElementById('load-benefits');
    var boton_nav5 = document.getElementById('load-model');

    // Event listener para botones
    boton_logo.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_sign_up.html')
                .then(response => response.text())
                .then(data => {
                  document.getElementById('main-content').innerHTML = data;
                  loadDefaultForm();
                })
                .catch(error => {
                  console.error('Error al cargar el contenido dinamico del formulario:', error);
                }); 
    });
    boton_nav1.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_sign_up.html')
                .then(response => response.text())
                .then(data => {
                  document.getElementById('main-content').innerHTML = data;
                  loadDefaultForm();
                })
                .catch(error => {
                  console.error('Error al cargar el contenido dinamico del formulario:', error);
                }); 
    });
    boton_nav2.addEventListener('click', function(event) {
        event.preventDefault();
        fetch('snippets/snippet_about.html')
                  .then(response => response.text())
                  .then(data => {
                    document.getElementById('main-content').innerHTML = data;
                  })
                  .catch(error => {
                    console.error('Error al cargar el contenido dinamico del formulario:', error);
                  });
      });
          boton_nav3.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_users.html')
                .then(response => response.text())
                .then(data => {
                  document.getElementById('main-content').innerHTML = data;
                })
                .catch(error => {
                  console.error('Error al cargar el contenido dinamico del formulario:', error);
                });
    });
    boton_nav4.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_benefits.html')
                .then(response => response.text())
                .then(data => {
                  document.getElementById('main-content').innerHTML = data;
                })
                .catch(error => {
                  console.error('Error al cargar el contenido dinamico del formulario:', error);
                });
    });
    boton_nav5.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_business_model.html')
                .then(response => response.text())
                .then(data => {
                  document.getElementById('main-content').innerHTML = data;
                })
                .catch(error => {
                  console.error('Error al cargar el contenido dinamico del formulario:', error);
                });
    });
  })(window);

//FORMULARIO

const btn = document.querySelector(".submit-btn")
btn.addEventListener("click", (e) => {
  e.preventDefault();
  var defaultRadioButton = document.getElementById('default');
  var secondRadioButton = document.getElementById('second');
  var terminos = document.getElementById('terminos-uso');
  var captcha = document.getElementById('no-robot');
  if (defaultRadioButton.checked){
    const camp1 = document.getElementById("nombres");
    const camp2 = document.getElementById("apellido-paterno");
    const camp3 = document.getElementById("universidad");
    const camp4 = document.getElementById("apellido-materno");
    const camp5 = document.getElementById("correo-electronico");
    mensaje = `${camp2.value}, ${camp1.value} de la ${camp3.value} tu registro ha sido realizado con exito!`;
    if(camp1.value === "" || camp2.value === "" || camp3.value === ""|| camp4.value === ""|| camp5.value === ""){mensaje=`Llena todos los campos para completar el registro!`; }
    if(!captcha.checked || !terminos.checked){mensaje=`Confirma los checkbox!`; }
  }
  if (secondRadioButton.checked){
    const camp1 = document.getElementById("nombre-empresa");
    const camp2 = document.getElementById("ruc");
    const camp3 = document.getElementById("sector");
    const camp4 = document.getElementById("direccion");
    const camp5 = document.getElementById("correo");
    mensaje = `${camp1.value} con RUC ${camp2.value} del sector ${camp3.value} su registro ha sido realizado con exito!`;
    if(camp1.value === "" || camp2.value === "" || camp3.value === ""|| camp4.value === ""|| camp5.value === ""){mensaje=`Llena todos los campos para completar el registro!`; }
    if(!captcha.checked || !terminos.checked){mensaje=`Confirma los checkbox!`; }
  }
  alert(mensaje);
  camp1.value = "";
  camp2.value = "";
  camp3.value = "";
  mensaje.value="";
})

