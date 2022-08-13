import * as eta from "eta";

export function renderTemplate(template: string, options: object): string {
	eta.configure({
		autoTrim: false,
	});

	return eta.render(template, options) as string;
}
