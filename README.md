jQuery Highlight 
----------------

Find some text in the DOM. The difference between this and [other](http://www.gotoquiz.com/web-coding/programming/javascript/highlight-words-in-text-with-jquery/) [Plugins](http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html) is that it looks for text in multiple nodes. It uses [DOMRanges](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html) and therefor it doesn't works in IE < 10.

## Usage ##

You can find some examples [here](http://fweinb.github.com/jqueryhighlight/).


### Basic usage: ###

```
$('body').highlight("Search Query");
```

This will search for the text "Search Query" in the whole document will only highlight the first hit. 


### Multiple occurrences: ###

To highlight all occurrences of the text you have to pass an option object like this:

```
$('body').highlight("Search Query", {onlyFirst : false});
```

### The 'options' ###

The default options are:

```
{
            onlyFirst : true, 
            idPrefix : '_',
            fussy : false,
            className : 'jQuery_Highlight',
            callback : function(element){}
}
```

**_onlyFirst_** : true if only the first occurrence should be highlighted.  
**_idPrefix_** : the highlighted text will be wrapped in span tags with a id like idPrefix plus an up counting number starting at 1.  
**_fussy_** : Switch to enable/disable fussy logic. Default is false.  
**_className_** : the className of all highlighted text  
**_callback_** : a callback for each highlighted text, to add Custome data and do some fancy stuff with highlighted text.   

## In Action ##

I used it in combination with my node.js [Quote.fm API](http://quote.fm/labs/) wrapper [nodequote](http://github.com/FWeinb/nodequote) to create a bookmarklet to highlight the 'topquote' of an article. [Just try it](http://quotefm.cloudno.de)


