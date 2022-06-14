const exampleHTML = document.getElementById("exampleHTML");
const exampleH = document.getElementById("exampleH");
const exampleCSS = document.getElementById("exampleCSS");
const exampleC = document.getElementById("exampleC");
const exampleJava = document.getElementById("exampleJava");
const exampleJ = document.getElementById("exampleJ");
const exampleIFrame = document.getElementById("exampleIFrame");
const exampleI = document.getElementById("exampleI");
const iframeLast = document.getElementById("iframeLast");
const indexIndex = document.getElementById("indexIndex");
const indexPage = document.getElementById("indexPage");
const indexPage2 = document.getElementById("indexPage2");
const indexPage3 = document.getElementById("indexPage3");
const indexPage4 = document.getElementById("indexPage4");
const indiceIndex = document.getElementById("indiceIndex");
const indicePage = document.getElementById("indicePage");
const indicePage2 = document.getElementById("indicePage2");
const indicePage3 = document.getElementById("indicePage3");
const indicePage4 = document.getElementById("indicePage4");

const seeExampleHTML = () => {
  if (exampleHTML.dataset.action == "mostrar") {
    exampleHTML.textContent = "Ocultar Ejemplo";
    exampleH.style.display = "block";
    exampleHTML.dataset.action = "ocultar";
  } else if (exampleHTML.dataset.action == "ocultar") {
    exampleH.style.display = "none";
    exampleHTML.dataset.action = "mostrar";
    exampleHTML.textContent = "Ver Ejemplo";
  }
};

const seeExampleCSS = () => {
  if (exampleCSS.dataset.action == "mostrar") {
    exampleCSS.textContent = "Ocultar Ejemplo";
    exampleC.style.display = "block";
    exampleCSS.dataset.action = "ocultar";
  } else if (exampleCSS.dataset.action == "ocultar") {
    exampleC.style.display = "none";
    exampleCSS.dataset.action = "mostrar";
    exampleCSS.textContent = "Ver Ejemplo";
  }
};

const seeExampleJava = () => {
  if (exampleJava.dataset.action == "mostrar") {
    exampleJava.textContent = "Ocultar Ejemplo";
    exampleJ.style.display = "block";
    exampleJava.dataset.action = "ocultar";
  } else if (exampleJava.dataset.action == "ocultar") {
    exampleJ.style.display = "none";
    exampleJava.dataset.action = "mostrar";
    exampleJava.textContent = "Ver Ejemplo";
  }
};

const seeExampleIFrame = () => {
  if (exampleIFrame.dataset.action == "mostrar") {
    exampleIFrame.textContent = "Ocultar Ejemplo";
    exampleI.style.display = "block";
    iframeLast.style.display = "block";
    exampleIFrame.dataset.action = "ocultar";
  } else if (exampleIFrame.dataset.action == "ocultar") {
    exampleI.style.display = "none";
    iframeLast.style.display = "none";
    exampleIFrame.dataset.action = "mostrar";
    exampleIFrame.textContent = "Ver Ejemplo";
  }
};

const displayBlockNoneIndex = () => {
  if (indexIndex.dataset.action == "mostrar") {
    indiceIndex.classList.replace("barIndexOff", "barIndex");
    indexIndex.innerHTML = `<img src="/assets/image/close_FILL0_wght400_GRAD0_opsz48.svg" alt="quitar" class="iIndice">`;
    indexIndex.dataset.action = "ocultar";
  } else if (indexIndex.dataset.action == "ocultar") {
    indiceIndex.classList.replace("barIndex", "barIndexOff");
    indexIndex.innerHTML = `<img src="/assets/image/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" alt="indice" class="iIndice">`;
    indexIndex.dataset.action = "mostrar";
  }
};

const displayBlockNonePage = () => {
  if (indexPage.dataset.action == "mostrar") {
    indicePage.classList.replace("barIndexOff", "barIndex");
    indexPage.innerHTML = `<img src="/assets/image/close_FILL0_wght400_GRAD0_opsz48.svg" alt="quitar" class="iIndice">`;
    indexPage.dataset.action = "ocultar";
  } else if (indexPage.dataset.action == "ocultar") {
    indicePage.classList.replace("barIndex", "barIndexOff");
    indexPage.innerHTML = `<img src="/assets/image/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" alt="indice" class="iIndice">`;
    indexPage.dataset.action = "mostrar";
  }
};

