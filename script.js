/* =========================================================
   ANIMACIONES REVEAL
========================================================= */

const revealItems =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          setTimeout(() => {

            entry.target.classList.add("visible");

          }, index * 90);

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.15,

      rootMargin:
        "0px 0px -60px 0px"
    }

  );


revealItems.forEach((item) => {

  revealObserver.observe(item);

});


/* =========================================================
   ANIMACIÓN DE LAS LETRAS ARNt
========================================================= */

const titleLetters =
  document.querySelectorAll(
    ".hero__title span"
  );


titleLetters.forEach((letter) => {

  letter.addEventListener(
    "mouseenter",
    () => {

      letter.style.transform =
        "translateY(-10px) rotate(-4deg) scale(1.06)";

    }
  );


  letter.addEventListener(
    "mouseleave",
    () => {

      letter.style.transform = "";

    }
  );

});


/* =========================================================
   FORMULARIO
========================================================= */

const form =
  document.getElementById(
    "questionForm"
  );


const status =
  document.getElementById(
    "formStatus"
  );


form.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const name =
      document
        .getElementById("name")
        .value
        .trim();


    const question =
      document
        .getElementById("question")
        .value
        .trim();


    if (!name || !question) {

      status.textContent =
        "Por favor, completá tu nombre o curso y tu pregunta.";

      return;

    }


    status.textContent =
      "¡Gracias! Tu pregunta fue registrada localmente.";


    const questions =
      JSON.parse(
        localStorage.getItem(
          "arnt-preguntas"
        ) || "[]"
      );


    questions.push({

      nombre: name,

      pregunta: question,

      fecha: new Date().toISOString()

    });


    localStorage.setItem(
      "arnt-preguntas",
      JSON.stringify(questions)
    );


    form.reset();

  }
);
