// Work around for import/build issues see: https://github.com/eta-dev/eta/issues/123 and https://github.com/eta-dev/eta/issues/122 Next ETA update may fix this.
import etaUrl from '../../../node_modules/eta/dist/browser/eta.min.js?url';

const script = document.createElement('script');
script.src = etaUrl;
document.body.append(script);

declare let Eta: typeof import('eta');

export function renderTemplate(template: string, options: object): string {
	Eta.configure({
		autoTrim: false
	});

	return Eta.render(template, options) as string;
}