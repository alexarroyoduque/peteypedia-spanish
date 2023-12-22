let title = {
  title: 'PETEYPEDIA EN ESPAÑOL',
  level: 1, 
  description: 'Al final de cada capítulo del cómic original de WATCHMEN se incluyen documentos que enriquecen la obra y HBO con su serie creó la PETEYPEDIA haciendo algo similar a través del Agente Dale Petey. HBO no permitía acceder a esta información fuera de EEUU y además el sitio dejó de estar disponible. Aquí tenemos una representación aproximada de la PETEYPEDIA donde se pueden leer esos documentos en castellano.',
  items: [
    {
      text: 'TWITTER: @AlexArroyoDuque',
      link: 'https://twitter.com/alexarroyoduque'
    },
    {
      text: 'GITHUB: Código Fuente',
      link: 'http://github.com/alexarroyoduque/peteypedia-spanish'
    },
    {
      text: 'PETEYPEDIA original in english',
      event: 'change-language',
      detail: 'english'
    }

  ]
};

let panel1 =  {
  title: 'Contents:// Archivo 1',
  items: [
    {
      text: 'MEMO: La computadora y tú',
      link: './src/documents/spanish/1/the-computer-and-you-memo.pdf'
    },
    {
      text: 'INVESTIGACIÓN: Trust in law!',
      link: './src/documents/spanish/1/trust-in-the-law.pdf'
    },
    {
      text: 'RECORTE: Veidt Declarado Muerto',
      link: './src/documents/spanish/1/veidt-declared-dead.pdf'
    },
    {
      text: 'MEMO: El diario de Rorschach',
      link: './src/documents/spanish/1/rorschachs-journal-memo.pdf'
    }
  ]
};

let panel2 =  {
  title: 'Contents:// Archivo 2',
  items: [
    {
      text: 'RECORTE: El Jefe de Policía de Tulsa, Temido Asesinato',
      link: './src/documents/spanish/2/tulsa-police-chief-feared-slain-revised.pdf'
    },
    {
      text: 'MEMO: Vigilantes Enmascarados en la Cultura Pop',
      link: './src/documents/spanish/2/masked-vigilantes-in-pop-culture-memo.pdf'
    },
    {
      text: 'LEGAL: El Camino a las Indemnizaciones',
      link: './src/documents/spanish/2/the-road-to-reparations.pdf'
    }
  ]
};

let panel3 =  {
  title: 'Contents:// Archivo 3',
  items: [
    {
      text: 'MEMO: AHS: Basado en Hechos NO reales',
      link: './src/documents/spanish/3/memo-ahs.pdf'
    },
    {
      text: 'RECORTE: ¿Fuga de cerebros a Marte?',
      link: './src/documents/spanish/3/new-frontiersman-revised.pdf'
    },
    {
      text: 'PRUEBA: Cuatro Cartas',
      link: './src/documents/spanish/3/four-letters-evidence.pdf'
    }
  ]
};

let panel4 =  {
  title: 'Contents:// Archivo 4',
  items: [
    {
      text: 'INTERROGATORIO (REDACCIÓN): Juspeczyk, Laurel Jane (25/04/95)',
      link: './src/documents/spanish/4/interrogation-juspeczyk.pdf'
    },
    {
      text: 'PRUEBA: Excálibur, MerlinCorp. (28/04/95)',
      link: './src/documents/spanish/4/excalibur-design.jpg'
    }
  ]
};

let panel5 =  {
  title: 'Contents:// Archivo 5',
  items: [
    {
      text: 'MEMO: AHS: Más "Asuntos" Infernales',
      link: './src/documents/spanish/5/memo-internal-affairs.pdf'
    },
    {
      text: 'MEDIA: NOSTALGIA (2007)',
      link: './src/documents/spanish/5/nostalgia-ad.pdf'
    },
    {
      text: 'MISC.: Ansiedad Extra-Dimensional y Tú',
      link: './src/documents/spanish/5/extra-dimensional-anxiety-and-you.pdf'
    }
  ]
};

let panel6 =  {
  title: 'Contents:// Archivo 6',
  items: [
    {
      text: 'MEMO: ¿Quién Tiene un Ojo y Ama Los Planes Malvados?',
      link: './src/documents/spanish/6/blake-memo-actual-work.pdf'
    },
    {
      text: 'PRUEBA: La Voluntad de Nelson Gardner',
      link: './src/documents/spanish/6/memo-the-will-of-nelson-gardner.pdf'
    },
    {
      text: 'RECORTE: Lady Trieu: Realidad o Ficción',
      link: './src/documents/spanish/6/lady-trieu-fact-or-fiction.pdf'
    }
  ]
};

let panel7 =  {
  title: 'Contents:// Archivo 7',
  items: [
    {
      text: 'MEMO: La Historia del Origen de Hermana Noche',
      link: './src/documents/spanish/7/memo-sister-night.pdf'
    },
    {
      text: 'PRUEBA: Calvin Jelani - Informe Médico (23/12/09)',
      link: './src/documents/spanish/7/calvin-medical-chart.pdf'
    }
  ]
};

