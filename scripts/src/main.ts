interface Constructor {
    new(options: any): unknown;
}

interface Module {
    default: Constructor;
}

function lazy(name: string): () => Promise<Module> {
    return (() => import(`./lib/${name}.svelte`)) as any as () => Promise<Module>;
}

const Installer = lazy("Installer");
const MCUpdater = lazy("MCUpdater");
const Technic = lazy("Technic");
const Server = lazy("Server");
const Versions = lazy("Versions");
const Documentation = lazy("Documentation");
const Template = lazy("Template");

let Components: Record<string, () => Promise<Module>> = {
    Installer,
    MCUpdater,
    Technic,
    Server,
    Versions,
    Documentation,
    Template
};

function initComponents() {

    for (const target of document.getElementsByClassName("fabric-component")) {
        if (!(target instanceof HTMLElement)) {
            continue;
        }

        const componentId = target.dataset.component;
        if (!componentId) {
            throw new Error("Missing data-component attribute");
        }

        const constructorPromise = Components[componentId];
        if (!constructorPromise) {
            throw new Error("Unknown component: " + componentId)
        }

        constructorPromise().then((module) => {
            new module.default({
                target
            });
        })
    }
}

document.addEventListener("DOMContentLoaded", initComponents);

export {}