export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatAvatarFromQuestion({ id, questions, users }) {
  const question = questions[id];
  const author = question.author;
  const userAuthor = users[author];

  return {
    name: userAuthor.name,
    avatarURL: userAuthor.avatarURL,
    backgroundColor: userAuthor.backgroundColor,
  };
}
