const GLOBAL_ALLOWED_ATTRIBUTES = new Set([
    'id',
    'class',
    'style',
    'title',
    'role',
    'tabindex',
    'lang',
    'dir',
    'hidden',
    'draggable',
    'contenteditable',
    'spellcheck',
    'accesskey',
    'autofocus',
    'slot',
    'part',
    'exportparts',
    'inert',
    'translate'
]);

const GLOBAL_ATTRIBUTE_PREFIXES = ['data-', 'aria-'];

const normalizeAttributeName = (name) => name.toLowerCase();

const collectDeclaredAttributes = (ctor) => {
    const attributes = new Set();
    let current = ctor;

    while (current && current !== HTMLElement) {
        const descriptor = Object.getOwnPropertyDescriptor(current, 'properties');
        if (descriptor) {
            const properties = current.properties;
            if (properties) {
                for (const [key, options] of Object.entries(properties)) {
                    if (options && typeof options === 'object' && 'attribute' in options) {
                        if (options.attribute === false) {
                            continue;
                        }
                        if (typeof options.attribute === 'string') {
                            attributes.add(normalizeAttributeName(options.attribute));
                            continue;
                        }
                    }
                    attributes.add(normalizeAttributeName(key));
                }
            }
        }
        current = Object.getPrototypeOf(current);
    }

    return attributes;
};

const isGlobalAttribute = (name) => {
    if (GLOBAL_ALLOWED_ATTRIBUTES.has(name)) {
        return true;
    }
    return GLOBAL_ATTRIBUTE_PREFIXES.some((prefix) => name.startsWith(prefix));
};

export const setupAttributeValidation = (element) => {
    const declared = collectDeclaredAttributes(element.constructor);
    const allowed = new Set([...declared, ...GLOBAL_ALLOWED_ATTRIBUTES]);

    const validateName = (name) => {
        const normalized = normalizeAttributeName(name);
        if (allowed.has(normalized) || isGlobalAttribute(normalized)) {
            return;
        }
        throw new Error(`[${element.tagName.toLowerCase()}] Unsupported attribute: ${name}`);
    };

    Array.from(element.attributes).forEach((attr) => validateName(attr.name));

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName) {
                validateName(mutation.attributeName);
            }
        });
    });

    observer.observe(element, {attributes: true});
    return () => observer.disconnect();
};
