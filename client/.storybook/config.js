import { configure } from "@storybook/react";

function loadStories() {
  [require("../stories/campaigns.js")];
}

configure(loadStories, module);