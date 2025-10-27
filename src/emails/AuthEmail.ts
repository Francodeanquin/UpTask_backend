import { transporter } from "../config/nodeMailer";

interface IEmail {
  email: string;
  name: string;
  token: string;
}
export class AuthEmail {
  static sendConfirmationEmail = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "UpTask <admin@uptask.com>",
      to: user.email,
      subject: "UpTask- Confirma tu cuenta",
      text: "UpTask- Confirma tu cuenta",
      html: `<p>Hola: ${user.name}, has creado tu cuenta en UpTask, ya casi esta todo listo, solo debes confirmar tu cuenta</p>
      <p>Visita el sieguiente enlace: </p>
      <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirmar cuenta</a>
      <p>E ingresa el codigo: <b>${user.token}</b></p
      <p>Este token expira en 10 minutos</p>

      `,
    });

    console.log("mensaje enviado", info.messageId);
  };
  static sendPasswordResetToken = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "UpTask <admin@uptask.com>",
      to: user.email,
      subject: "UpTask- Reestablece tu password",
      text: "UpTask- Confirma tu cuenta",
      html: `<p>Hola: ${user.name}, has solicitado reestablecer tu passwor.</p>
      <p>Visita el sieguiente enlace: </p>
      <a href="${process.env.FRONTEND_URL}/auth/new-password">Reestablecer password</a>
      <p>E ingresa el codigo: <b>${user.token}</b></p
      <p>Este token expira en 10 minutos</p>

      `,
    });

    console.log("mensaje enviado", info.messageId);
  };
}
