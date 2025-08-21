import { useState } from "react";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isRegister ? "S'inscrire" : "Se connecter"}</h1>

      {isRegister && <input placeholder="Prénom" />}
      <input placeholder="Email" />
      <input placeholder="Mot de passe" />

      <button>Valider</button>

      <div>
        {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"}
        <span onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "se connecter" : "s'inscrire"}
        </span>
      </div>
    </form>
  );
}
