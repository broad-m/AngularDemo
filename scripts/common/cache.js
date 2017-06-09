define(function () {

    function Cache() {

    }


    Cache.push = function (name,type, url, version) {

        var xhr = createAjaxInstance();

        xhr.open('GET',url);
        xhr.onreadystatechange = function () {
            if(xhr.readyState===4 && xhr.status === 200){

                var response = xhr.responseText;

                window.localStorage.setItem(name,response);
            }
        }
        xhr.send();

    }

    function createAjaxInstance() {
        var instance = null;
        if (window.XMLHttpRequest) {
            instance = new XMLHttpRequest();
            //有些版本的Mozilla浏览器处理服务器返回的未包含XML mime-type头部信息的内容时会出错。
            //因此，要确保返回的内容包含text/xml信息
            if (instance.overrideMimeType) {
                instance.overrideMimeType = "text/xml";
            }
        }
        else if (window.ActiveXObject) {
            //IE
            var MicrosoftXML = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
            for (var i = 0; i < MicrosoftXML.length; i++) {
                try {
                    instance = new ActiveXObject(MicrosoftXML[i]);
                    break;
                }
                catch (e) {
                }
            }
        }
        return instance;
    }

    return Cache;
})