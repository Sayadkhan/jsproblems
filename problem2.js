function sendNotification(email) {
  if (
    email.indexOf("@") === -1 ||
    email.indexOf("@") !== email.lastIndexOf("@")
  ) {
    return "Invalid Email";
  }

  const [username, domainName] = email.split("@");

  if (!username || !domainName) {
    return "Invalid Email";
  }

  return `${username} sent you an email from ${domainName}`;
}

console.log(sendNotification("abc@gamil.com"));
