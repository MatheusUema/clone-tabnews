test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://glowing-space-system-vpw79p4xx7p3p5q7-3000.app.github.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
});
