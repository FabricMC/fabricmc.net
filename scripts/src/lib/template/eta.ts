import * as Eta from "eta";

export function renderTemplate(template: string, options: object): string {
	Eta.configure({
		autoTrim: false
	});

	return Eta.render(template, options) as string;
}