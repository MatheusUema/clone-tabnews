function status(request, response) {
  response.status(200).json({ response: "tá tudo na paz" });
}

export default status;
