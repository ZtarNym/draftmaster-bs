// Tactical knowledge base. Every claim is versioned and carries an evidence status.
export const PATCH_VERSION = "2026-11-11";
export const DATA_AS_OF = "2026-11-25";

export const tacticalArchetypes = [
  { id:"lane-suppressor", name:"Lane Suppressor", description:"Gana una línea por presión repetida y obliga al rival a ceder espacio o gastar recursos." },
  { id:"choke-controller", name:"Choke Controller", description:"Niega pasillos y accesos estrechos; convierte rutas obligatorias en zonas de riesgo." },
  { id:"anti-dive-anchor", name:"Anti-Dive Anchor", description:"Protege una posición frente a entradas agresivas y castiga al rival que se acerca." },
  { id:"tempo-initiator", name:"Tempo Initiator", description:"Crea una ventana breve para que el equipo entre primero y convierta la ventaja en objetivo." },
  { id:"formation-breaker", name:"Formation Breaker", description:"Rompe agrupaciones, separa objetivos y desordena la estructura rival." },
  { id:"objective-denier", name:"Objective Denier", description:"Impide que el rival permanezca o progrese sobre el objetivo del modo." },
  { id:"resource-exhaustor", name:"Resource Exhaustor", description:"Fuerza gasto de munición, gadgets o Súper antes de que el rival pueda ejecutar su plan." },
  { id:"pick-punisher", name:"Pick Punisher", description:"Convierte errores de posicionamiento, aislamiento o cooldowns gastados en eliminaciones." },
  { id:"crossfire-enabler", name:"Crossfire Enabler", description:"Abre ángulos y facilita que dos aliados amenacen al mismo objetivo desde líneas distintas." },
  { id:"zone-recycler", name:"Zone Recycler", description:"Recupera terreno perdido y vuelve a disputar una zona después de una rotación enemiga." },
  { id:"dive-finisher", name:"Dive Finisher", description:"Entra sobre un objetivo ya debilitado o sin recursos y cierra la eliminación." },
  { id:"anti-setup-specialist", name:"Anti-Setup Specialist", description:"Desactiva o vuelve ineficiente el setup rival: invocaciones, torretas, porteros o posiciones estáticas." },
  { id:"sightline-taxer", name:"Sightline Taxer", description:"Castiga líneas abiertas y obliga a cruzarlas con pérdida de vida o de control." },
  { id:"ammo-economy-engine", name:"Ammo-Economy Engine", description:"Gana intercambios largos mediante eficiencia de munición, recarga o recuperación de recursos." },
  { id:"spawn-pressure", name:"Spawn Pressure", description:"Mantiene amenaza después de morir o desde unidades desplegadas, limitando las rotaciones enemigas." }
];

// This is a research queue, not a tier list. No archetype is assigned until its kit is reviewed.
export const priorityRoster = [
  "Amber","Lou","Mr. P","Melodie","Rico","Brock","Surge","Chester","Gale","Mandy"
];

export const brawlerDossiers = {
  Amber: {
    name:"Amber",
    patchVersion:PATCH_VERSION,
    dataAsOf:DATA_AS_OF,
    primaryArchetype:"lane-suppressor",
    secondaryArchetypes:["zone-recycler","sightline-taxer"],
    classificationStatus:"provisional",
    classificationRationale:"Su flujo de fuego sostenido y el aceite incendiable le permiten disputar espacio durante tiempo prolongado. La etiqueta describe su patrón de presión, no una recomendación universal.",
    winRateMasters:48.8,
    mastersGames:162747,
    pickRateMasters:26.0,
    banRateMasters:35.9,
    currentRank:"66 / 108",
    comparison:"53.5% antes del mantenimiento del 11 de noviembre; 48.8% después, según la ventana publicada por DraftMeta.",
    sampleNote:"DraftMeta compara Masters+ Ranked desde el parche del 11 nov.; la ficha de Amber registra 162,747 partidas. Los datos agregados no demuestran causalidad ni matchup individual.",
    balanceChanges:[
      "Ataque principal: 2,100 → 1,800 de daño.",
      "Carga de Súper obtenida con su propio Súper: 53 → 40.",
      "En el parche del 3 de noviembre: Dancing Flames, enfriamiento 14 → 20 s.",
      "Fire Starters, enfriamiento 24 → 28 s; barril 1,300 → 1,000 de vida.",
      "Daño de quemadura del Súper: 480 → 400; radio de Hipercarga: 1,600 → 1,200."
    ],
    tacticalRead:"Amber busca convertir el tiempo de exposición del rival en coste de vida y munición. Su valor aumenta cuando el mapa obliga a cruzar zonas previsibles; cae cuando el rival puede cambiar de línea, entrar desde varios ángulos o forzarle a abandonar el espacio antes de que el aceite genere valor.",
    matchupRules:[
      {label:"Favorecida por",value:"Rivales que necesitan cruzar repetidamente una zona estrecha o mantener una posición fija.",confidence:"mechanical"},
      {label:"Sufre contra",value:"Composiciones capaces de entrar por varios ángulos, forzar desplazamientos o castigar su falta de movilidad.",confidence:"mechanical"}
    ],
    abilityAudit:{status:"incomplete",gadgets:2,starPowers:2,buffies:"Pendiente de verificación individual",combinations:4},
    builds:[],
    evidence:[
      {label:"Notas oficiales de Supercell · 11 nov 2026",url:"https://supercell.com/brawlstars/en/blog/game-updates/release-notes-november-2026/"},
      {label:"DraftMeta · cambio de win rate Masters+ tras el 11 nov",url:"https://draftmeta.com/games/brawl-stars/patches/month/2026-11"},
      {label:"DraftMeta · roster Masters+ desde el 11 nov",url:"https://draftmeta.com/games/brawl-stars/brawlers"}
    ]
  }
};
