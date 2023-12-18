import { urlencoded } from "body-parser";
import { randomUUID } from "crypto";
import express from "express";
import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";

type Subject = "theory" | "practical";

type Teacher = {
  id: string;
  name: string;
  knowledge: Subject[];
};

type Course = {
  id: string;
  name: string;
  teacher: Teacher;
  type: Subject;
  isParticipating: boolean;
};

const teacherFilePath = "./teachers.json";
let teachers = JSON.parse(readFileSync(teacherFilePath, "utf-8")) as Teacher[];

const coursesFilePath = "./courses.json";
let courses = JSON.parse(readFileSync(coursesFilePath, "utf-8")) as Course[];

const app = express();

let views = 0;

app.set("view engine", "ejs");

const logRequests =
  (prefix = ""): express.RequestHandler =>
  (req, _, next) => {
    console.log(prefix, req.method, req.url);
    next();
  };

app.use(urlencoded({ extended: true }));

app.use(logRequests("Music 101 -"));

app.get("/", (_, res) => {
  res.render("index", {
    courses: courses.filter((course) => course.isParticipating),
    views: ++views,
  });
});

app.get("/courses", (_, res) => {
  res.render("index", { courses, views: ++views });
});

app.get("/teachers", (_, res) => {
  res.render("teachers", { teachers, views: ++views });
});

app.post("/addTeacher", (req, res) => {
  const newTeacher = req.body.name;
  const knowledge = req.body.knowledge;

  teachers.push({
    id: randomUUID(),
    name: newTeacher,
    knowledge: knowledge,
  });

  writeFileSync(teacherFilePath, JSON.stringify(teachers));

  res.redirect("back");
});

app.use(express.static("public"));

const server = createServer(app);

server.listen(3000, () => console.log("Server is listening on port 3000"));

// function saveTeachers() {
//   writeFileSync(teacherFilePath, JSON.stringify(teachers, null, 1));
// }

// function saveCourses() {
//   writeFileSync(coursesFilePath, JSON.stringify(courses, null, 1));
// }
