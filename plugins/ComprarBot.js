const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command ='comprarbot',/^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;
handler.tags = ['main']
handler.help = ['comprarbot']

global.ComprarBot = `
_*Deseas Comprar Bunny Bot 🤖?*_

_*Vendedora Oficial ::*_
- _*Mermelada*_ :: +56958890156

- *_Grupo Ofc Ventas_* :: https://chat.whatsapp.com/KrjxWvJhEpxJ7UKV6mkn2C 
`;