const handler = async (m, { conn }) => {
  const texto = `
\`\`\`Grupo Bunny Ventas    :\`\`\`


🔗 *Grupo oficial del bot:* https://chat.whatsapp.com/KrjxWvJhEpxJ7UKV6mkn2C
  `.trim()

  await conn.reply(m.chat, texto, m)
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['script']

export default handler
