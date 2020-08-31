var title = {
  title: 'PETEYPEDIA EN ESPAÑOL',
  level: 1, 
  description: 'Al final de cada capítulo del cómic original de WATCHMEN se incluyen documentos que enriquecen la obra y HBO con su serie creó la PETEYPEDIA haciendo algo similar. Sin embargo HBO no permite acceder a esta información fuera de USA. Aquí tenemos una representación aproximada de la PETEYPEDIA donde se pueden leer esos documentos en castellano. Si encuentra errores en la traducción o desea comentar alguna cosa no dude en ponerse en contacto conmigo.',
  items: [
    {
      text: 'TWITTER: @AlexArroyoDuque',
      link: 'https://twitter.com/alexarroyoduque'
    },
    {
      text: 'GITHUB: Código Fuente',
      link: 'http://github.com/alexarroyoduque/peteypedia'
    },
    {
      text: 'PETEYPEDIA Original',
      link: 'https://www.hbo.com/peteypedia'
    }

  ]
};

var panel1 =  {
  title: 'Contents:// Archivo 1',
  items: [
    {
      text: 'MEMO: La computadora y tú',
      link: './src/documents/1/the-computer-and-you-memo.pdf'
    },
    {
      text: 'INVESTIGACIÓN: Trust in law!',
      link: './src/documents/1/trust-in-the-law.pdf'
    },
    {
      text: 'RECORTE: Veidt Declarado Muerto',
      link: './src/documents/1/veidt-declared-dead.pdf'
    },
    {
      text: 'MEMO: El diario de Rorschach',
      link: './src/documents/1/rorschachs-journal-memo.pdf'
    }
  ]
};

var panel2 =  {
  title: 'Contents:// Archivo 2',
  items: [
    {
      text: 'RECORTE: El Jefe de Policía de Tulsa, Temido Asesinato',
      link: './src/documents/2/tulsa-police-chief-feared-slain-revised.pdf'
    },
    {
      text: 'MEMO: Vigilantes Enmascarados en la Cultura Pop',
      link: './src/documents/2/masked-vigilantes-in-pop-culture-memo.pdf'
    },
    {
      text: 'LEGAL: El Camino a las Indemnizaciones',
      link: './src/documents/2/the-road-to-reparations.pdf'
    }
  ]
};

var panel3 =  {
  title: 'Contents:// Archivo 3',
  items: [
    {
      text: 'MEMO: AHS: Basado en Hechos NO reales',
      link: './src/documents/3/memo-ahs.pdf'
    },
    {
      text: 'RECORTE: ¿Fuga de cerebros a Marte?',
      link: './src/documents/3/new-frontiersman-revised.pdf'
    },
    {
      text: 'PRUEBA: Cuatro Cartas',
      link: './src/documents/3/four-letters-evidence.pdf'
    }
  ]
};

var panel4 =  {
  title: 'Contents:// Archivo 4',
  items: [
    {
      text: 'INTERROGATORIO (REDACCIÓN): Juspeczyk, Laurel Jane (25/04/95)',
      link: './src/documents/4/interrogation-juspeczyk.pdf'
    },
    {
      text: 'PRUEBA: Excálibur, MerlinCorp. (28/04/95)',
      link: './src/documents/4/excalibur-design.jpg'
    }
  ]
};

var panel5 =  {
  title: 'Contents:// Archivo 5',
  items: [
    {
      text: 'MEMO: AHS: Más "Asuntos" Infernales',
      link: './src/documents/5/memo-internal-affairs.pdf'
    },
    {
      text: 'MEDIA: NOSTALGIA (2007)',
      link: './src/documents/5/nostalgia-ad.pdf'
    },
    {
      text: 'MISC.: Ansiedad Extra-Dimensional y Tú',
      link: './src/documents/5/extra-dimensional-anxiety-and-you.pdf'
    }
  ]
};

var panel6 =  {
  title: 'Contents:// Archivo 6',
  items: [
    {
      text: 'MEMO: ¿Quién Tiene un Ojo y Ama Los Planes Malvados?',
      link: './src/documents/6/blake-memo-actual-work.pdf'
    },
    {
      text: 'PRUEBA: La Voluntad de Nelson Gardner',
      link: './src/documents/6/memo-the-will-of-nelson-gardner.pdf'
    },
    {
      text: 'RECORTE: Lady Trieu: Realidad o Ficción',
      link: './src/documents/6/lady-trieu-fact-or-fiction.pdf'
    }
  ]
};

var panel7 =  {
  title: 'Contents:// Archivo 7',
  items: [
    {
      text: 'MEMO: El Historia del Origen de Hermana Noche',
      link: './src/documents/7/memo-sister-night.pdf'
    },
    {
      text: 'PRUEBA: Calvin Jelani - Informe Médico (23/12/09)',
      link: './src/documents/7/calvin-medical-chart.pdf'
    }
  ]
};

var panel8 =  {
  title: 'Contents:// Archivo 8',
  items: [
    {
      text: 'MEMO: Fogdancing',
      link: './src/documents/8/memo-fogdancing.pdf'
    },
    {
      text: 'Recorte: "Nothing Ever Ends" ["Nada Termina Nunca"] (Diciembre 2005)',
      link: './src/documents/8/nothing-ever-ends.pdf'
    }
  ]
};

var panel9 =  {
  title: 'Contents:// Archivo 9',
  items: [
    {
      text: 'MEMO: Dale Petey',
      link: './src/documents/9/memo-dale-petey.pdf'
    }
  ]
};

var panels = [
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
];

export function getPanels() {
  return panels;
}