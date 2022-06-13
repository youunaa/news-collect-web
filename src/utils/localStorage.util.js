export default {

    set_data: function(data) {
        var key = Object.keys(data);

        for (key in data) {
            if (data[key] !== undefined) {
                localStorage.setItem(key, data[key]);
            }
        }
    },

    get_data: function(key) {
        if (!window.localStorage || !window.JSON || !key) {
            return;
        }
        var item = localStorage.getItem(key);

        if (!item || item === undefined) {
            localStorage.setItem(key, '');
            return;
        } else {
            return JSON.parse(item);
        }

    },

    remove_data: function(key) {
        if (!window.localStorage || !window.JSON || !key) {
            return;
        }
        localStorage.removeItem(key);
    }

}