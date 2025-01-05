export const Form = () => {
  return (
    <section>
      <div className="container">
        <h2 className="title">Formulario de confirmación</h2>
        <form className="box">
          <div className="field is-grouped">
            <div className="field">
              <label className="label">Nombres</label>
              <div className="control">
                <input className="input" type="text" placeholder="Nombres" />
              </div>
            </div>
            <div className="field">
              <label className="label">Apellidos</label>
              <div className="control">
                <input className="input" type="text" placeholder="Apellidos" />
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
