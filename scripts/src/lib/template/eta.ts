import { Eta } from "eta"

const eta = new Eta({
	autoTrim: false
})

export function renderTemplate(template: string, options: object): string {
	return eta.renderString(template, options);
}