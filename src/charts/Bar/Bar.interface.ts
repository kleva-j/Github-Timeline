export interface IBarProps {
  data: IBarItem[];
}

export interface IBarItem {
  year: String;
  'pull requests': Number;
  'pull requestsColor': String;
  commits: Number;
  commitsColor: String;
  issues: Number;
  issuesColor: String;
  "code reviews": Number;
  "code reviewsColor": String;
  projects: Number;
  projectsColor: String;
  branches: Number;
  branchesColor: String;
}