let panel8 =  {
  title: 'Contents:// Archivo 8',
  items: [
    {
      text: 'MEMO: Fogdancing',
      link: './src/documents/spanish/8/memo-fogdancing.pdf'
    },
    {
      text: 'Recorte: "Nothing Ever Ends" ["Nada Termina Nunca"] (Diciembre 2005)',
      link: './src/documents/spanish/8/nothing-ever-ends.pdf'
    }
  ]
};

let panel9 =  {
  title: 'Contents:// Archivo 9',
  items: [
    {
      text: 'MEMO: Dale Petey',
      link: './src/documents/spanish/9/memo-dale-petey.pdf'
    }
  ]
};

let panelExtra =  {
  title: 'Contents:// Extra',
  description: 'Se lanzaron al mercado productos para promocionar la serie simulando formar parte del universo Watchmen. Agradecimientos al usuario de reddit spino-prime por esta recopilación.',
  items: [
    {
      text: 'Volumen 1: The Book of Rorschach de Sons of Pale Horse',
      description: 'Se lanzaron 3 vinilos con la banda sonora de Trent Reznor y Atticus Ross de la serie de HBO, pero aparentando ser discos del universo Watchmen con información muy interesante.',
      link: './src/documents/spanish/extra/volume1.pdf'
    },
    {
      text: 'Volumen 2: Banda sonora original de la serie American Hero Story: Minutemen',
      link: './src/documents/spanish/extra/volume2.pdf'
    },
    {
      text: 'Volumen 3: El proyecto Manhattan de The Nine Inch Nails',
      link: './src/documents/spanish/extra/volume3.pdf'
    },
    {
      text: 'Blue Sunday',
      description: 'Blue Sunday es un material irradiado que proviene del suelo donde el Dr. Manhattan hizo desaparecer el Castillo de Cartwithen en Gwynedd, en el norte de Gales. Fue creado como una broma para ser "comprado" en la web de Nine Inch Nails. Al añadirlo al carrito se mostraba un mensaje indicando que no está disponible debido a regulaciones de FDTA. Quienes consiguieron comprarlo recibieron contenido muy curioso.',
      link: './src/documents/spanish/extra/blue-sunday.pdf'
    }
  ]
};

let panelBonus =  {
  title: 'Contents:// Bonus',
  description: 'Más contenido de interés fuera la serie Watchmen de HBO que enriquecen su universo.',
  items: [
    {
      text: 'La Estirpe de los libres: American History X',
      description: 'Monográfico de Iker Jiménez repasando el conflicto racial en EEUU durante la historia. No hay referencias a Tulsa pero sí al KKK con mucha información interesante.',
      link: 'https://www.youtube.com/live/GMS_chrz0jE?si=WJC7aeDUFrNUnsr3'
    },
    {
      text: 'Podcast La órbita de Endor: WATCHMEN',
      description: 'Cuatro entregas que analizan detalladamente el cómic original de Watchmen, la serie de HBO, y otros productos como la película, "Antes de Watchmen", "El reloj del juicio final"...',
      link: 'http://laorbitadeendor.com/2020/03/02/lode-10x25-watchmen-parte-1-de-4/'
    },
    {
      text: 'Podcast Tomos y Grapas: RORSCHACH (2023)',
      description: 'Análisis de los 12 números iniciados en 2021 por Tom King con Jorge Fornés como dibujante.',
      link: 'http://laorbitadeendor.com/2020/03/02/lode-10x25-watchmen-parte-1-de-4/'
    },
    {
      text: 'Entrevista 2020: Damon Lindelof',
      description: 'Entrevista al creador de la serie de HBO.',
      link: 'https://youtu.be/VprFp7jl0Tw?si=tI7i5weeZwXFuQM6'
    },
    {
      text: 'Podcast oficial HBO: WATCHMEN (inglés)',
      link: 'https://youtu.be/n_4QhT--ebQ?si=ccl4qbKGutmhV6wn'
    },
    {
      text: 'Más allá del límite: los arquitectos del miedo',
      description: 'Emitido el 30 de septiembre de 1963, existen similitudes evidentes con la obra original de Watchmen.',
      link: 'https://www.dailymotion.com/video/x24fcuc'
    },
    {
      text: 'HBO Backstories: "WATCHMEN"',
      description: 'Corto donde Damon Lindelof (creador de la serie) explica como descubrió el cómic original.',
      link: 'https://youtu.be/PLx2QAXRDaE?si=PZGzFvIUgRHhklSL'
    },
    {
      text: 'American Crime Story: El pueblo contra OJ Simpson',
      description: 'Serie recomendada para conocer a Johnnie Cochran referenciado en el recorte del New Frontiersman (Archivo 3). Este abogado forma parte de uno de los episodios más escandalosos de EEUU donde la deuda racial acumulada es protagonista en el juicio a OJ.',
    }
  ]
};

let panels = [
  title,
  panel1,
  panel2,
  panel3,
  panel4,
  panel5,
  panel6,
  panel7,
  panel8,
  panel9,
  panelExtra,
  panelBonus
];

export function getPanelsSpanish() {
  return panels;
}