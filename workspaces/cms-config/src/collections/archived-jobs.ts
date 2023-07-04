import { CmsCollection } from "../types";

export const archivedJobsCollectionConfig = {
  crowdin: true,
  name: "archived-jobs",
  label: "Archived jobs",
  identifier_field: "id",
  label_singular: "Archived job",
  folder: '_data/archived-jobs',
  create: true,
  format: "yml",
  summary: "{{job.title}}",
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
    },
    {
      label: "Published at",
      name: "published_at",
      widget: "datetime",
    },
    {
      label: "Archived",
      name: "archived",
      hint: "If set to false, update the 'Published at' date to be not older that the value from 'Archive after' field",
      widget: "boolean",
      required: false,
    },
    {
      label: "Archive after",
      name: "archive_after",
      widget: "select",
      options: [
        {
          label: "1 month",
          value: 1,
        },
        {
          label: "2 months",
          value: 2,
        },
        {
          label: "3 months",
          value: 3,
        },
      ],
      default: "2 months",
      crowdin: false
    },
    {
      name: "contact",
      label: "Contact",
      widget: "object",
      fields: [
        {
          name: "name",
          label: "Name",
          widget: "string",
          crowdin: true,
        },
        {
          name: "email",
          label: "Email",
          widget: "string",
          crowdin: false
        },
        {
          name: "twitter",
          label: "Twitter",
          widget: "string",
          crowdin: false
        },
        {
          name: "discord",
          label: "Discord",
          widget: "string",
          crowdin: false
        },
        {
          name: "logo",
          label: "Project Logo",
          widget: "image",
        },
      ],
    },
    {
      name: "job",
      label: "Job",
      widget: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          widget: "string",
          crowdin: true
        },
        {
          name: "description",
          label: "Description",
          widget: "string",
          crowdin: true
        },
        {
          name: "role",
          label: "Role",
          widget: "string",
          crowdin: true
        },
        {
          name: "type",
          label: "Type",
          widget: "select",
          options: [
            {
              label: "Full time",
              value: "full_time",
            },
            {
              label: "Part time",
              value: "part_time",
            },
            {
              label: "Freelance",
              value: "freelance",
            },
            {
              label: "Contract",
              value: "contract",
            },
          ],
        },
        {
          name: "location",
          label: "Location",
          widget: "select",
          options: [
            {
              label: "Remote",
              value: "remote",
            },
            {
              label: "USA",
              value: "usa",
            },
            {
              label: "Europe",
              value: "europe",
            },
            {
              label: "Asia",
              value: "asia",
            },
            {
              label: "South America",
              value: "south_america",
            },
            {
              label: "Canada",
              value: "canada",
            },
            {
              label: "Tel-Aviv / Remote",
              value: "tel_aviv_remote",
            },
            {
              label: "Global / Remote",
              value: "global_remote",
            },
          ],
        },
        {
          name: "required_experience",
          label: "Required experience",
          widget: "text",
        },
        {
          name: "scope",
          label: "Job scope",
          widget: "string",
          crowdin: true
        },
        {
          name: "how_to_apply",
          label: "How to apply",
          widget: "string",
          crowdin: true
        },
        {
          name: "apply_url",
          label: "Link to apply",
          widget: "string",
          crowdin: false
        },
      ],
    }
  ],
} satisfies CmsCollection;
