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
    var boton_nav1 = document.getElementById('load-signup');
    
    
    // Event listener para botones
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
  })(window);