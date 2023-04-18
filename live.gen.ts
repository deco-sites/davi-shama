// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./functions/LoadGitHubRaw.ts";
import * as $$$$0 from "./routes/_app.tsx";
import * as $$$$$0 from "./islands/CurrentPage.tsx";
import * as $$$$$1 from "./islands/HeaderBg.tsx";
import * as $$$$$2 from "./islands/Animate.tsx";
import * as $$$$$3 from "./islands/ActiveLink.tsx";
import * as $$$$$$$$0 from "./sections/Projects.tsx";
import * as $$$$$$$$1 from "./sections/ProjectHeader.tsx";
import * as $$$$$$$$2 from "./sections/Hero.tsx";
import * as $$$$$$$$3 from "./sections/AboutContent.tsx";
import * as $$$$$$$$4 from "./sections/Banner.tsx";
import * as $$$$$$$$5 from "./sections/Spacer.tsx";
import * as $$$$$$$$6 from "./sections/DarkContent.tsx";
import * as $$$$$$$$7 from "./sections/ColorBar.tsx";
import * as $$$$$$$$8 from "./sections/ProjectInfo.tsx";
import * as $$$$$$$$9 from "./sections/Footer.tsx";
import * as $$$$$$$$10 from "./sections/Head.tsx";
import * as $$$$$$$$11 from "./sections/Header.tsx";
import * as $$$$$$$$12 from "./sections/ProjectNav.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect.ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i1$0 from "$live/handlers/routesSelection.ts";
import * as i1$1 from "$live/handlers/router.ts";
import * as i1$2 from "$live/handlers/devPage.ts";
import * as i1$3 from "$live/handlers/fresh.ts";
import * as i1$$0 from "$live/pages/LivePage.tsx";
import * as i1$$$0 from "$live/sections/PageInclude.tsx";
import * as i1$$$$0 from "$live/matchers/MatchDate.ts";
import * as i1$$$$1 from "$live/matchers/MatchUserAgent.ts";
import * as i1$$$$2 from "$live/matchers/MatchSite.ts";
import * as i1$$$$3 from "$live/matchers/MatchMulti.ts";
import * as i1$$$$4 from "$live/matchers/MatchRandom.ts";
import * as i1$$$$5 from "$live/matchers/MatchEnvironment.ts";
import * as i1$$$$6 from "$live/matchers/MatchAlways.ts";
import * as i1$$$$$0 from "$live/flags/audience.ts";
import * as i1$$$$$1 from "$live/flags/everyone.ts";

const manifest = {
  "functions": {
    "deco-sites/davi-shama/functions/LoadGitHubRaw.ts": $0,
  },
  "routes": {
    "./routes/_app.tsx": $$$$0,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/live/workbench.ts": $live_workbench,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect.ts": $live_inspect,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/[...catchall].tsx": $live_catchall,
  },
  "islands": {
    "./islands/CurrentPage.tsx": $$$$$0,
    "./islands/HeaderBg.tsx": $$$$$1,
    "./islands/Animate.tsx": $$$$$2,
    "./islands/ActiveLink.tsx": $$$$$3,
  },
  "sections": {
    "deco-sites/davi-shama/sections/Projects.tsx": $$$$$$$$0,
    "deco-sites/davi-shama/sections/ProjectHeader.tsx": $$$$$$$$1,
    "deco-sites/davi-shama/sections/Hero.tsx": $$$$$$$$2,
    "deco-sites/davi-shama/sections/AboutContent.tsx": $$$$$$$$3,
    "deco-sites/davi-shama/sections/Banner.tsx": $$$$$$$$4,
    "deco-sites/davi-shama/sections/Spacer.tsx": $$$$$$$$5,
    "deco-sites/davi-shama/sections/DarkContent.tsx": $$$$$$$$6,
    "deco-sites/davi-shama/sections/ColorBar.tsx": $$$$$$$$7,
    "deco-sites/davi-shama/sections/ProjectInfo.tsx": $$$$$$$$8,
    "deco-sites/davi-shama/sections/Footer.tsx": $$$$$$$$9,
    "deco-sites/davi-shama/sections/Head.tsx": $$$$$$$$10,
    "deco-sites/davi-shama/sections/Header.tsx": $$$$$$$$11,
    "deco-sites/davi-shama/sections/ProjectNav.tsx": $$$$$$$$12,
    "$live/sections/PageInclude.tsx": i1$$$0,
  },
  "handlers": {
    "$live/handlers/routesSelection.ts": i1$0,
    "$live/handlers/router.ts": i1$1,
    "$live/handlers/devPage.ts": i1$2,
    "$live/handlers/fresh.ts": i1$3,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i1$$0,
  },
  "matchers": {
    "$live/matchers/MatchDate.ts": i1$$$$0,
    "$live/matchers/MatchUserAgent.ts": i1$$$$1,
    "$live/matchers/MatchSite.ts": i1$$$$2,
    "$live/matchers/MatchMulti.ts": i1$$$$3,
    "$live/matchers/MatchRandom.ts": i1$$$$4,
    "$live/matchers/MatchEnvironment.ts": i1$$$$5,
    "$live/matchers/MatchAlways.ts": i1$$$$6,
  },
  "flags": {
    "$live/flags/audience.ts": i1$$$$$0,
    "$live/flags/everyone.ts": i1$$$$$1,
  },
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
