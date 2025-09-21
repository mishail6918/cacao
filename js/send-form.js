function sendSimpleEmail(form) {
  // 1. Получаем данные формы
  const name = form.name.value;
  const phone = form.phone.value;

  // 2. Проверяем что все заполнено
  if (!name) {
    alert("Entrez votre nom");
    return false;
  }
  if (!phone) {
    alert("Entrez votre téléphone");
    return false;
  }

  // 3. Создаем текст письма
  const emailText = `
Nouveau client! 🎯

Nom: ${name}
Téléphone: ${phone}
Promotion: 50% de réduction
Date: ${new Date()}

Contactez rapidement! 📞
    `;

  // 4. Открываем почтовый клиент
  window.location.href = `mailto:kozlov.mikhail.01@GMAIL.COM?subject=Nouvelle%20Commande&body=${encodeURIComponent(
    emailText
  )}`;

  // 5. Показываем сообщение и перенаправляем
  setTimeout(() => {
    alert("✅ Merci! Votre commande est envoyée.");
    form.reset(); // Очищаем форму
  }, 1500);

  return false;
}

// Делаем функцию доступной глобально
window.sendSimpleEmail = sendSimpleEmail;
