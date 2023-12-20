let title = {
  title: 'PETEYPEDIA ENGLISH',
  level: 1, 
  description: 'At the end of each chapter of the original WATCHMEN comic, there are documents that add value to the work. HBO, with its series, created PETEYPEDIA, doing something similar through Agent Dale Petey. HBO didn´t allow access to this information outside of the US, and the site is no longer available.',
  items: [
    {
      text: 'TWITTER: @AlexArroyoDuque',
      link: 'https://twitter.com/alexarroyoduque'
    },
    {
      text: 'GITHUB: Source code',
      link: 'http://github.com/alexarroyoduque/peteypedia-spanish'
    },
    {
      text: 'PETEYPEDIA spanish by AlexArroyoDuque',
      event: 'change-language',
      detail: 'spanish'
    }
  ]
};

let panel1 =  {
  title: 'Contents:// File 1',
  items: [
    {
      text: 'MEMO: The Computer and You',
      link: './src/documents/english/1/the-computer-and-you-memo.pdf'
    },
    {
      text: 'RESEARCH: “Trust in the Law”',
      link: './src/documents/english/1/trust-in-the-law.pdf'
    },
    {
      text: 'CLIPPING: “Veidt Declared Dead”',
      link: './src/documents/english/1/veidt-declared-dead.pdf'
    },
    {
      text: 'MEMO: Rorschach’s Journal ',
      link: './src/documents/english/1/rorschachs-journal-memo.pdf'
    }
  ]
};

let panel2 =  {
  title: 'Contents:// File 2',
  items: [
    {
      text: 'CLIPPING: “Tulsa Police Chief Feared Slain”',
      link: './src/documents/english/2/tulsa-police-chief-feared-slain-revised.pdf'
    },
    {
      text: 'MEMO: Masked Vigilantes in Pop Culture',
      link: './src/documents/english/2/masked-vigilantes-in-pop-culture-memo.pdf'
    },
    {
      text: 'LEGAL: The Road to Reparations',
      link: './src/documents/english/2/the-road-to-reparations.pdf'
    }
  ]
};

let panel3 =  {
  title: 'Contents:// File 3',
  items: [
    {
      text: 'MEMO: AHS: Based on UNFactual Events',
      link: './src/documents/english/3/memo-ahs.pdf'
    },
    {
      text: 'CLIPPING: White Flight to Mars',
      link: './src/documents/english/3/new-frontiersman-revised.pdf'
    },
    {
      text: 'EVIDENCE: Four Letters',
      link: './src/documents/english/3/four-letters-evidence.pdf'
    }
  ]
};

let panel4 =  {
  title: 'Contents:// File 4',
  items: [
    {
      text: 'INTERROGATION (REDACTIONS): Juspeczyk, Laurel Jane (4/25/95)',
      link: './src/documents/english/4/interrogation-juspeczyk.pdf'
    },
    {
      text: 'EVIDENCE: “Excalibur,” MerlinCorp. Raid (4/28/95)',
      link: './src/documents/english/4/excalibur-design.jpg'
    }
  ]
};

let panel5 =  {
  title: 'Contents:// File 5',
  items: [
    {
      text: 'MEMO: AHS: More Infernal “Affairs”',
      link: './src/documents/english/5/memo-internal-affairs.pdf'
    },
    {
      text: 'MEDIA: NOSTALGIA (2007)',
      link: './src/documents/english/5/nostalgia-ad.jpg'
    },
    {
      text: 'MISC: “Extra-Dimensional Anxiety & You” (2009)',
      link: './src/documents/english/5/extra-dimensional-anxiety-and-you.pdf'
    }
  ]
};

let panel6 =  {
  title: 'Contents:// File 6',
  items: [
    {
      text: 'MEMO: What Has One Eye and Loves Evil Plans?',
      link: './src/documents/english/6/blake-memo-actual-work.pdf'
    },
    {
      text: 'EVIDENCE: The Will of Nelson Gardner ',
      link: './src/documents/english/6/memo-the-will-of-nelson-gardner.pdf'
    },
    {
      text: 'CLIPPING: “Lady Trieu: Fact or Fiction”',
      link: './src/documents/english/6/lady-trieu-fact-or-fiction.pdf'
    }
  ]
};

let panel7 =  {
  title: 'Contents:// File 7',
  items: [
    {
      text: 'MEMO: The Origin Story of “Sister Night”',
      link: './src/documents/english/7/memo-sister-night.pdf'
    },
    {
      text: 'EVIDENCE: Calvin Jelani medical report (12/23/09)',
      link: './src/documents/english/7/calvin-medical-chart.pdf'
    }
  ]
};

let panel8 =  {
  title: 'Contents:// File 8',
  items: [
    {
      text: 'MEMO: Fogdancing',
      link: './src/documents/english/8/memo-fogdancing.pdf'
    },
    {
      text: 'CLIPPING: “Nothing Ever Ends” (December, 2005)',
      link: './src/documents/english/8/nothing-ever-ends.pdf'
    }
  ]
};

let panel9 =  {
  title: 'Contents:// File 9',
  items: [
    {
      text: 'MEMO: Dale Petey',
      link: './src/documents/english/9/memo-dale-petey.pdf'
    }
  ]
};

let panelExtra =  {
  title: 'Contents:// Extra',
  description: 'Some products were released to promote the HBO series, simulating being part of the Watchmen universe. Thanks to Reddit user spino-prime for this compilation.',
  items: [
    {
      text: 'Vol. 1: The Book of Rorschach de Sons of Pale Hors',
      description: 'Three vinyl records were released featuring the soundtrack by Trent Reznor and Atticus Ross from the HBO series, but pretending to be records from the Watchmen universe with very interesting information.',
      link: './src/documents/spanish/extra/volume1.pdf'
    },
    {
      text: 'Vol. 2: The original soundrack of American Hero Story: Minutemen',
      link: './src/documents/spanish/extra/volume2.pdf'
    },
    {
      text: 'Vol. 3: The Manhattan Project of The Nine Inch Nails',
      link: './src/documents/spanish/extra/volume3.pdf'
    },
    {
      text: 'Blue Sunday',
      description: 'Blue Sunday is irradiated material that comes from the ground where Dr. Manhattan made Cartwithen Castle disappear in Gwynedd, North Wales. It was created as a joke to be "purchased" on the Nine Inch Nails website. When added to the cart, a message appeared indicating that it´s not available due to FDTA regulations. Those who managed to buy it received very curious content.',
      link: './src/documents/spanish/extra/blue-sunday.pdf'
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
  panelExtra
];

export function getPanelsEnglish() {
  return panels;
}