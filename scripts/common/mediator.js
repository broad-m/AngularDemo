define(function () {

    var channels = {};

    function subscribe(channel, fn, id) {
        if (!channels[channel]) channels[channel] = [];

        var arr = channels[channel],
            len = arr.length,
            hasSubscribed = false,
            i;

        if (len > 0) {
            for (i = 0; i < len; i++) {
                if (arr[i].id === id) {
                    hasSubscribed = true;
                    break;
                }
            }
        }
        if (!hasSubscribed) {
            arr.push({context: this, callback: fn, id:id});
        }

        return this;
    }

    function publish(channel) {
        if (!channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = channels[channel].length; i < l; i++) {
            var subscription = channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    }


    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };

})