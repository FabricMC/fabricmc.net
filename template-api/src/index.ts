import * as generator from "../../scripts/dist/fabric-template-generator.js";
import { Hono } from 'hono'
import { cache } from 'hono/cache'
const { XMLParser} = require("fast-xml-parser");

import {getMinecraftVersions} from './v1/minecraftVersions'
import {generateTemplate} from './v1/generate'

generator.setXmlVersionParser((xml) => {
	const document = new XMLParser().parse(xml);
	return document.metadata.versioning.versions.version;
})

const app = new Hono()

// Cache all responses for 1 hour
app.get(
	'*',
	cache({
		cacheName: 'template-api',
		cacheControl: 'max-age=3600',
	})
)

app.post('/v1/generate', async (c) => await generateTemplate(c.req.json()))
app.get('/v1/generate', async () => await generateTemplate({}))
app.get('/v1/minecraftVersions', async (c) => c.json(await getMinecraftVersions()))

export default app