const displayBlockNonePage2 = () => {
  if (indexPage2.dataset.action == "mostrar") {
    indicePage2.classList.replace("barIndexOff", "barIndex");
    indexPage2.innerHTML = `<img src="/assets/image/close_FILL0_wght400_GRAD0_opsz48.svg" alt="quitar" class="iIndice">`;
    indexPage2.dataset.action = "ocultar";
  } else if (indexPage2.dataset.action == "ocultar") {
    indicePage2.classList.replace("barIndex", "barIndexOff");
    indexPage2.innerHTML = `<img src="/assets/image/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" alt="indice" class="iIndice">`;
    indexPage2.dataset.action = "mostrar";
  }
};

const displayBlockNonePage3 = () => {
  if (indexPage3.dataset.action == "mostrar") {
    indicePage3.classList.replace("barIndexOff", "barIndex");
    indexPage3.innerHTML = `<img src="/assets/image/close_FILL0_wght400_GRAD0_opsz48.svg" alt="quitar" class="iIndice">`;
    indexPage3.dataset.action = "ocultar";
  } else if (indexPage3.dataset.action == "ocultar") {
    indicePage3.classList.replace("barIndex", "barIndexOff");
    indexPage3.innerHTML = `<img src="/assets/image/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" alt="indice" class="iIndice">`;
    indexPage3.dataset.action = "mostrar";
  }
};

const displayBlockNonePage4 = () => {
  if (indexPage4.dataset.action == "mostrar") {
    indicePage4.classList.replace("barIndexOff", "barIndex");
    indexPage4.innerHTML = `<img src="/assets/image/close_FILL0_wght400_GRAD0_opsz48.svg" alt="quitar" class="iIndice">`;
    indexPage4.dataset.action = "ocultar";
  } else if (indexPage4.dataset.action == "ocultar") {
    indicePage4.classList.replace("barIndex", "barIndexOff");
    indexPage4.innerHTML = `<img src="/assets/image/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" alt="indice" class="iIndice">`;
    indexPage4.dataset.action = "mostrar";
  }
};

console.log(window.location);

if (window.location.pathname == "/index.html") {
  exampleHTML.addEventListener("click", () => {
    seeExampleHTML();
  });
}

if (window.location.pathname == "/page.html") {
  exampleCSS.addEventListener("click", () => {
    seeExampleCSS();
  });
}

if (window.location.pathname == "/page2.html") {
  exampleJava.addEventListener("click", () => {
    seeExampleJava();
  });
}

if (window.location.pathname == "/page3.html") {
  exampleIFrame.addEventListener("click", () => {
    seeExampleIFrame();
  });
}

if (window.location.pathname == "/index.html") {
  indexIndex.addEventListener("click", () => {
    displayBlockNoneIndex();
  });
}

if (window.location.pathname == "/page.html") {
  indexPage.addEventListener("click", () => {
    displayBlockNonePage();
  });
}

if (window.location.pathname == "/page2.html") {
  indexPage2.addEventListener("click", () => {
    displayBlockNonePage2();
  });
}

if (window.location.pathname == "/page3.html") {
  indexPage3.addEventListener("click", () => {
    displayBlockNonePage3();
  });
}

if (window.location.pathname == "/page4.html") {
  indexPage4.addEventListener("click", () => {
    displayBlockNonePage4();
  });
}

//Ejecutar eventos color 
if (window.location.pathname == "/index.html") {
  indexIndex.addEventListener("click", () => {
    eventoColorIndex();
  })
} else if (window.location.pathname == "/page.html") {
  indexPage.addEventListener("click", () => {
    eventoColorPage();
  })
} else if (window.location.pathname == "/page2.html") {
  indexPage2.addEventListener("click", () => {
    eventoColorPage2();
  })
} else if (window.location.pathname == "/page3.html") {
  indexPage3.addEventListener("click", () => {
    eventoColorPage3();
  })
} else if (window.location.pathname == "/page4.html") {
  indexPage4.addEventListener("click", () => {
    eventoColorPage4();
  })
}

