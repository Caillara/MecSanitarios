export function slugify(str = "") {
  return String(str)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // sin acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
