import { getHtmlPageName } from "../../../src/modules/header/getHtmlPageName.js";
/* test("descripcion de la prueba", () => {});*/
test("Esto debería de retornar el nombre de la página html", () => {
  const filePath = "src/pages/home.html";
  const expected = "home.html";
  const expected1 = "register.html";

  const result = getHtmlPageName(filePath);

  expect(result).toBe(expected);
  expect(result).toBe(expected1);
});
