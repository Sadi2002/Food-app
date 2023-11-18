import { projectAuth } from "../firebase/config";

// ...

const accountRemove = async () => {
  try {
    // Pobierz aktualnie zalogowanego użytkownika
    const user = projectAuth.currentUser;

    // Sprawdź, czy użytkownik jest zalogowany
    if (user) {
      // Usuń konto użytkownika
      await user.delete();
      console.log("Konto zostało usunięte pomyślnie.");
    } else {
      console.error("Użytkownik nie jest zalogowany.");
    }
  } catch (error) {
    console.log(error);
  }
};

export { accountRemove };
