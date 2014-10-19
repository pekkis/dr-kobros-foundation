Kobros = { };

Kobros.User = {
	
	user: null,
	
	render: function() {
		
		var content = "You are <strong>%1$s</strong>.".t([ this.user.nickname ]) + " ";
		
		if(this.user.identity) {
			content += '<a id="logout" href="/user/logout">' + "Log out".t() + "</a>";
		} else {
			content += '<a id="login" href="/user/login">' + "Log in".t() + "</a>";
		}
				
	
		$("#k-bar").html(content);
		
		
	},
	
	
	load: function() {
		
		$.getJSON("/user/stalk", { 'format' : 'json' }, function(response) {
			Kobros.User.user = response.user;
			$("body").trigger('kobros:credentialchange');
		});
		
		
	}
			
		
};
_.bindAll(Kobros.User);

/**
 * Localization class
 */
Kobros.Localization = 
{
    _localizations: {},
    _language: null,
    _locale: null,
    
    init: function(locale, language, data)
    {
        Kobros.Localization._language = language;
        Kobros.Localization._localizations = data;
    },
    
    /**
     * Returns the language the localization was initialized with.
     */
    getLanguage: function()
    {
        return Kobros.Localization._language;
    },
    
    
    /**
     * translate
     * 
     * @param {String} tstr String to translate
     * @param {Array} params Parameters to inject to the path
     */
    translate: function(tstr, params)
    {
        if(Kobros.Localization._localizations[tstr]) 
        {
            tstr = Kobros.Localization._localizations[tstr];
        }
        
        if(params) {
            $.each(params, function(key, value) {
                
                tstr = tstr.replace("%" + (key + 1) + "$s", value);
            })
        }
        
        return tstr;
    }
    
};

String.prototype.t = function(params)
{
    return Kobros.Localization.translate(this.toString(), params);

}





$(function() {
	
	$("body").bind("kobros:credentialchange", function() {
		Kobros.User.render();
		
	});
		
	Kobros.User.load();	
	
	

});