const PASSWORD = "SGGR"; // এখানে পাসওয়ার্ড (ইচ্ছা হলে বদলাতে পারেন)

const members = [
  {
    name: "1. Fahim",
    details: "Age: 22\nRole: Designer\nSkill: Photoshop"
  },
  {
    name: "2. Rabbi",
    details: "Age: 24\nRole: Developer\nSkill: HTML, CSS, JS"
  },
  {
    name: "3. Sakib",
    details: "Age: 21\nRole: Student\nSkill: Graphics Design"
  }
  // পরে এখানেই ১৮ জন পর্যন্ত যোগ করবেন
];

function checkPassword(){
  const p = document.getElementById("password").value;
  if(p === PASSWORD){
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("membersBox").classList.remove("hidden");
    loadMembers();
  } else {
    document.getElementById("error").innerText = "❌ ভুল পাসওয়ার্ড";
  }
}

function loadMembers(){
  const list = document.getElementById("memberList");
  list.innerHTML = "";
  members.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${m.name}</span>
      <button onclick="showDetails(\`${m.details}\`)">Details</button>
    `;
    list.appendChild(li);
  });
}

function showDetails(text){
  document.getElementById("detailsContent").innerText = text;
  document.getElementById("detailsBox").classList.remove("hidden");
}

function closeDetails(){
  document.getElementById("detailsBox").classList.add("hidden");
}
