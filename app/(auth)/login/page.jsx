export default function LoginPage () {
  return (
    <>
      <h3>Inicia Sesión</h3>
      <form action=''>
        <div>
          <label>Email</label>
          <input type='email' name='email' id='email' placeholder='Tu email' />
        </div>
        <div>
          <label>Contraseña</label>
          <input type='password' name='password' id='password' placeholder='Tu contraseña' />
        </div>
      </form>
    </>
  )
}
