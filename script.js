const $ = (id) => document.getElementById(id);

const model = $("model");
const material = $("material");
const color = $("color");
const text = $("text");
const metal = $("metal");

const summary = $("summary");
const monogram = $("monogram");
const configField = $("configField");
const year = $("year");

function buildConfig(){
  const cfg = {
    model: model.value,
    material: material.value,
    color: color.value,
    text: (text.value || "").trim(),
    metal: metal.value
  };

  const safeText = cfg.text.length ? cfg.text : "ТЕКСТ";
  monogram.textContent = safeText.toUpperCase();

  // Цвет текста под "золото/серебро" (без сложной графики)
  monogram.style.color = cfg.metal === "Серебро"
    ? "rgba(220,230,255,.95)"
    : "rgba(217,178,95,.95)";

  const lines = [
    `Модель: ${cfg.model}`,
    `Материал: ${cfg.material}`,
    `Цвет: ${cfg.color}`,
    `Текст: ${cfg.text ? cfg.text : "—"}`,
    `Покрытие текста: ${cfg.metal}`
  ];

  summary.innerHTML = `<b>Вы выбрали:</b><br>${lines.join("<br>")}`;
  configField.value = lines.join(" | ");
}

[model, material, color, text, metal].forEach(el => el.addEventListener("input", buildConfig));

year.textContent = new Date().getFullYear();
buildConfig();

