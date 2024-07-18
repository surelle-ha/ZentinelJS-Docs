import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "ZentinelJS",
			social: {
				github: "https://github.com/surelle-ha/zentineljs",
				linkedin: "https://www.linkedin.com/in/surellejs",
				facebook: "https://www.facebook.com/surellejs",
			},
			sidebar: [
				{
					label: "Documentation",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Introduction",
							link: "/guides/introduction/",
						},
						{
							label: "Features",
							link: "/guides/features/",
						},
						{
							label: "Installation",
							link: "/guides/installation/",
						},
						{
							label: "Environment Variables",
							link: "/guides/environment/",
						},
						{
							label: "Project Structure",
							link: "/guides/project-structure/",
						},
						{
							label: "Components",
							items: [
								{
									label: "Routes",
									link: "/guides/components/routes/",
								},
								{
									label: "Models",
									link: "/guides/components/models/",
								},
								{
									label: "Views",
									link: "/guides/components/views/",
								},
								{
									label: "Controllers",
									link: "/guides/components/controllers/",
								},
								{
									label: "Middlewares",
									link: "/guides/components/middlewares/",
								},
								{
									label: "Validations",
									link: "/guides/components/validations/",
								},
								{
									label: "File Management",
									link: "/guides/components/files/",
								},
							],
						},
						{
							label: "Fundamental",
							items: [
								{
									label: "Routes",
									link: "/guides/components/routes/",
								},
							],
						},
						{
							label: "Ready-Built Function",
							items: [
								{
									label: "Authentication",
									link: "/guides/builtin/authentication/",
								},
								{
									label: "Authorization",
									link: "/guides/builtin/authorization/",
								},
								{
									label: "Role-based Access Control (RBAC)",
									link: "/guides/builtin/rbac/",
								},
							],
						},
						{
							label: "Object Relational Mapping",
							items: [
								{
									label: "About Sequelize",
									link: "https://sequelize.org/",
								},
								{
									label: "Sequelize ORM Builder",
									link: "/guides/database/orm-builder/",
								},
							],
						},
						{
							label: "Command-Line Interface",
							items: [
								{
									label: "About Sequelize",
									link: "https://sequelize.org/",
								},
								{
									label: "Sequelize ORM Builder",
									link: "/guides/database/orm-builder/",
								},
							],
						},
					],
				},
				{
					label: "Reference",
					autogenerate: {
						directory: "reference",
					},
				},
			],
		}),
	],
});
