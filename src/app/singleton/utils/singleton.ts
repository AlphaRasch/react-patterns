type GetData = (key: string) => string
type SetData = (key: string, value: string) => void 
type GetCreatedAt = () => string

export type SingletonInstance = {
    setData: SetData,
    getData: GetData,
    getCreatedAt: GetCreatedAt,
    data: Record<string, string>
}

type GetInstance = {
    getInstance: () => SingletonInstance
}

export const singletonCreator: GetInstance = (function () {
    let instance: SingletonInstance | null = null;
    let createdAt: string = "";
    
    function setData(key: string, data: string) {
        if (instance) {
            instance.data[key] = data;
        }
    }

    function getData(key: string) {
        if (instance) {
            return instance.data[key];
        }

        throw new Error("Cannot find instance")
    }

    function getCreatedAt() {
        return createdAt;
    }

    function createInstance() {
        // eslint-disable-next-line no-new-object
        const object: SingletonInstance = {
            setData: setData,
            getData: getData,
            getCreatedAt: getCreatedAt,
            data: {}
        };

        createdAt = new Date().toLocaleString()

        return object;
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
