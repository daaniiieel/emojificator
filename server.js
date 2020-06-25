const Translate = require("./translateMoji");
const Telegraf = require("telegraf");
const dotenv = require("dotenv");

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("message", (ctx) => {
  ctx.reply(Translate.translate(ctx.update.message.text));
});

bot.on("inline_query", (ctx) => {
  const result = [
    {
      title: "Emojify text",
      type: "article",
      id: ctx.inlineQuery.id,
      message_text: Translate.translate(ctx.update.message.text),
    },
  ];
  console.log(Translate.translate(ctx.update.inline_query.query));

  ctx.answerInlineQuery(result);
});

bot.launch();
