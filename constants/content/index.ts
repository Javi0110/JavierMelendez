import { LINKS } from "./links";
import { profile } from "./profile";
import { jobExperiences } from "./jobExperiences";
import { education } from "./education";
import { socialLinks } from "./socialLinks";
import { skills } from "./skills";

const CONTENT = {
  ...profile,
  jobExperiences,
  education,
  socialLinks,
  skills,
};

export { LINKS, CONTENT };
