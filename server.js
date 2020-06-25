const Translate = require("moji-translate");
const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("message", ctx => {
  ctx.reply(Translate.translate(ctx.update.message.text));
});

bot.on("inline_query", ctx => {
  const result = [
    {
      title: "Emojify text",
      type: "article",
      id: ctx.inlineQuery.id,
      message_text: Translate.translate(ctx.update.inline_query.query)
    }
  ];

  // Using context shortcut
  ctx.answerInlineQuery(result);
});

bot.launch();
