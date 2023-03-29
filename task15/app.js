const users = [
  {
    id: 1,
    username: "Ali",
    img: "ali",
    job: "developer",
  },
  {
    id: 2,
    username: "bedbext_developer",
    img: "bedbext_developer",
    job: "test2",
  },
  {
    id: 3,
    username: "duman",
    img: "duman",
    job: "test3",
  },
  {
    id: 4,
    username: "js_oyrenen_shexs",
    img: "js_oyrenen_shexs",
    job: "test4",
  },
  {
    id: 5,
    username: "qarli_daglar",
    img: "qarli_daglar",
    job: "test5",
  },
  {
    id: 6,
    username: "qoca_cinar",
    img: "qoca_cinar",
    job: "test6",
  },
  {
    id: 7,
    username: "visselka",
    img: "visselka",
    job: "test7",
  },
  {
    id: 8,
    username: "novxani",
    img: "novxani",
    job: "test8",
  },
];
const root = document.getElementById("root");
//   your code goes here

function createElem() {
  users.forEach(({ id, username, img, work }, i) => {
    const newElem = document.createElement("div");
    root.append(newElem);
    newElem.className = "card";

    const image = document.createElement("img");
    image.setAttribute("src", `./img/${users[i].img}.jpg`);
    newElem.appendChild(image);
    image.className = "img";

    const user = document.createElement("h1");
    user.textContent = users[i].username;
    newElem.appendChild(user);
    user.className = "name";

    const job = document.createElement("h2");
    job.textContent = users[i].job;
    newElem.appendChild(job);
    job.className = "job";
  });
}
createElem();
