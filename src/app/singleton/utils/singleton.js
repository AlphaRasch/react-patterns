export const singletonCreator = (function () {
    let instance = null;
    let createdAt = null;
    function createInstance() {
        // eslint-disable-next-line no-new-object
        const object = new Object(`I was instantiated at: ${new Date().toLocaleString()}`);
        
        createdAt = new Date().toLocaleString()

        object.count = 0;

        return object;
    }

    function setData(key, data) {
        instance[key] = data;
    }

    function getData(key) {
        return instance[key];
    }

    function getCreatedAt() {
        return createdAt;
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            instance.setData = setData;
            instance.getData = getData;
            instance.getCreatedAt = getCreatedAt;

            return instance;
        },
    };
})();
