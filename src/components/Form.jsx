import { useState } from "react";

export const Form = (allowCompanion = true) => {
  const [isAttending, setIsAttending] = useState("");
  const [bringingCompanion, setBringingCompanion] = useState("");

  const handleAttendingChange = (e) => {
    setIsAttending(e.target.value);
  };

  const handleBringingCompanionChange = (e) => {
    setBringingCompanion(e.target.value);
  };

  return (
    <section>
      <div className="container">
        <h2 className="title">Formulario de confirmación</h2>
        <form className="box">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Nombres</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Nombres" />
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
                    placeholder="Apellidos"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email" />
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
                          placeholder="Nombres"
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
                          placeholder="Apellidos"
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
                      placeholder="Por favor, indica las restricciones alimenticias de tu acompañante"
                    />
                  </div>
                </div>
              </>
            )}
        </form>
      </div>
    </section>
  );
};
