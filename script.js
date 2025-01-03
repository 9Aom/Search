document.addEventListener("DOMContentLoaded", () => {
    const defaultUrl = "https://e-sis.e-tech.ac.th/etech/Moduls/Academics/table_student_module.php?sel_class=&id_class=&r=1&l=1&d=6&syear=2567&sterm=2&setpublic=Y&types=P";
    document.getElementById("urlInput").value = defaultUrl;
  });

const urlInput = document.getElementById("urlInput");
// const selClassInput = document.getElementById("selClass");
const idClassInput = document.getElementById("idClass");
const editSection = document.querySelector(".edit-section");
const searchBtn = document.getElementById("searchBtn");
const editBtn = document.getElementById("editBtn");
const error = document.getElementById("error");

editBtn.addEventListener("click", () => {
  const urlValue = urlInput.value.trim();

  try {
    const url = new URL(urlValue);

    // selClassInput.value = url.searchParams.get("sel_class") || "";
    idClassInput.value = url.searchParams.get("id_class") || "";

    editSection.classList.remove("hidden");
    searchBtn.classList.remove("hidden");
    error.classList.add("hidden");
  } catch (e) {
    error.classList.remove("hidden");
    editSection.classList.add("hidden");
    searchBtn.classList.add("hidden");
  }
});

searchBtn.addEventListener("click", () => {
  const urlValue = urlInput.value.trim();

  try {
    const url = new URL(urlValue);

    // url.searchParams.set("sel_class", selClassInput.value);
    url.searchParams.set("id_class", idClassInput.value);

    window.open(url.href, "_blank");
    error.classList.add("hidden");
  } catch (e) {
    error.classList.remove("hidden");
  }

});

function createFloatingObjects(count) {
    const body = document.body;
  
    for (let i = 0; i < count; i++) {
      const floatingObject = document.createElement("div");
      floatingObject.classList.add("floating-object");
  
      floatingObject.style.left = `${Math.random() * 100}vw`;
      floatingObject.style.top = `${Math.random() * 100}vh`;
  
      const duration = Math.random() * 5 + 3; 
      const delay = Math.random() * 3; 
      floatingObject.style.animationDuration = `${duration}s`;
      floatingObject.style.animationDelay = `${delay}s`;
  
      body.appendChild(floatingObject);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createFloatingObjects(30);
  });