//eventoColorIndex 
const eventoColorIndex = () => {
const html = document.getElementById("html");
const htmllist = document.getElementById("htmllist");
const uso = document.getElementById("uso");
const usolist = document.getElementById("usolist");
const historia = document.getElementById("historia");
const historialist = document.getElementById("historialist");
const html5 = document.getElementById("html5");
const html5list = document.getElementById("html5list");
const novedades = document.getElementById("novedades");
const novedadeslist = document.getElementById("novedadeslist");
const ventajas = document.getElementById("ventajas");
const ventajaslist = document.getElementById("ventajaslist");
const sintaxis = document.getElementById("sintaxis");
const sintaxislist = document.getElementById("sintaxislist");

const htmlcolor = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      console.log("html esta en el viewport");
      htmllist.classList.add("crimson");
    }else{
      htmllist.classList.remove("crimson"); 
    }
  });
}
const observadorhtml = new IntersectionObserver(htmlcolor, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.0
})
observadorhtml.observe(html);

const usocolor = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      console.log("uso esta en el viewport");
      usolist.classList.add("crimson");
    } else{
      usolist.classList.remove("crimson"); 
    }
  });
}
const observadoruso = new IntersectionObserver(usocolor, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.0
})
observadoruso.observe(uso);


const historiacolor = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      console.log("historia esta en el viewport");
      historialist.classList.add("crimson");
    } else{
      historialist.classList.remove("crimson"); 
    }
  });
}
const observadorhistoria = new IntersectionObserver(historiacolor, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.0
})
observadorhistoria.observe(historia);

const html5color = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      console.log("html5 esta en el viewport");
      html5list.classList.add("crimson");
    } else{
      html5list.classList.remove("crimson"); 
    }
  });
}
const observadorhtml5 = new IntersectionObserver(html5color, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.0
})
observadorhtml5.observe(html5);

const novedadescolor = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      console.log("novedades esta en el viewport");
      novedadeslist.classList.add("crimson");
    } else{
      novedadeslist.classList.remove("crimson"); 
    }
  });
}
const observadornovedades = new IntersectionObserver(novedadescolor, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.0
})
observadornovedades.observe(novedades);

const ventajascolor = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      console.log("ventajas esta en el viewport");
      ventajaslist.classList.add("crimson");
    }else{
      ventajaslist.classList.remove("crimson"); 
    }
  });
}
const observadorventajas = new IntersectionObserver(ventajascolor, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.0
})
observadorventajas.observe(ventajas);

const sintaxiscolor = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      console.log("sintaxis esta en el viewport");
      sintaxislist.classList.add("crimson");
    } else{
      sintaxislist.classList.remove("crimson"); 
    }
  });
}
const observadorsintaxis = new IntersectionObserver(sintaxiscolor, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.0
})
observadorsintaxis.observe(sintaxis);
}

