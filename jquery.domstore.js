module.export.$$ = (function($) {
    $DOMSTORE = {};
    return function(selector, force) {
        if ($DOMSTORE[selector] === undefined || force)
            $DOMSTORE[selector] = $(selector);
        return $DOMSTORE[selector];
    }
})($);