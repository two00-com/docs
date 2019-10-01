/* eslint-disable import/no-webpack-loader-syntax */
import DE_Index from "!babel-loader!@mdx-js/loader!../../../pages/de/index.mdx";
import DE_EndPoints from "!babel-loader!@mdx-js/loader!../../../pages/de/endPoints.mdx";
import DE_CronJobs from "!babel-loader!@mdx-js/loader!../../../pages/de/cronJobs.mdx";
import DE_ServerMonitors from "!babel-loader!@mdx-js/loader!../../../pages/de/serverMonitors.mdx";
import DE_Projects from "!babel-loader!@mdx-js/loader!../../../pages/de/projects.mdx";
import DE_Slack from "!babel-loader!@mdx-js/loader!../../../pages/de/slack.mdx";
import DE_Telegram from "!babel-loader!@mdx-js/loader!../../../pages/de/telegram.mdx";
import DE_Webhook from "!babel-loader!@mdx-js/loader!../../../pages/de/webhook.mdx";

import EN_Index from "!babel-loader!@mdx-js/loader!../../../pages/en/index.mdx";
import EN_EndPoints from "!babel-loader!@mdx-js/loader!../../../pages/en/endPoints.mdx";
import EN_CronJobs from "!babel-loader!@mdx-js/loader!../../../pages/en/cronJobs.mdx";
import EN_ServerMonitors from "!babel-loader!@mdx-js/loader!../../../pages/en/serverMonitors.mdx";
import EN_Projects from "!babel-loader!@mdx-js/loader!../../../pages/en/projects.mdx";
import EN_Slack from "!babel-loader!@mdx-js/loader!../../../pages/en/slack.mdx";
import EN_Telegram from "!babel-loader!@mdx-js/loader!../../../pages/en/telegram.mdx";
import EN_Webhook from "!babel-loader!@mdx-js/loader!../../../pages/en/webhook.mdx";

const routes = {
  de: {
    language: "de",
    routes: [
      { name: "Einführung", path: "/de/", component: DE_Index },
      {
        name: "Endpunkte - Uptime Monitoring",
        path: "/de/endpunkte",
        component: DE_EndPoints,
      },
      {
        name: "Cronjob Monitoring",
        path: "/de/cronjobs",
        component: DE_CronJobs,
      },
      {
        name: "Sever Monitoring",
        path: "/de/server-monitore",
        component: DE_ServerMonitors,
      },
      { name: "Projekte", path: "/de/projekte", component: DE_Projects },
      {
        name: "Slack-Benachrichtigungen einrichten",
        path: "/de/slack-webhook-einrichten",
        component: DE_Slack,
      },
      {
        name: "Telegram-Benachrichtigungen einrichten",
        path: "/de/telegram-einrichten",
        component: DE_Telegram,
      },
      {
        name: "Custom Webhook einrichten",
        path: "/de/custom-webhook-einrichten",
        component: DE_Webhook,
      },
    ],
  },
  en: {
    language: "en",
    routes: [
      { name: "Introduction", path: "/en/", component: EN_Index },
      {
        name: "End Points - Uptime Monitoring",
        path: "/en/end-points",
        component: EN_EndPoints,
      },
      {
        name: "Cron Job Monitoring",
        path: "/en/cron-jobs",
        component: EN_CronJobs,
      },
      {
        name: "Sever Monitoring",
        path: "/en/server-monitors",
        component: EN_ServerMonitors,
      },
      { name: "Projects", path: "/en/projects", component: EN_Projects },
      {
        name: "Add a Slack Webhook",
        path: "/en/add-a-slack-webhook",
        component: EN_Slack,
      },
      {
        name: "Add Telegram Notifications",
        path: "/en/add-telegram",
        component: EN_Telegram,
      },
      {
        name: "Add a Custom Webhook",
        path: "/en/add-a-custom-webhook",
        component: EN_Webhook,
      },
    ],
  },
};

export { routes };