//Evento color page 
const eventoColorPage = () => {
  const css = document.getElementById("css");
  const csslist = document.getElementById("csslist");
  const formatoscss = document.getElementById("formatoscss");
  const formatoscsslist = document.getElementById("formatoscsslist");
  const sintaxiscss = document.getElementById("sintaxiscss");
  const sintaxiscsslist = document.getElementById("sintaxiscsslist");
  const bootstrap = document.getElementById("bootstrap");
  const bootstraplist = document.getElementById("bootstraplist");
  const funcionalidadboot = document.getElementById("funcionalidadboot");
  const funcionalidadbootlist = document.getElementById("funcionalidadbootlist");
  
  const csscolor = (entradas, observador) => {
    console.log(entradas);
    console.log(observador);
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        csslist.classList.add("crimson");
      }else{
        csslist.classList.remove("crimson"); 
      }
    });
  }
  const observadorcss = new IntersectionObserver(csscolor, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.0
  })
  observadorcss.observe(css);
  
  const formatoscsscolor = (entradas, observador) => {
    console.log(entradas);
    console.log(observador);
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        formatoscsslist.classList.add("crimson");
      } else{
        formatoscsslist.classList.remove("crimson"); 
      }
    });
  }
  const observadorformatoscss = new IntersectionObserver(formatoscsscolor, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.0
  })
  observadorformatoscss.observe(formatoscss);
  
  
  const sintasixcsscolor = (entradas, observador) => {
    console.log(entradas);
    console.log(observador);
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        sintaxiscsslist.classList.add("crimson");
      } else{
        sintaxiscsslist.classList.remove("crimson"); 
      }
    });
  }
  const observadorsintaxiscss = new IntersectionObserver(sintasixcsscolor, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.0
  })
  observadorsintaxiscss.observe(sintaxiscss);
  
  const bootstrapcolor = (entradas, observador) => {
    console.log(entradas);
    console.log(observador);
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        bootstraplist.classList.add("crimson");
      } else{
        bootstraplist.classList.remove("crimson"); 
      }
    });
  }
  const observadorboot = new IntersectionObserver(bootstrapcolor, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.0
  })
  observadorboot.observe(bootstrap);
  
  const funcionalidadbootcolor = (entradas, observador) => {
    console.log(entradas);
    console.log(observador);
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        funcionalidadbootlist.classList.add("crimson");
      } else{
        funcionalidadbootlist.classList.remove("crimson"); 
      }
    });
  }
  const observadorfuncionalidadboot = new IntersectionObserver(funcionalidadbootcolor, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.0
  })
  observadorfuncionalidadboot.observe(funcionalidadboot);
  }


  //eventoColorPage2
  const eventoColorPage2 = () => {
    const java = document.getElementById("java");
    const javalist = document.getElementById("javalist");
    const historiajava = document.getElementById("historiajava");
    const historiajavalist = document.getElementById("historiajavalist");
    const caracteristicasjava = document.getElementById("caracteristicasjava");
    const caracteristicasjavalist = document.getElementById("caracteristicasjavalist");
    const sintaxisjava = document.getElementById("sintaxisjava");
    const sintaxisjavalist = document.getElementById("sintaxisjavalist");
    const jquery = document.getElementById("jquery");
    const jquerylist = document.getElementById("jquerylist");
    const usojquery = document.getElementById("usojquery");
    const usojquerylist = document.getElementById("usojquerylist");
    const caracteristicasjquery = document.getElementById("caracteristicasjquery");
    const caracteristicasjquerylist = document.getElementById("caracteristicasjquerylist");
    
    const javacolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          javalist.classList.add("crimson");
        }else{
          javalist.classList.remove("crimson"); 
        }
      });
    }
    const observadorjava = new IntersectionObserver(javacolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorjava.observe(java);
    
    const historiajavacolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          historiajavalist.classList.add("crimson");
        } else{
          historiajavalist.classList.remove("crimson"); 
        }
      });
    }
    const observadorhistoriajava = new IntersectionObserver(historiajavacolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorhistoriajava.observe(historiajava);
    
    
    const caracteristicasjavacolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          caracteristicasjavalist.classList.add("crimson");
        } else{
          caracteristicasjavalist.classList.remove("crimson"); 
        }
      });
    }
    const observadorcaracteristicasjava = new IntersectionObserver(caracteristicasjavacolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorcaracteristicasjava.observe(caracteristicasjava);
    
    const sintaxisjavacolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          sintaxisjavalist.classList.add("crimson");
        } else{
          sintaxisjavalist.classList.remove("crimson"); 
        }
      });
    }
    const observadorsintaxisjava = new IntersectionObserver(sintaxisjavacolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorsintaxisjava.observe(sintaxisjava);
    
    const jquerycolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          jquerylist.classList.add("crimson");
        } else{
          jquerylist.classList.remove("crimson"); 
        }
      });
    }
    const observadorjquery = new IntersectionObserver(jquerycolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorjquery.observe(jquery);
    
    const usojquerycolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          usojquerylist.classList.add("crimson");
        }else{
          usojquerylist.classList.remove("crimson"); 
        }
      });
    }
    const observadorusojquery = new IntersectionObserver(usojquerycolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorusojquery.observe(usojquery);
    
    const caracteristicasjquerycolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          caracteristicasjquerylist.classList.add("crimson");
        } else{
          caracteristicasjquerylist.classList.remove("crimson"); 
        }
      });
    }
    const observadorcaracteristicasjquery = new IntersectionObserver(caracteristicasjquerycolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorcaracteristicasjquery.observe(caracteristicasjquery);
    }

     //eventoColorPage3
  const eventoColorPage3 = () => {
    const responsive = document.getElementById("responsive");
    const responsivelist = document.getElementById("responsivelist");
    const ventajasresponsive = document.getElementById("ventajasresponsive");
    const ventajasresponsivelist = document.getElementById("ventajasresponsivelist");
    const iframe = document.getElementById("iframe");
    const iframelist = document.getElementById("iframelist");
    const usariframe = document.getElementById("usariframe");
    const usariframelist = document.getElementById("usariframelist");
    
    const responsivecolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          responsivelist.classList.add("crimson");
        }else{
          responsivelist.classList.remove("crimson"); 
        }
      });
    }
    const observadorresponsive = new IntersectionObserver(responsivecolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorresponsive.observe(responsive);
    
    const ventajasresponsivecolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          ventajasresponsivelist.classList.add("crimson");
        } else{
          ventajasresponsivelist.classList.remove("crimson"); 
        }
      });
    }
    const observadorventajasresponsive = new IntersectionObserver(ventajasresponsivecolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorventajasresponsive.observe(ventajasresponsive);
    
    
    const iframecolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          iframelist.classList.add("crimson");
        } else{
          iframelist.classList.remove("crimson"); 
        }
      });
    }
    const observadoriframe = new IntersectionObserver(iframecolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadoriframe.observe(iframe);
    
    const usariframecolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          usariframelist.classList.add("crimson");
        } else{
          usariframelist.classList.remove("crimson"); 
        }
      });
    }
    const observadorusariframe = new IntersectionObserver(usariframecolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorusariframe.observe(usariframe);
    }


    //eventoColorPage4
  const eventoColorPage4 = () => {
    const hosting = document.getElementById("hosting");
    const hostinglist = document.getElementById("hostinglist");
    const funcionamientohosting = document.getElementById("funcionamientohosting");
    const funcionamientohostinglist = document.getElementById("funcionamientohostinglist");
    const tiposhosting = document.getElementById("tiposhosting");
    const tiposhostinglist = document.getElementById("tiposhostinglist");
    const conclusion = document.getElementById("conclusion");
    const conclusionlist = document.getElementById("conclusionlist");
    const dominio = document.getElementById("dominio");
    const dominiolist = document.getElementById("dominiolist");
    const partesdominio = document.getElementById("partesdominio");
    const partesdominiolist = document.getElementById("partesdominiolist");
    const funcionamientodominios = document.getElementById("funcionamientodominios");
    const funcionamientodominioslist = document.getElementById("funcionamientodominioslist");
    const tiposdominios = document.getElementById("tiposdominios");
    const tiposdominioslist = document.getElementById("tiposdominioslist");
    
    const hostingcolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          hostinglist.classList.add("crimson");
        }else{
          hostinglist.classList.remove("crimson"); 
        }
      });
    }
    const observadorhosting = new IntersectionObserver(hostingcolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorhosting.observe(hosting);
    
    const funcionamientohostingcolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          funcionamientohostinglist.classList.add("crimson");
        } else{
          funcionamientohostinglist.classList.remove("crimson"); 
        }
      });
    }
    const observadorfuncionamientohosting = new IntersectionObserver(funcionamientohostingcolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorfuncionamientohosting.observe(funcionamientohosting);
    
    
    const tiposhostingcolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          tiposhostinglist.classList.add("crimson");
        } else{
          tiposhostinglist.classList.remove("crimson"); 
        }
      });
    }
    const observadortiposhosting = new IntersectionObserver(tiposhostingcolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadortiposhosting.observe(tiposhosting);
    
    const conclusioncolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          conclusionlist.classList.add("crimson");
        } else{
          conclusionlist.classList.remove("crimson"); 
        }
      });
    }
    const observadorconclusion = new IntersectionObserver(conclusioncolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorconclusion.observe(conclusion);
    
    const dominiocolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          dominiolist.classList.add("crimson");
        } else{
          dominiolist.classList.remove("crimson"); 
        }
      });
    }
    const observadordominio = new IntersectionObserver(dominiocolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadordominio.observe(dominio);
    
    const partesdominiocolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          partesdominiolist.classList.add("crimson");
        }else{
          partesdominiolist.classList.remove("crimson"); 
        }
      });
    }
    const observadorpartesdominio= new IntersectionObserver(partesdominiocolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorpartesdominio.observe(partesdominio);
    
    const funcionamientodominioscolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          funcionamientodominioslist.classList.add("crimson");
        } else{
          funcionamientodominioslist.classList.remove("crimson"); 
        }
      });
    }
    const observadorfuncionamientodominios = new IntersectionObserver(funcionamientodominioscolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadorfuncionamientodominios.observe(funcionamientodominios);

    const tiposdominioscolor = (entradas, observador) => {
      console.log(entradas);
      console.log(observador);
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          tiposdominioslist.classList.add("crimson");
        } else{
          tiposdominioslist.classList.remove("crimson"); 
        }
      });
    }
    const observadortiposdominios  = new IntersectionObserver(tiposdominioscolor, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.0
    })
    observadortiposdominios.observe(tiposdominios);
    }