import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Tina Cloud configuration
  clientId: process.env.VITE_TINA_CLIENT_ID,
  token: process.env.VITE_TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "members",
        label: "Members",
        path: "content/members",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "nickname",
            label: "Nickname",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            options: ["Head", "Co-Head", "Member", "Executive"],
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "boolean",
            name: "starPerformer",
            label: "Star Performer",
          },
          {
            type: "string",
            name: "image",
            label: "Image URL",
            required: true,
          },
          {
            type: "string",
            name: "linkedin",
            label: "LinkedIn URL",
            required: true,
          },
          {
            type: "string",
            name: "github",
            label: "GitHub URL",
            required: true,
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "content/projects",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "desc",
            label: "Short Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "image",
            label: "Main Image URL",
            required: true,
          },
          {
            type: "string",
            name: "fullDescription",
            label: "Full Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "images",
            label: "Gallery Images",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "githubUrl",
            label: "GitHub URL",
            required: true,
          },
          {
            type: "string",
            name: "contributors",
            label: "Contributors (Member IDs)",
            required: true,
            list: true,
            description: "Enter member IDs (numbers) as comma-separated values or one per field",
          },
        ],
      },
      {
        name: "techStack",
        label: "Tech Stack",
        path: "content/tech-stack",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Technology Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "iconName",
            label: "Icon Name",
            required: true,
            description: "React icon component name (e.g., FaReact, SiTypescript)",
          },
          {
            type: "string",
            name: "iconLibrary",
            label: "Icon Library",
            required: true,
            options: ["fa", "si"],
            description: "Icon library: 'fa' for Font Awesome, 'si' for Simple Icons",
          },
          {
            type: "string",
            name: "color",
            label: "Color",
            required: true,
            description: "Hex color code (e.g., #61DAFB)",
          },
        ],
      },
    ],
  },
});
