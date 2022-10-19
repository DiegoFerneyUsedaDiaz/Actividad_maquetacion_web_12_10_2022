addEventListener("DOMContentLoaded", async(e) => {

    let peticion = await fetch("https://diegoferneyusedadiaz.000webhostapp.com/Actividad_maquetacion_web_12_10_2022/api.php");
    let datos = await peticion.json();
    console.log(datos);
    document.querySelector(".logo").innerHTML = datos.imgenEmpresa;
    document.querySelector(".navigation li:nth-child(1) a").innerHTML = datos.menu[0];
    document.querySelector(".navigation li:nth-child(2) a").innerHTML = datos.menu[1];
    document.querySelector(".navigation li:nth-child(3) a").innerHTML = datos.menu[2];
    document.querySelector(".navigation li:nth-child(4) a").innerHTML = datos.menu[3];
    document.querySelector("#text").innerHTML = datos.titulo;
    document.querySelector(".sec h2").innerHTML = datos.secion;
    document.querySelector(".sec p").innerHTML = `Nombre del servidor PHP: ${datos.servidor} <br><br> ${datos.parrafo}`;

    gsap.from("#m1", {
        scrollTrigger: {
            scrub: true
        },
        y: 100,
    })
    gsap.from("#m2", {
        scrollTrigger: {
            scrub: true
        },
        y: 50,
    })
    gsap.from("#t2", {
        scrollTrigger: {
            scrub: true
        },
        x: -50,
    })
    gsap.from("#t1", {
        scrollTrigger: {
            scrub: true
        },
        x: 50,
    })
    gsap.from("#man", {
        scrollTrigger: {
            scrub: true
        },
        x: -250,
    })
    gsap.from("#plants", {
        scrollTrigger: {
            scrub: true
        },
        x: -50,
    })
    gsap.from("#text", {
        scrollTrigger: {
            scrub: true
        },
        x: 600,
    })
}) 



















}) 








