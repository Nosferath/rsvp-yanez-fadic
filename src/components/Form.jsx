import { useState } from "react";
import PropTypes from "prop-types";

export const Form = (props) => {
  const allowCompanion = props.allowCompanion ?? true;
  const [isAttending, setIsAttending] = useState("");
  const [bringingCompanion, setBringingCompanion] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [notification, setNotification] = useState(null); // { type: 'success' | 'error', message: string }

  const handleAttendingChange = (e) => {
    setIsAttending(e.target.value);
    setBringingCompanion("");
  };

  const handleBringingCompanionChange = (e) => {
    setBringingCompanion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);

    // Create FormData object
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://errgwiq4ebveikfmo5e34l2kwy0cgqsu.lambda-url.us-east-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        },
      );

      if (!response.ok) {
        throw new Error("Algo salió mal, por favor reintenta.");
      }

      setNotification({
        type: "success",
        message: "Gracias por tu respuesta. ¡Nos vemos!",
      });

      // Reset form
      e.target.reset();
      setIsAttending("");
      setBringingCompanion("");

      // Clear success message after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } catch {
      setNotification({
        type: "error",
        message:
          "Hubo un error al enviar el formulario. Por favor intenta nuevamente.",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
    setButtonLoading(false);
  };

  return (
    <section>
      <div className="container">
        <h2 className="title">Formulario de confirmación</h2>
        {notification && (
          <div
            className={`notification ${notification.type === "success" ? "is-success" : "is-danger"}`}
          >
            <button
              className="delete"
              onClick={() => setNotification(null)}
            ></button>
            {notification.message}
          </div>
        )}
        <form id="rsvp-form" className="box" onSubmit={handleSubmit}>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Nombres</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    placeholder="Nombres"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Apellidos</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="lastName"
                    placeholder="Apellidos"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">¿Asistirás a nuestro matrimonio?</label>
            <div className="control">
              <label className="radio mr-3">
                <input
                  className="mr-1"
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={isAttending === "yes"}
                  onChange={handleAttendingChange}
                  required
                />
                Sí
              </label>

              <label className="radio">
                <input
                  className="mr-1"
                  type="radio"
                  name="attending"
                  value="no"
                  checked={isAttending === "no"}
                  onChange={handleAttendingChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          {isAttending === "yes" && (
            <>
              <div className="field">
                <label className="label">
                  El plato principal será{" "}
                  <i>
                    Medallón de filete sobre puré de zanahorias, papitas
                    chilotas y baby carrots
                  </i>
                  . Si no comes carne o tienes alguna otra restricción
                  alimenticia, por favor indicarlo abajo.
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="dietaryRestrictions"
                    placeholder="Por favor, indica tus restricciones alimenticias"
                  />
                </div>
              </div>
            </>
          )}
          {isAttending === "yes" && allowCompanion && (
            <>
              <div className="field">
                <label className="label">¿Tienes un acompañante?</label>
                <div className="control">
                  <label className="radio mr-3">
                    <input
                      className="mr-1"
                      type="radio"
                      name="bringingCompanion"
                      value="yes"
                      checked={bringingCompanion === "yes"}
                      onChange={handleBringingCompanionChange}
                      required
                    />
                    Sí
                  </label>

                  <label className="radio">
                    <input
                      className="mr-1"
                      type="radio"
                      name="bringingCompanion"
                      value="no"
                      checked={bringingCompanion === "no"}
                      onChange={handleBringingCompanionChange}
                      required
                    />
                    No
                  </label>
                </div>
              </div>
            </>
          )}
          {isAttending === "yes" &&
            allowCompanion &&
            bringingCompanion === "yes" && (
              <>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Nombres del acompañante</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="companionFirstName"
                          placeholder="Nombres"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">Apellidos del acompañante</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="companionLastName"
                          placeholder="Apellidos"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">
                    Restricciones alimenticias del acompañante
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="companionDietaryRestrictions"
                      placeholder="Por favor, indica las restricciones alimenticias de tu acompañante"
                    />
                  </div>
                </div>
              </>
            )}
          <div className="control">
            <button
              className={`button is-primary ${buttonLoading ? "is-loading" : ""}`}
              type="submit"
            >
              Enviar respuesta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

Form.propTypes = {
  allowCompanion: PropTypes.bool,
};
