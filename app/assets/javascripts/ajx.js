var _bon_global_transition_blockui = {
    message: "",
    css: {
        display: 'none',
        width: '0px',
        padding: '0px',
        border: 'none'
    },
    overlayCSS: {
        backgroundColor: '#ffffff',
        zIndex: 999999999
    }
};

$(document).ajaxStart(function() {
        $.blockUI(_bon_global_transition_blockui);
     }).ajaxStop(function () {
        $.unblockUI()
});