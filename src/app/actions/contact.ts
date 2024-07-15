// const nodemailer = require('nodemailer');

// export async function sendMail(body: any) {
//     // console.log("--------------");

//     // console.log(body);

//     const user = process.env.imapUser;
//     const password = process.env.imapPassword;
//     const host = process.env.imapHost;
//     const port = process.env.imapPort ? Number(process.env.IMAP_PORT) : 993;

//     try {
//         // console.log('contenu||||', body);

//         const transporter = nodemailer.createTransport({
//             host:
//             ,
//             port: 587,
//             secure: false, // Utilisez `true` pour le port 465, `false` pour les autres ports
//             auth: {
//                 user: user,
//                 pass: password,
//             },
//         });

//         const mailOptions = {
//             from: user,
//             to: body.to,
//             subject: body.subject,
//             html: body.html,
//         };

//         const mail = await transporter.sendMail(mailOptions);
//         console.log('Message sent:', mail.messageId);

//         return { success: true }; // Retourne un objet avec `success: true` si l'envoi a réussi
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return { success: false }; // Retourne un objet avec `success: false` en cas d'échec
//     }
// }
