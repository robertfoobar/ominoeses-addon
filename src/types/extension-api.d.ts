declare namespace browser {
    
    class BeforeRequestListener {
        addListener: (any) => any;
    } 

    var webRequest: {
        onBeforeRequest: {
            addListener: (redirection: any, types: any, synch: any) => any;
        }
    };


}
