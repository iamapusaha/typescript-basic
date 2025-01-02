{
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer: FullstackDeveloper = {
    skills: ["html", "css", "js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
