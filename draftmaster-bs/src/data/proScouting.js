// Curated competitive-source register. Metadata is not a substitute for watching the VOD.
export const PRO_DATA_AS_OF = "2026-11-25";

export const ikaossVideoWatchlist = [
  {
    date: "2026-11-24",
    title: "I COMMENTATED A HUGE WORLD CUP MATCH | My thoughts after the loss. Totem vs Zeta",
    category: "World Finals match review",
    evidence: "video metadata only",
    note: "Priority VOD for extracting draft decisions, map context and post-match reasoning."
  },
  {
    date: "2026-11-23",
    title: "HERETICS vs TOTEM AT WORLDS. Fan reaction",
    category: "World Finals",
    evidence: "video metadata only",
    note: "Compare creator commentary with the recorded series result; do not infer draft value from the title."
  },
  {
    date: "2026-11-23",
    title: "HERETICS vs RED CANIDS AT WORLDS. Fan reaction",
    category: "World Finals",
    evidence: "video metadata only",
    note: "Potential source for Heretics' map-by-map picks and adaptation."
  },
  {
    date: "2026-11-22",
    title: "THE BEST RICO VS. THE BEST MAX IN THE WORLD IN BRAWL BALL",
    category: "High-level scrim",
    evidence: "video metadata only",
    note: "Priority VOD for lane matchups, Brawl Ball roles and Rico/Max interaction."
  },
  {
    date: "2026-11-21",
    title: "HERETICS WINS A SCRIM AND SHOWS PRIME !! TH vs REDS",
    category: "High-level scrim",
    evidence: "video metadata only",
    note: "Potential source for successful composition patterns; scrim results are not official tournament results."
  },
  {
    date: "2026-11-20",
    title: "WE BEAT THE BEST TEAM IN LATIN AMERICA !! HERETICS vs BH IN SCRIM",
    category: "High-level scrim",
    evidence: "video metadata only",
    note: "Potential source for regional matchup and draft adaptation."
  },
  {
    date: "2026-11-19",
    title: "I PLAYED A PRE-WORLDS MATCHERINO AGAINST CRAZY RACCOON",
    category: "Pre-event competition",
    evidence: "video metadata only",
    note: "Use only after verifying exact game format, map and draft."
  },
  {
    date: "2026-11-18",
    title: "I FACED A 3-TIME WORLD CHAMPION ... SCRIM HERETICS vs CRAZY RACCOON",
    category: "High-level scrim",
    evidence: "video metadata only",
    note: "Potential source for high-level matchup patterns."
  },
  {
    date: "2026-11-17",
    title: "IKAOSS vs SITETAMPO ... HERETICS vs ZETA SCRIM",
    category: "High-level scrim",
    evidence: "video metadata only",
    note: "Cross-check against independent match logs where available."
  },
  {
    date: "2026-11-15",
    title: "NO ONE TALKED ABOUT THESE HYPERCHARGES AND THEY ARE MORE BROKEN THAN YOU THINK",
    category: "Hypercharge analysis",
    evidence: "video metadata only",
    note: "Do not mark any hypercharge as overpowered until its claims and patch context are checked."
  }
];

export const verifiedProSamples = [
  {
    date: "2026-11-13",
    type: "Scrim · single logged set",
    event: "Team Heretics vs ZETA DIVISION",
    map: "Crystal Arcade",
    mode: "Gem Grab",
    score: "1–2",
    heretics: ["Gale", "Lily", "Rico"],
    opponent: ["Kit", "Janet", "Surge"],
    note: "Recorded final picks and set result. One scrim sample only; not enough to establish a general counter or tier ranking.",
    sourceLabel: "BrawlTrack match record",
    sourceUrl: "https://brawltrack.app/pro/scrims/ded4d21475c9f065fd0683dc0f557d2b"
  },
  {
    date: "2026-11-20",
    type: "World Finals · official event match",
    event: "Team Heretics vs Reply Totem",
    map: "Not included in this record",
    mode: "Brawl Stars esports",
    score: "0–3",
    heretics: [],
    opponent: [],
    note: "Series result is independently listed; this record does not expose the map-by-map drafts, so it must not be used for brawler matchup claims.",
    sourceLabel: "ReadyCheck match record",
    sourceUrl: "https://rdycheck.gg/brawl-stars/match/2026-11-20-team-heretics-vs-reply-totem-1177495852"
  }
];

export const worldFinalsContext = {
  event: "Brawl Stars World Finals 2026",
  dates: "2026-11-20 to 2026-11-22",
  champion: "Natus Vincere",
  grandFinal: "Natus Vincere 4–3 FUT Esports",
  scrimSample: "1,501 games across World Finals teams, through 2026-11-19",
  teamScrimRecords: [
    { team: "FUT Esports", winRate: "62%", record: "179–108" },
    { team: "Team Elektros", winRate: "62%", record: "175–108" },
    { team: "Crazy Raccoon", winRate: "58%", record: "175–128" },
    { team: "HMBLE", winRate: "55%", record: "121–98" },
    { team: "ZETA DIVISION", winRate: "51%", record: "177–171" },
    { team: "Natus Vincere", winRate: "51%", record: "131–128" },
    { team: "Totem Esports", winRate: "50%", record: "107–107" },
    { team: "Tribe Gaming", winRate: "47%", record: "94–106" },
    { team: "Team Heretics", winRate: "45%", record: "143–172" }
  ],
  note: "Team-level scrim results are context, not brawler pick rates or official series results.",
  sourceLabel: "DraftMeta · World Finals 2026",
  sourceUrl: "https://draftmeta.com/games/brawl-stars/pros/world-finals-2026"
};
