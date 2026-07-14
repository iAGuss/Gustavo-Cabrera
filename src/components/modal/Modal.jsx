import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modal.css";
function Modal({ closeModal }) {
  function sendEmail(e) {
    e.preventDefault();

    const user_name = e.target.user_name.value;
    const user_mail = e.target.user_mail.value;
    const user_message = e.target.user_message.value;
    const notify = () => toast("Mensaje enviado!");

    if (user_name && user_mail && user_message) {
      const form = e.target;
      emailjs
        .sendForm(
          "service_6xk27oi",
          "template_9wswyz9",
          form,
          "0yRaoa9sZxCiCPwjB"
        )
        .then(
          (result) => {
            console.log(result.text);
            notify();
            form.reset();
          },
          (error) => {
            console.log(error.text);
            toast.error("Hubo un error al enviar el mensaje. Intenta nuevamente.");
          }
        );
    } else {
      alert("Por favor complete todos los campos.");
    }
  }

  return (
    <section className="seccion-modal">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>Contacto</h2>
          <form onSubmit={sendEmail}>
            <label htmlFor="user_name">Nombre:</label>
            <input type="text" id="user_name" name="user_name" />
            <label htmlFor="user_mail">Email:</label>
            <input type="email" id="user_mail" name="user_mail" />
            <label htmlFor="user_message">Mensaje:</label>
            <textarea id="user_message" name="user_message"></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        top="20px"
        autoClose={2500}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </section>
  );
}

export default Modal;
