(function($){
	$.fn.extend({ 
		highlight	: function(searchStrings, options) {

			var $this = $(this);	

			var defaultOptions = {
						onlyFirst : true, 
						idPrefix : '_',
						className : 'jQuery_Highlight',
						callback : function(){}
			}

			var options = $.extend(defaultOptions, options);

			var core = {
				search 	: 	'',	
				length 	: 	0,		 
				pos  	: 	0, 
				range	: 	null,
				found	: 	false,
				count 	: 	1, 

				search : function(str, $node){
							this.search = str;
							this.length = this.search.length;
							this.range = document.createRange();
							this.startSearch($node, function(range){
								options.callback(core.surroundContent(range));	
								core.count++;
							}); 
				},

				startSearch : function($node, callback){	
					
					$node.contents().each(function(){ 
						
						if (core.found && options.onlyFirst) return false;					
						
						if (this.nodeType === 3){	 
							
							var 	nodeText = this.textContent
							,	 	length = nodeText.length;	

							for (var i=0;i<length;i++){	
										if (nodeText[i] === core.search[core.pos]){

											if (core.pos === 0){
							
												core.range.setStart(this, i); 
											
											}
						
											core.pos++;

											if (core.pos === core.length){	
													core.found = true;									
													core.range.setEnd(this, (i+1));	
													callback(core.range);	
													return false; 
											}
						
										}else{
											core.pos = 0;
										}
						
							}
						
						}else if (!/(script|style|iframe|object|embed)/i.test(this.tagName)){
						
							core.startSearch($(this), callback); 
						
						}
					}); 
				},
				surroundContent : function(range){
							var cont = range.extractContents();
							if (cont.childNodes.length > 1){
								$(cont).contents().each(function(){
															if (/(p|div)/i.test(this.tagName)){
																$(this).wrapInner('<span class="'+options.className+'">');
															}
														});
							}
							var newEl = document.createElement('span');
							newEl.id = options.idPrefix+core.count;
							newEl.className = options.className;
							newEl.appendChild(cont);
							range.insertNode(newEl);
							return newEl;
						}
			}
			 
			// Start		
			core.search(searchStrings, $this);
				
			return $this;
	}
})})(jQuery);
